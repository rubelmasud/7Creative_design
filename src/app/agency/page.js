import Brand from "@/components/Brand";
import RequestCallBanner from "@/components/RequestCallBanner";
import Hero from "@/components/shared/hero/Hero";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import React from "react";

const Agency = () => {
  return (
    <div className="bg-black">
      <Hero
        subTitle="ABOUT AGENCY"
        heroTitle="The last digital agency you will ever need!"
      />

      <div className="text-white md:flex items-center container gap-12">
        <div className="md:w-[60%] w-full">
          <h2 className="md:text-4xl text-3xl leading-tight ">
            Turning your business ideas into smart digital products since 2001
          </h2>
          <p className="opacity-60 my-8 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non
            dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem
            eget sollicitudin tempor, libero velit aliquam enim, vel egestas
            tortor ante quis sem.
          </p>
          <div className="flex items-center justify-between">
            <div className="box">
              <h1 className="text-indigo-500 md:text-6xl text-5xl font-normal">
                10+
              </h1>
              <h3 className="md:text-xl text-sm font-normal w-[80%] md:mt-4 mt-2">
                Years of experience
              </h3>
            </div>
            <div className="box">
              <h1 className="text-indigo-500 md:text-6xl text-5xl font-normal">
                50+
              </h1>
              <h3 className="md:text-xl text-sm font-normal w-[80%] md:mt-4 mt-2">
                Successful cases
              </h3>
            </div>
            <div className="box">
              <h1 className="text-indigo-500 md:text-6xl text-5xl font-normal">
                12+
              </h1>
              <h3 className="md:text-xl text-sm font-normal w-[80%] md:mt-4 mt-2">
                Industry awards
              </h3>
            </div>
          </div>
        </div>
        <div className=" md:w-[40%] w-full md:h-[600px] h-[300px] mt-10 md:mt-0">
          <Image
            src="/images/s1.jpg"
            alt="Img"
            className="w-full h-full rounded-tl-[50px] rounded-br-[50px]"
            width={1000}
            height={900}
          />
        </div>
      </div>

      <div className="content md:flex items-center container mt-10 md:mt-24 gap-16">
        <div className=" md:w-[50%] w-full">
          <Image
            src="/images/s4.jpg"
            alt="Img"
            className="rounded-[40px] w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-[70%] text-white my-10 md:mt-0">
          <h2 className="text-4xl  leading-tight ">Our Mission </h2>
          <br />
          <p className="misson-pera relative text-lg pl-10">
            Fusce fringilla justo vel dui consectetur, fringilla maximus ante
            malesuada. Suspendisse facilisis nisl augue, ut sollicitudin lectus
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veritatis esse vitae officia
            nostrum facere. Fugiat voluptates, expedita dolore at perferendis
            quae libero fuga consequatur veniam, eius non fugit nulla vitae?
          </p>
        </div>
      </div>

      <Brand />
      <Testimonial />
      <br />
      <br />
      <RequestCallBanner />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Agency;
