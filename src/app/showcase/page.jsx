import Hero from "@/components/shared/hero/Hero";
import ShowCase from "@/components/ShowCase";
import React from "react";

const Showcase = () => {
  return (
    <div>
      <Hero
        subTitle="showcase"
        heroTitle="Fresh ideas. Bold design. Smart realisation."
      />
      <ShowCase />
    </div>
  );
};

export default Showcase;
