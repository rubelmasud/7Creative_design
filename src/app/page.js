import Blogs from "@/components/Blogs";
import Brand from "@/components/Brand";
import Expertise from "@/components/Expertise";
import Banner from "@/components/header/Banner";
import Overview from "@/components/Overview";
import RequestCallBanner from "@/components/RequestCallBanner";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Overview />
      <Expertise />
      <RequestCallBanner />
      <Testimonial />
      <ShowCase />
      <Brand />
      <Blogs />
    </div>
  );
}
