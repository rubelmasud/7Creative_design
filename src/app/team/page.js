import TeamCart from "@/components/carts/TeamCart";
import Hero from "@/components/shared/hero/Hero";
import { teamdata } from "@/data/dummyData";

const Team = () => {
  return (
    <div className="pb-20 bg-black text-white">
      <Hero
        subTitle="MEET OUR TEAM"
        heroTitle="A team of smart & passionate creatives"
      />
      <div className="grid grid-cols-1 md:grid-cols-4  gap-x-12 gap-y-24 container  ">
        {teamdata.map((data) => (
          <TeamCart key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Team;
