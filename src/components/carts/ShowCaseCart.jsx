import Link from "next/link";
import React from "react";
import { TitleSm } from "../shared/title/Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const ShowCaseCart = ({ data, caption, show, path }) => {
  return (
    <div className="card">
      <div className="h-[400px] overflow-hidden">
        {" "}
        {/* Decreased height */}
        <Image
          className="rounded-tl-[50px] rounded-br-[50px] object-cover w-full h-full"
          width={200}
          height={500} // Adjusted height
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
      </div>
      <p className="uppercase tracking-[1px] text-gray-400 text-xs font-sans mt-4">
        category
      </p>
    </div>
  );
};

export default ShowCaseCart;
