"use client";

import React from "react";
import { TitleSm } from "./shared/title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi";
import { testimonial } from "@/data/dummyData";
import Link from "next/link";
import Image from "next/image";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="next" onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="prev" onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className=" bg-black text-white pt-20">
      <div className="container">
        <div className="heading-title text-xl font-semibold tracking-wider text-center pb-20">
          <TitleSm title="WHAT CLIENTS SAY ABOUT OUR WORK" />
        </div>
        <div className="cards">
          <Slider {...settings}>
            {testimonial.map((user) => (
              <div key={user.id}>
                <div className="card md:mr-6">
                  <div className="image flex items-center gap-10 pb-10">
                    <div className="">
                      <Image
                        className="rounded-[100%]"
                        src={user.cover}
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="img-text ">
                      <h3 className="mb-2 font-semibold text-lg">
                        {user.name}
                      </h3>
                      <span className="tracking-[3px] text-sm text-gray-500">
                        {user.post}
                      </span>
                    </div>
                  </div>
                  <div className="details">
                    <p className="tracking-[1px] leading-[30px] text-gray-200">
                      {user.desc}
                    </p>
                    <Link
                      href="/#"
                      className="flex items-center mt-4 gap-4 text-[#845AFF] "
                    >
                      VIEW CASE <HiOutlineArrowRight className="link-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
