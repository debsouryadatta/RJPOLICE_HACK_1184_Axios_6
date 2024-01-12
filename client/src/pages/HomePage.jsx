import React, { useEffect, useState } from 'react'
import { Nav2 } from '../components/Nav2'
import Map from '../components/HomePage/Map'
import SearchBox from '../components/HomePage/SearchBox'
import { Camera } from '../components/HomePage/Camera'
import axios from 'axios'

const HomePage = () => {
  const [cameras, setCameras] = useState([]);

  const fetchAllCameras = async () => {
    let response = await axios.get('http://localhost:5000/api/v1/fetchAllCameras');
    console.log(response.data.data);
    setCameras(response.data.data);
    setCameras? console.log(cameras): console.log('no cameras');
  }

  useEffect(() => {
    fetchAllCameras();
  }, [])
  

  return (
    <>
      <div>
        <Nav2 />
      </div>
      {/* <div className='flex justify-center mt-10'>
        <SearchBox />
      </div> */}
      <div className='flex justify-center m-10 flex-wrap'>
        <div className='flex flex-col justify-center w-[100%] sm:w-[40%]'>
          <h1 className='text-3xl font-medium text-gray-700 text-center mb-10'>Camera List</h1>
          {cameras?.map((camera)=> {
            return (
              <Camera key={camera._id} camera={camera} fetchAllCameras={fetchAllCameras}/>
            )
          })}
        </div>
        <div className='flex justify-center w-[100%] sm:w-[60%]'>
          <Map markers={cameras}/>
        </div>
      </div>
    </>
  )
}

export default HomePage