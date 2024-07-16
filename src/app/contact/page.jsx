import Hero from "@/components/shared/hero/Hero";
import { MdOutlineHeadset } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div className="bg-black text-white pb-20">
      <Hero subTitle="Contact" heroTitle="Let's start right now!" />
      <div className="md:flex w-full container ">
        {/* info div */}
        <div className="md:w-[40%] w-full">
          <div className="mb-12 text-center">
            <MdOutlineHeadset size={34} className="text-green-400 mx-auto" />
            <h5 className="text-lg font-semibold my-2">1-001-234-5678</h5>
            <p className="opacity-60">Call us: Mon - Fri 9:00 - 19:00</p>
          </div>
          <div className="mb-10 text-center">
            <CiLocationOn size={34} className="text-green-400 mx-auto" />
            <h5 className="text-lg font-semibold my-2">New York</h5>
            <p className="opacity-60">
              990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022
            </p>
          </div>
          <div className="mb-10 text-center">
            <CgWebsite size={34} className="text-green-400 mx-auto" />
            <h5 className="text-lg font-semibold my-2">info@dream-theme.com</h5>
            <p className="opacity-60">Drop us a line anytime!</p>
          </div>
          <div className="mb-10 text-center">
            <FaRegUserCircle size={34} className="text-green-400 mx-auto" />
            <h5 className="text-lg font-semibold my-2">
              inforubel251@gmail.com
            </h5>
            <p className="opacity-60">Career at Seven Creative</p>
          </div>
          <div className="flex justify-between mx-auto  md:w-[80%] w-[60%] md:pt-10 md:mb-0 mb-10">
            <li className="contact-link">
              <Link href="/">
                <BsFacebook size={25} />
              </Link>
            </li>
            <li className="contact-link">
              <Link href="/">
                <AiFillBehanceCircle size={25} />
              </Link>
            </li>
            <li className="contact-link">
              <Link href="/">
                <AiFillInstagram size={25} />
              </Link>
            </li>
            <li className="contact-link">
              <Link href="/">
                <AiFillLinkedin size={25} />
              </Link>
            </li>
          </div>
        </div>
        {/* contact form */}
        <div className="bg-[#171e20] w-[100%] md:p-10 p-6 rounded-tl-[50px] rounded-br-[50px]">
          <h4 className="text-2xl font-semibold mb-4">
            Make an online enquiry
          </h4>
          <p className="opacity-60">
            Got questions? Ideas? Fill out the form below to get our proposal.{" "}
          </p>
          {/* contact form */}
          <form action="" className="pt-16 flex flex-col w-full">
            <div className="md:flex gap-16 mb-8">
              <div className="flex flex-col md:w-[50%] w-full mb-3">
                <label className="uppercase mb-2" htmlFor="">
                  Name
                </label>
                <input
                  className="outline-none bg-slate-900 h-10 border px-3 rounded "
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col md:w-[50%] w-full mb-3 ">
                <label className="uppercase mb-2" htmlFor="">
                  Email
                </label>
                <input
                  className="outline-none bg-slate-900 h-10 border px-3 rounded"
                  type="email"
                  placeholder=""
                />
              </div>
            </div>
            <div className="md:flex gap-16 mb-8">
              <div className="flex flex-col md:w-[50%] w-full mb-3">
                <label className="uppercase mb-2" htmlFor="">
                  your budget
                </label>
                <input
                  className="outline-none bg-slate-900 h-10 border px-3 rounded "
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col md:w-[50%] w-full mb-3">
                <label className="uppercase mb-2" htmlFor="">
                  timeframe
                </label>
                <input
                  className="outline-none bg-slate-900 h-10 border px-3 rounded"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%] ">
              <label className="uppercase mb-2" htmlFor="">
                TELL US A BIT ABOUT YOUR PROJECT*
              </label>
              <textarea
                name=""
                id=""
                placeholder="Your Massage"
                className="w-full py-4 md:h-48 h-28 outline-none bg-slate-900  border px-3 rounded"
              ></textarea>
            </div>
            <button className="button-primary mt-8">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
