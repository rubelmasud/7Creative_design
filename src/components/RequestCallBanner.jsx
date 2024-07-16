import React from "react";
import { Title, TitleLogo } from "./shared/title/Title";

const RequestCallBanner = () => {
  return (
    <section className="bg-black text-white shadow-top pt-20 ">
      <div className="container ">
        <div className="md:flex items-center justify-between bg-slate-300 py-20 md:px-12 px-6 rounded-tl-[50px] rounded-br-[50px] bg-gradient-to-r from-[#5830AE] to-[#B053F2]">
          <div className="text-left">
            <Title
              title="We are looking forward to start a new project"
              className="md:text-3xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3C6CFE] to-[#FF55DB]"
            />
            <br />
            <TitleLogo
              title="Lets take your business to the next level!"
              className="logo md:text-4xl text-2xl font-semibold"
            />
          </div>
          <div>
            <button className="button-primary md:my-0 my-10">
              Request a call-back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallBanner;
