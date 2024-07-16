import React from "react";
import { Title } from "./shared/title/Title";
import Image from "next/image";
import { blogdata } from "@/data/dummyData";

const Blogs = () => {
  return (
    <section className="bg-black text-white md:py-20 py-0">
      <div className="container">
        <div className="heading-title text-center mb-20">
          <Title
            title="Latest news & articles"
            className="font-semibold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
          />
        </div>
        <div className="Blogs grid md:grid-cols-2 grid-cols-1 gap-12">
          {blogdata.map((blog) => (
            <div
              className="blog-cart md:flex items-center gap-8 mb-10"
              key={blog.id}
            >
              <div className="image md:h-[230px] h-[280px] md:w-[45%] w-full overflow-hidden">
                <Image
                  src={blog?.cover}
                  width={200}
                  height={100}
                  alt="img"
                  className="w-full h-full rounded-tl-[50px] rounded-br-[50px] scale-100"
                />
              </div>
              <div className="blog-content md:w-[60%] w-full md:mt-0 mt-8">
                <a
                  href="#"
                  className="text-2xl font-normal text-left my-4 hover:text-[#00dc93] duration-300 leading-8 tracking-wider "
                >
                  {blog.title}
                </a>
                <div className="flex items-center mt-4 opacity-55">
                  <p>{blog.catgeory}/ </p>
                  <p className="pl-2  "> {blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
