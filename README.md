
# System for Geo-Tagging of privately owned cameras

The website's landing page serves as an informative hub about its objectives and features, including FAQs. Users are prompted to log in, with distinct access points for clients and departments. Clients can register their cameras by providing essential details.

On the department side, designated IDs are issued for login access. When a department requires camera footage for a specific area, they can search for the location, and a map will display the available cameras. Authorities can then access the footage from any chosen camera. The system ensures constant surveillance for any suspicious activities, with real-time alerts sent to the relevant authorities. Additionally, in case of displacement or malfunction, camera owners are promptly notified for immediate repair.

&nbsp;&nbsp;
### Frontend

Total 7 pages
1. Landing Page
2. New Camera Registration Page
3. Admin Login Page
4. License Page
5. Home Page
6. Get Live streaming and recordings page
7. Alerts/Notification Page
\
![App Screenshot](https://res.cloudinary.com/diyxwdtjd/image/upload/v1703010444/Personal/Screenshot_2023-12-19_182548_p9uk66.png)

Normal user can only register their camera, other features are only available 
for the admins(i.e. The Control Centre)

&nbsp;&nbsp;

### Backend

Total 8 Routes
1. For new camera registration
2. For admin login
3. For generating camera licensee
4. For getting the details of the cameras on location basis
5. For getting the live streaming of the cameras by their license no.
6. For getting the 1 day footage of the cameras by their license no.
7. For getting the alerts in case of any suspicious activity
8. For getting notifications in case of any displacement of the cameras

### More Detailed Overview
![App Screenshot](https://res.cloudinary.com/diyxwdtjd/image/upload/v1703011060/Personal/Screenshot_34_z15kqd.png)

&nbsp;&nbsp;

### Streaming of IP Camera into browser

The process of streaming an IP Camera into a browser involves several steps:

1. **Stream IP Camera to VLC player**: The IP camera stream is first sent to a VLC player using a specific URL format. For a TP-Link C200 model, the URL format is `rtsp://{username}:{password}@{ip}:554/stream1`.

2. **Convert stream to HLS**: The stream is then converted to HLS (HTTP Live Streaming) using the FFMPEG command. The command also specifies the output file and other parameters such as packet flushing, delay, global header flags, HLS time, list size, and video codec.

3. **Cleanup streamed `.ts` files**: A script (`cleaner.js`) is run to delete the streamed/served `.ts` files from the local directory to save space.

4. **Serve the auto-generated HLS (m3u8) file**: Another script (`hls-server.js`) is run to serve the auto-generated HLS file.

5. **Test HLS file in browser**: The HLS file can then be tested in a browser by visiting `cookpete.com/react-player` and inputting the m3u8 URL (`http://localhost:4000/index.m3u8`).

The process also involves the use of several packages including express, nodemon, mongoose, mongodb, express-async-errors, dotenv, and find-remove.


&nbsp;&nbsp;


### Machine Learning Model for Image Processing

The code initializes a video capture object (cv2.VideoCapture) to capture frames from a live camera feed (cam = cv2.VideoCapture(0)).
The code enters a loop where it continuously captures frames from the camera (cam.read()).
The model.segmentFrame function is then applied to each frame for instance segmentation. This function takes the frame as input and returns the segmented image along with other information.
The segmented image is displayed using OpenCV (cv2.imshow) with bounding boxes drawn around the identified objects (show_bboxes=True).
The loop continues until the user presses the 'q' key 

**About Mask-R-CNN**: 
Mask R-CNN is a deep learning model designed for object instance segmentation. It extends the Faster R-CNN architecture by adding an additional branch for predicting segmentation masks alongside bounding boxes and class labels.
It can not only identify objects in an image but also provide a pixel-level mask for each object, distinguishing individual instances of the same class.

&nbsp;&nbsp;

### WIll get modified if required!!


