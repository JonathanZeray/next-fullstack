import React from "react";

const DancerBgVideo = () => {
  return (
    <>
      <div className="relative flex justify-center top-0 left-0 w-full h-[400vh] -z-1">
        <video
          className="sticky top-0 sm:w-full w-screen h-screen object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/assets/video/dancer.mp4" type="video/mp4" />
        </video>
      <div className="absolute sm:inset-y-1/4 inset-y-2/4 ml-4 mr-12 sm:mx-28">
        <h2 className="z-1 font-semibold sm:text-6xl text-3xl sm:text-center text-left text-white">
          {" "}
          Up to 2 times more active noise cancellation compared to the previous
          generation. With touch controls, you adjust the volume with a swipe.
          And the battery life takes a significant step forward – one charge
          lasts for 6 hours of use.
        </h2>
      </div>
      </div>
      <div className="h-screen bg-white"></div>
      
    </>
  );
};

export default DancerBgVideo;
