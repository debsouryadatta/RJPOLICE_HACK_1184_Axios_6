import React from 'react'

const VideoPlayer = () => {
    return (
        <video className="h-full rounded-lg w-[80%]" controls autoPlay>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default VideoPlayer