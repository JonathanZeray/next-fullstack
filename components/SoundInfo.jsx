import React from "react";
import AirpodInfo from "./AirpodInfo";

const SoundInfo = () => {
  return (
    <>
      <div className="h-[20vh] border-0"></div>
      <section className="h-screen w-full leading-1">
        <div className="text-white ml-6 sm:mx-32 mb-32 sm:mb-20">
          <h2 className="font-semibold text-2xl sm:text-4xl mb-4">Sound</h2>
          <h3 className="font-bold text-4xl sm:text-8xl mb-8">
            H2. Breathe new life into every tone.
          </h3>
          <p className="font-semibold text-2xl sm:w-3/4">
            AirPods Pro are powered by Apple's new H2 chip, which provides
            fantastic sound quality. Together with the specially engineered
            speaker driver and amplifier, it delivers a more vibrant and
            detailed sound than ever, with clean, clear treble and deep, rich
            bass.
          </p>
        </div>
        <div className="sm:flex sm:w-full border-y-[0.8px] sm:border-gray-500">
          <video className="sm:h-full object-contain border-b-[0.8px] sm:border-b-0 border-gray-500" autoPlay muted>
            <source src="/assets/video/h2.mp4" type="video/mp4" />
          </video>
          <div className="flex justify-center items-center sm:border-l-[0.8px] sm:border-gray-500 mb-10 sm:mb-0">
            <p className="font-inter gray_text font-semibold text-2xl sm:text-3xl mx-6 mt-16 sm:mt-0 sm:mx-20 sm:text-left">
              <span className="text-white opacity-100">The H2 chip</span>{" "}
              performs more tasks than ever and utilizes{" "}
              <span className="text-green-500">advanced algorithms</span> for
              even smarter noise reduction, premium three-dimensional audio, and
              more efficient battery usage – all at the same time.
            </p>
          </div>
        </div>
        <AirpodInfo />
      </section>
    </>
  );
};

export default SoundInfo;
