import React from "react";
import { Title } from "./shared/title/Title";
import { home } from "@/data/dummyData";
import Link from "next/link";

const Overview = () => {
  console.log(home, "data");
  return (
    <section className=" bg-black text-white shadow-top md:pt-20 pt-10 text-center">
      <div className="container ">
        <div className="heading-title">
          <Title
            title="The last digital agency you'll ever need"
            className="font-semibold text-transparent md:text-[30px] text-[24px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
          />
          <p className="md:w-[70%] mx-auto py-8 text-md text-gray-400  text-[19px]">
            Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
            dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
            ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellus ut
            magna porttitor scelerisque.
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 py-6">
          {home.map((item, i) => (
            <div
              className=" md:text-left text-center text-[18px] md:mb-0 mb-4 leading-5 flex flex-col md:gap-4 gap-1"
              key={i}
            >
              <span className="text-[#00dc93] md:mx-0 mx-auto">
                {item.icon}
              </span>{" "}
              <br />
              <Link href="/" className="md:font-semibold ">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
