import Image from "next/image";
import React from "react";

const ServicesCart = ({ service }) => {
  const { title, cover, desc } = service || {};
  return (
    <div className="block justify-center mx-auto md:mb-20">
      <Image
        width={700}
        height={800}
        src={cover}
        alt="img"
        className="rounded-tl-[50px] rounded-br-[50px] pb-4  "
      />
      <div className="mt-4">
        <a href="#">
          <h3 className="text-2xl font-semibold text-left my-4 hover:text-[#00dc93] duration-300">
            {title}
          </h3>
        </a>
        {desc.map((pera) => (
          <p className="leading-10 opacity-60" key={pera.i}>
            - {pera.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServicesCart;
