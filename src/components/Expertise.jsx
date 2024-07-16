import React from "react";
import { Title } from "./shared/title/Title";
import { expertise } from "@/data/dummyData";
import ExpertiseCart from "./carts/ExpertiseCart";

const Expertise = () => {
  return (
    <section className="bg-black text-white shadow-top pt-20 text-center">
      <div className="container">
        <div className="heading-title">
          <Title
            title="Our expertise"
            className="font-semibold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
          />
          <p className="md:w-[70%] mx-auto py-8 text-md text-gray-400  text-[19px]">
            Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac
            volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula
            at, molestie dolor.
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-12 py-6">
          {expertise.map((item) => (
            <ExpertiseCart data={item} key={item.id} caption="Learn More" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
