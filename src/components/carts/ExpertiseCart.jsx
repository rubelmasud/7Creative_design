import Link from "next/link";
import React from "react";
import { TitleSm } from "../shared/title/Title";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const ExpertiseCart = ({ data, caption, show, path }) => {
  return (
    <div className="card">
      <div className="h-[300px] overflow-hidden">
        {" "}
        {/* Decreased height */}
        <Image
          className="rounded-tl-[50px] rounded-br-[50px] object-cover w-full h-full"
          width={500}
          height={300} // Adjusted height
          src={data.cover}
          alt={data.title}
        />
      </div>
      <div className="card-details mt-6">
        <Link
          href=""
          className="text-xl font-semibold text-left my-4 hover:text-[#00dc93] duration-300"
        >
          <TitleSm title={data.title} />
        </Link>
        {caption && (
          <Link
            href=""
            className="flex items-center mt-4 gap-4 text-purple-600 "
          >
            {caption} <GoArrowRight className="link-icon" />
          </Link>
        )}

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpertiseCart;
