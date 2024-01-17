import requests
import os 
import shutil
import subprocess
import pathlib
from flask import Flask
import pymongo
from pymongo import MongoClient
import cloudinary
from cloudinary.uploader import upload
import testCloud
from testCloud import upload_image, download_image
from DirManagement import clear_directory
from datetime import datetime
from class_names import find_coco_name,find_weapon_name
import collections
import dotenv
from dotenv import load_dotenv,dotenv_values
import json


load_dotenv()
config = dotenv_values(".env")
# Store the original pathlib.PosixPath
temp_posix_path = pathlib.PosixPath
# Use pathlib.WindowsPath for the script execution
pathlib.PosixPath = pathlib.WindowsPath

#mongo creds 
client = MongoClient(config['MONGO_URL'])
myDB = client[config['DATABASE'] if config['DATABASE']!=None else 'no_database'];
# collection_A = myDB["images"]
collection_A = myDB[config['COLLECTION_A'] if config['COLLECTION_A']!=None else 'no_collection_A'];
# collection_B = myDB["results"]
collection_B = myDB[config['COLLECTION_B'] if config['COLLECTION_B']!=None else 'no_collection_B'];


now = datetime.now();
dt_string =  now.strftime("%d/%m/%Y %H:%M:%S")


imageDetails1={"public_id":"shh3wfqdakeiyv25lda6","time_stamp":dt_string,"processed":0};
# imageDetails2={"public_id":"ccivagsb6ojggsiwjvqc","time_stamp":dt_string,"processed":0};
# imageDetails3={"public_id":"dwlsbeo1ofrufcy1hdqz","time_stamp":dt_string,"processed":0};

def get_public_ids_and_time_stamps():
    results = collection_A.find({'processed':0});
    public_ids=[]
    time_stamps=[]
    ids=[]
    for doc in results:
        
        public_ids.append(doc['public_id'])
        time_stamps.append(doc['time_stamp'])
        ids.append(doc['_id'])
    return public_ids,time_stamps,ids

def check(filepath,weapons_check):
    if(weapons_check):
        weapons=[]
        
        try:
            with open(filepath,'r') as file:
                for line in file:
                    first_char = ""
                    if  line.strip() :
                        i=0
                        while(line[i]!=' '):
                            first_char+=line[i]
                            i+=1
                    if(first_char):
                        weapons.append(find_weapon_name(int(first_char)))
        except FileNotFoundError:
            pass
        
        return weapons
    else:
        common_names=[]
        try:
            with open(filepath,'r') as file:
                for line in file:
                    first_char = ""
                    if  line.strip() :
                        first_char+=line[1]
                        i=0
                        while(line[i]!=' '):
                            first_char+=line[i]
                            i+=1
                    if(first_char):
                        common_names.append(find_coco_name(int(first_char)))
        except FileNotFoundError:
            pass
        return common_names;
                    
                    
def run_detection_commands(public_id,time_stamp):
    #Run detection for suspicious activity(here weapons)
    command1 = ['python', 'detect.py', '--source', f'{public_id}.jpg', '--weights', 'best_on_full_dataset.pt','--project','results','--save-txt']
    subprocess.run(command1,shell=True)
    
    #get the list of suspicious objects
    list_of_detected_weapons = check(f"./results/exp/labels/{public_id}.txt",True);
    
    if(len(list_of_detected_weapons)):
        #check for all other common objects 
        command2 = ['python','detect.py','--source',f'./results/exp/{public_id}.jpg','--weights','yolov5s.pt','--project','results','--save-txt']

        subprocess.run(command2,shell=True);
        
        #get the list of common objects detected
        list_of_common_objects = check(f"./results/exp2/labels/{public_id}.txt",False);
        all_detected_dict=collections.defaultdict(int)#Push everything into a dictionary along with the frequency of their occurance and send alert.
        
        
        
        
        #make a dictionary having all the detected  objects
        for i in list_of_detected_weapons:
            all_detected_dict[i]+=1;
        for i in list_of_common_objects:
            all_detected_dict[i]+=1;
            
        #insert the details into database and send alert as well
        processed_image_public_id = upload_image(f"./results/exp2/{public_id}.jpg"); 
        details = {"public_id":processed_image_public_id,"message":all_detected_dict,"time_stamp":time_stamp};
        collection_B.insert_one(details)
        return details;
    else:
        #No Suspicious activity/object detected 
        return {}    
        

    
    
    
def fetch_image_and_detect():
    #fetch public ids of images and their respective time_Stamps
    public_ids,time_stamps,ids = get_public_ids_and_time_stamps(); 
    
    #clear the results directory
    clear_directory("./results")
    
    all_alerts=[]
    for i in range(len(public_ids)):
        
        #run the image detection algos on the current image
        public_id = public_ids[i]
        time_stamp = time_stamps[i]
        
        #download the image from cloud
        download_image(public_id);
        
        downloaded_image_path = f"./{public_id}.jpg";

        alert = run_detection_commands(public_id,time_stamp)
        print("Alert = ",alert);
        if(len(alert)):
            all_alerts.append(alert)
        #update the processed field to 1
        collection_A.find_one_and_update({"_id":ids[i]},{"$set":{"processed":1}});
        
        # print("------------------------------------------------")
        # print(f"Image with public_id : {public_id} is processed")
        # print("----------------------- -------------------------")
        
        # t = int(input())
        
        #remove everything from the results directory
        clear_directory("./results")
        
        
        #delete the downloaded Image
        os.remove(downloaded_image_path);
    return all_alerts;
        
    
  
    

    
    
app = Flask(__name__)

# @app.route("/")

# def hello_world():
#     # fetch_image_and_detect();
#     dictionary = {"name":"Anshuman","college":"NITA"};
#     json_object=json.dumps(dictionary)
#     return json_object

@app.route("/fetch")
def process():
    all_alerts = fetch_image_and_detect()
    print(all_alerts);
    # alerts_json_object = json.dumps(all_alerts)
    # fetch_image_and_detect();
    # return alerts_json_object
    return "Processed";

if __name__ == '__main__':
    
    # data = fetch_image_and_detect();
    # print(data);
    # requests.post('https://f06f-103-23-239-57.ngrok-free.app/api/v1/addAlert',json =data , headers={'ngrok-skip-browser-warning':'1231','Content-type':'application/json'});
    app.run(port=2002,debug=True);
    # app.run(port = 2002,debug=True)
    
    # collection_A.insert_many([imageDetails1]);
    # upload_image("test_all.jpg");
    # public_id = 'szhzohjt0zhkv5l1fv7u';
    # collection_A.find_one_and_update({"public_id":public_id},{"$set":{"processed":0}});
    # fetch_image_and_detect();
    # s="0"
    # print(int(s))
    # print(fetch_image_and_detect())
    # pbid = upload_image("harmless.jpg")
    # print("public_id = ",pbid);
    
    # command1 = ['python', 'detect.py', '--source', 'test_for_gun2.jpg', '--weights', 'best.pt','--project','results','--save-txt']
    
    # subprocess.run(command1,shell=True)
    
    #get the list of suspicious objects
    # list_of_detected_weapons = check(f"./results/exp/labels/test_for_gun2.txt",True);
    # print(list_of_detected_weapons)
    
    # train_command = ['python','train.py', '--data','./data/weapon_dataset.yaml', '--epochs', '3', '--project', 'custom_yolov5','--weights','yolov5s.pt']
    
    # subprocess.run(train_command);
    # clear_directory("./custom_yolov5");
    