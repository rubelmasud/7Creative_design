import Blogs from "@/components/Blogs";
import Hero from "@/components/shared/hero/Hero";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Hero
        subTitle="blog"
        heroTitle="Our views on marketing, design & technology"
      />
      <Blogs />
    </div>
  );
};

export default Blog;
