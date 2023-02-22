import React from "react";
import AboutCards from "./AboutCards";
import { SiFsecure, SiHiveBlockchain, SiStrapi } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const About = () => {
  return (
    <div className=" bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi magni
            laboriosam fugiat quaerat modi dolor ipsa ex suscipit! Vitae
            assumenda illo, inventore sequi atque magnam.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCards
              icon={
                <SiHiveBlockchain
                  size={40}
                  className="rounded-full p-2 my-3 text-gray-800 bg-[var(--primary-blue)]"
                />
              }
              heading="Reliable, Tamper-proof Network"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ut in
               excepturi rem neque, doloremque eos beatae consequuntur enim molestiae
               aliquam tempora."
            />
            <AboutCards
              icon={
                <SiStrapi
                  size={40}
                  className="rounded-full p-2 my-3 text-gray-800 bg-[var(--primary-blue)]"
                />
              }
              heading="Reliable, Tamper-proof Network"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ut in
               excepturi rem neque, doloremque eos beatae consequuntur enim molestiae
               aliquam tempora."
            />
            <AboutCards
              icon={
                <SiFsecure
                  size={40}
                  className="rounded-full p-2 my-3 text-gray-800 bg-[var(--primary-blue)]"
                />
              }
              heading="Reliable, Tamper-proof Network"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ut in
               excepturi rem neque, doloremque eos beatae consequuntur enim molestiae
               aliquam tempora."
            />
            <AboutCards
              icon={
                <VscServerProcess
                  size={40}
                  className="rounded-full p-2 my-3 text-gray-800 bg-[var(--primary-blue)]"
                />
              }
              heading="Reliable, Tamper-proof Network"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ut in
               excepturi rem neque, doloremque eos beatae consequuntur enim molestiae
               aliquam tempora."
            />
          </div>
          <button className="m-6">Use Defi</button>
        </div>
      </div>
    </div>
  );
};

export default About;
