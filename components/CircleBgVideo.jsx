import React from 'react'

const CircleBgVideo = () => {
  return (
    <div className="absolute flex justify-center top-0 left-0 w-full h-screen -z-1">
        <video className="sm:w-full w-screen h-screen object-cover" autoPlay muted loop>
            <source src="/assets/video/circle.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default CircleBgVideo