import ServicesCart from "@/components/carts/ServicesCart";
import Hero from "@/components/shared/hero/Hero";
import { expertise } from "@/data/dummyData";
import React from "react";

const Services = () => {
  //   console.log(expertise);
  return (
    <div className="text-white bg-black ">
      <Hero
        subTitle="Services"
        heroTitle="Unique technologies & modern approach"
      />

      <div className="grid md:grid-cols-2 grid-cols-1  container gap-12">
        {expertise.map((service) => (
          <ServicesCart key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
