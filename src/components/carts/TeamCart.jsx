import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const TeamCart = ({ data }) => {
  const { title, cover, post } = data || {};
  return (
    <div className="">
      <Image
        width={500}
        height={500}
        src={cover}
        alt="img"
        className="rounded-tl-[50px] rounded-br-[50px]"
      />
      <div className="">
        <a href="#">
          <h3 className="text-2xl font-semibold text-left my-4 hover:text-[#00dc93] duration-300">
            {title}
          </h3>
        </a>
        <Link href="" className="flex items-center mt-4 gap-4 text-purple-600 ">
          {post} <GoArrowRight className="link-icon" />
        </Link>
      </div>
    </div>
  );
};

export default TeamCart;
