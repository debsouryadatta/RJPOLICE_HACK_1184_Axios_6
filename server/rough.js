const { default: mongoose } = require("mongoose");
require('dotenv').config();
const Camera = require("./models/Camera");

const arr = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '919876543210',
    address: '123 Main St, Agartala, Tripura, India',
    pincode: '799001',
    cameraModel: 'Canon EOS 5D Mark IV',
    cameraDMSLocation: {lat: 23.829321, lng: 91.277847},
    cameraResolution: '30.4 MP',
    cameraRange: '100-32000 ISO',
    ipAddress: '0.0.0.0',
    verificationStatus: 'verified',
    rtspLink: 'rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1',
    __v: 0,
    licenseKey: '61aaa225-e319-4f65-a456-f5356693c909'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    phoneNumber: '919765432109',
    address: 'Netaji Chowmuhani, Agartala, Tripura, India',
    pincode: '799002',
    cameraModel: 'Nikon D850',
    cameraDMSLocation: {lat: 23.8271, lng: 91.2784},
    cameraResolution: '45.7 MP',
    cameraRange: '64-25600 ISO',
    ipAddress: '0.0.0.0',
    verificationStatus: 'verified',
    rtspLink: 'rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1',
    __v: 0
  },
  {
    name: 'Bob Smith',
    email: 'bobsmith@gmail.com',
    phoneNumber: '919654321098',
    address: 'Post office agartala tripura India',
    pincode: '799003',
    cameraModel: 'Sony Alpha a7 III',
    cameraDMSLocation: {lat: 23.8500, lng: 91.3007},
    cameraResolution: '24.2 MP',
    cameraRange: '100-51200 ISO',
    ipAddress: '0.0.0.0',
    verificationStatus: 'verified',
    rtspLink: 'rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1',
    __v: 0
  },
  {
    name: 'Alice Smith',
    email: 'alicesmith@gmail.com',
    phoneNumber: '919543210987',
    address: 'radhanagar agartala tripura india',
    pincode: '799004',
    cameraModel: 'Fujifilm X-T4',
    cameraDMSLocation: {lat: 23.8450, lng: 91.2801},
    cameraResolution: '26.1 MP',
    cameraRange: '160-12800 ISO',
    ipAddress: '0.0.0.0',
    verificationStatus: 'verified',
    rtspLink: 'rtsp://192.168.1.13:554/stream1',
    __v: 0
  },
  {
    name: 'David Lee',
    email: 'davidlee@gmail.com',
    phoneNumber: '919432109876',
    address: 'motorstand agartala tripura india',
    pincode: '799005',
    cameraModel: 'Panasonic Lumix DC-S1R',
    cameraDMSLocation: { lat: 23.8248, lng: 91.2683},
    cameraResolution: '47.3 MP',
    cameraRange: '100-51200 ISO',
    ipAddress: '0.0.0.0',
    verificationStatus: 'verified',
    rtspLink: 'rtsp://192.168.1.14:554/stream1',
    __v: 0
  }
]



// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, './videos/ipcam/0/170440046086928.ts');

// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(`File was created on: ${stats.birthtime}`);
// });

const create = async ()=> {
  mongoose.connect(process.env.MONGO_URI)
  const response = await Camera.insertMany(arr);
  console.log(response);
}
const read = async ()=> {
  mongoose.connect(process.env.MONGO_URI)
  const response = await Camera.find({});
  console.log(response);
}

const deleteAll = async ()=> {
  mongoose.connect(process.env.MONGO_URI)
  const response = await Camera.deleteMany({});
  console.log(response);
}

// deleteAll();
create();
// read();
