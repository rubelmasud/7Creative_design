import React from "react";
import { Title } from "./shared/title/Title";
import { brand } from "@/data/dummyData";
import Image from "next/image";

const Brand = () => {
  return (
    <section className="bg-black text-white md:py-20 py-4">
      <div className="container">
        <div className="heading-title text-center md:mb-20 mb-10">
          <Title
            title="WE ARE PROUD TO WORK WITH THESE COMPANIES"
            className="font-semibold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
          />
        </div>
        <div className="brand-content grid md:grid-cols-6 grid-cols-1 md:gap-10 gap-4 justify-center  w-full">
          {brand.map((item) => (
            <a href="#" className="images" key={item.id}>
              <Image
                className="opacity-50 hover:opacity-100 duration-500 mx-auto"
                src={item?.cover}
                alt={item?.id}
                width={200}
                height={200}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
