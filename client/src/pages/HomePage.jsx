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
        <div className='flex justify-center w-[100%] sm:w-[40%]'>
          <Camera />
        </div>
        <div className='flex justify-center w-[100%] sm:w-[60%]'>
          <Map markers={cameras}/>
        </div>
      </div>
    </>
  )
}

export default HomePage