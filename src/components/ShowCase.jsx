import React from "react";
import { Title } from "./shared/title/Title";
import Link from "next/link";
import ShowCaseCart from "./carts/ShowCaseCart";
import { HiOutlineArrowRight } from "react-icons/hi";
import { showcase } from "@/data/dummyData";

const ShowCase = () => {
  return (
    <section className="bg-black text-white  md:pt-0 mt-10">
      <div className="container">
        <div className="heading-title text-center mb-20">
          <Title
            title="Selected cases"
            className="font-semibold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          {showcase.map((item) => (
            <ShowCaseCart data={item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-end mt-12">
          <Link
            href="/"
            className="flex items-center mt-4 gap-4 text-purple-600 text-right "
          >
            VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
