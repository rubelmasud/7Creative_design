import { Title } from "../title/Title";

const Hero = ({ subTitle, heroTitle }) => {
  return (
    <div className="bg-top min-h-[500px] md:pt-20 pt-2 flex flex-col items-center justify-center text-center">
      <div className="container md:w-[65%] w-full">
        <h4 className="text-2xl font-semibold pt-8">{subTitle}</h4>
        <h2 className="font-semibold text-transparent md:text-[36px] text-[32px] bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500 md:py-12 py-6">
          {heroTitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
