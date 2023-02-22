import React from "react";
import Video from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full top-[90px] h-[90vh]">
      <video
        className="object-cover w-full h-full absolute -z-10"
        src={Video}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="md:text-5xl">Decentralized</h1>
        <h1 className="py-2 md:text-4xl"><span className="text-[var(--primary-blue)]">Trading</span> Protocol</h1>
        <p className="text-xl md:text-2xl py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum
          ex natus.
        </p>
        <div>
          <button className="m-2 rounded">Use Defi</button>
          <button className="m-2 bg-none border rounded">FAQ</button>
        </div>
          </div>
          <div className='text-center text-white text-2xl md:text-3xl' >
              <p>Total Volume Secured: $42,104,783,421,47</p>
          </div>
    </div>
  );
};

export default Hero;
