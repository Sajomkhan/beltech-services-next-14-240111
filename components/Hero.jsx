import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      {/* ==============Hero Background============ */}
      {/* for destop */}
      <Image
        className="hidden md:block w-full h-[530px] md:h-[540px] absolute -z-20 object-cover object-center"
        src="/assets/hero.png"
        width={1200}
        height={800}
        alt="Hero Image"
      />
      {/* for phone */}
      <Image
        className="block md:hidden w-full h-[530px] md:h-[540px] absolute -z-20 object-cover object-center"
        src="/assets/hero.png"
        width={800}
        height={650}
        alt="Hero Image"
      />
      {/* Background Overlay */}
      <div className="w-full h-[530px] md:h-[540px] absolute -z-10 bg-primary-50/80" />
      {/* ================= Hero Forground================= */}
      <div className="device pt-3">
        <div className="flex-1 max-w-full h-[540px] device_center">
          <div className="flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-500 w-fit font-semibold shadow-lg">
            <span className="text-primary text-lg mr-2">&hearts;</span>Your
            satisfaction is our power!
          </div>
          <h1>We care about your softer, machine and automation</h1>
          <a
            href="/"
            className="uppercase btn_primary rounded-full shadow-lg px-6 py-3"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-1 shadow-lg device_center items-center">
          <Image
            className="max-w-[350px] md:max-w-[550px]  h-[200px] md:h-[350px] object-cover"
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            // src="/image/hero.png"
            width={500}
            height={700}
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
