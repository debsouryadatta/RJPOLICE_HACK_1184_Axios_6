import React from 'react'
import { Nav2 } from '../components/Nav2'
import SearchBox from '../components/StreamingPage/SearchBox'
import VideoPlayer from '../components/StreamingPage/VideoPlayer'

const StreamingPage = () => {
  return (
    <div>
      <div>
        <Nav2 />
      </div>
      <div className='flex justify-center mt-8'>
        <SearchBox />
      </div>
      <div className='flex justify-center mt-8'>
        <VideoPlayer />
      </div>
    </div>
  )
}



export default StreamingPage