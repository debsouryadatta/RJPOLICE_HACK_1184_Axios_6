coco_class_names = ['person','bicycle','car','motorcycle','airplane','bus','train','truck','boat','traffic light','fire hydrant','stop sign','parking meter','bench','bird','cat','dog','horse','sheep','cow','elephant','bear','zebra','giraffe','backpack','umbrella','handbag','tie','suitcase','frisbee','skis','snowboard','sports ball','kite','baseball bat','baseball glove','skateboard','surfboard','tennis racket','bottle','wine glass','cup','fork','knife','spoon','bowl','banana','apple','sandwich','orange','broccoli','carrot','hot dog','pizza', 'donut','cake', 'chair','couch','potted plant','bed','dining table','toilet', 'tv', 'laptop','mouse','remote','keyboard','cell phone','microwave','oven','toaster', 'sink','refrigerator','clock','vase','scissors','teddy bear','hair drier','toothbrush']

weapons_class_names = ['Automatic Rifle','Bazooka', 'Grenade Launcher', 'Handgun', 'Knife', 'Shotgun', 'SMG', 'Sniper', 'Sword']


def find_weapon_name(index):
    return weapons_class_names[index];

def find_coco_name(index):
    return coco_class_names[index];

if __name__ == "__main__":
    print(len(coco_class_names))