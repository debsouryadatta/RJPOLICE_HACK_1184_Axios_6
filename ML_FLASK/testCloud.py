import cloudinary
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
from cloudinary.uploader import destroy
import requests
import dotenv
from dotenv import load_dotenv,dotenv_values
load_dotenv()
config=dotenv_values(".env")
cloudinary.config(cloud_name = config['CLOUD_NAME'], api_key=config['API_KEY'], 
    api_secret=config['API_SECRET'])

def upload_image(filename):
    results = upload(filename)
    return results['public_id']
def download_image(public_id):
    url,options =  cloudinary_url(public_id)
    # print(url)
    response =requests.get(url)
    
    with open(f"{public_id}.jpg",'wb') as f:
        f.write(response.content)
def delete_image(public_id):
    result = destroy(public_id)
        
if __name__ == '__main__':
    pass
    # upload_image("test2.jpg")
    # delete_image('lbhoe6rcgnvuaizlcqa7')
    # download_image("hfentqmp3np8l6du6ips");