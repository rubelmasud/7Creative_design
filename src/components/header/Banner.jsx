import Image from "next/image";
import BG from "../../../public/images/art-top-cropp.jpg";
import { Title, TitleLogo, TitleSm } from "../shared/title/Title";

const Banner = () => {
  return (
    <div className="banner h-screen w-full bg-cover bg-center items-center text-white">
      <div className="flex flex-col justify-center h-full items-center">
        <TitleLogo
          title="creative"
          caption="7"
          className="font-bold text-white logo text-[60px] md:pt-20"
        />{" "}
        <br />
        <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>
        <div className="sub-heading md:flex  gap-4 pb-10">
          <TitleSm title="WEBSITES" /> <span>.</span>
          <TitleSm title="BRANDING" /> <span>.</span>
          <TitleSm title="DIGITAL MARKETING" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
