import Image from "next/image";
import React from "react";
import { TitleLogo } from "../title/Title";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer container border-t border-[0.5] border-gray-700">
      <div className="footer-img">
        <Image
          src="/images/blurfooter-min.png"
          width={1200}
          height={500}
          alt="img"
          className="w-full h-full mx-auto scale-x-110"
        />
      </div>
      <div className="">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 items-start pt-10">
          <div className="">
            <TitleLogo
              title="creative"
              caption="7"
              className="font-bold text-white logo text-[50px] -mt-4"
            />
            <div className="">
              <br />

              <span className="opacity-60">
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3 className="font-normal">+1 001 234 5678</h3>
              <br />
              <button className="button-primary cursor-pointer">
                Request for quote
              </button>
            </div>
          </div>
          <ul>
            <h3>COMPANY</h3>
            <li>
              <Link href="/">About agency</Link>
            </li>
            <li>
              <Link href="/">Our team</Link>
            </li>
            <li>
              <Link href="/">Showcase</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Demo design system</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <ul>
            <h3>SERVICES</h3>
            <li>
              <Link href="/">Web Design & Development</Link>
            </li>
            <li>
              <Link href="/">Branding & Creative Services</Link>
            </li>
            <li>
              <Link href="/">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/">E-Commerce</Link>
            </li>
          </ul>
          <ul className="">
            <h3>CONNECT</h3>
            <div className="connect">
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillBehanceCircle size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillInstagram size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillLinkedin size={25} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className=" flex items-center justify-between mt-24 opacity-60">
          <div className="text">
            <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="">
            <span>GORKCODER COMPANY</span>
            <span> &nbsp; | &nbsp; </span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
