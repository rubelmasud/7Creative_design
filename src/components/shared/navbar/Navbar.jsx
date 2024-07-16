"use client";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TitleLogo } from "../title/Title";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const [Open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!Open);
  };

  return (
    <div className="sticky top-0 w-full z-10">
      <div className="absolute top-0 border-b border-gray-700 w-full backdrop-blur-md md:flex items-center justify-between md:px-16 md:py-2 py-4">
        <span
          onClick={toggle}
          className="text-white absolute top-8 cursor-pointer right-6 md:hidden block z-50"
        >
          <RiMenu4Fill size={28} />
        </span>
        <div className="logo text-[35px] md:px-auto px-4 ">
          <Link href="/" className="z-50">
            <TitleLogo
              title="creative"
              caption="7"
              className="font-bold text-white "
            />
          </Link>
        </div>
        <ul
          className={`text-white flex md:flex-row -z-10  flex-col md:gap-8 gap-4 md:items-center md:w-auto w-full md:bg-transparent  md:px-auto py-3 px-8  bg-black md:static absolute ${
            Open ? "top-[50px] mt-10 -z-10" : "-top-[600px] -z-10"
          }`}
        >
          <li>
            <a
              href="/"
              className={
                isActive("/")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/agency"
              className={
                isActive("/agency")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Agency
            </a>
          </li>
          <li>
            <a
              href="/team"
              className={
                isActive("/team")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={
                isActive("/services")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/showcase"
              className={
                isActive("/showcase")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Showcase
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className={
                isActive("/blog")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-[#00dc93] active"
                  : "hover:text-[#00dc93] duration-300"
              }
            >
              Contact
            </a>
          </li>
          <button className="button-primary md:block hidden">
            Book a Consultation
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
