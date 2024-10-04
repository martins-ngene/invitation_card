import Image from "next/image";

import Card from "./Card";
import Date from "./Date";

import TopLeftFlower from "../assets/images/top_left_flower.svg";
import TopRightFlower from "../assets/images/top_right_flower.svg";
import BottomLeftFlower from "../assets/images/bottom_left_flower.svg";
import BottomRightFlower from "../assets/images/bottom_right_flower.svg";
import data from "../assets/static/data.json";

export default function RightCard() {
  return (
    <Card>
      <Image src={TopLeftFlower} alt="Flower" className="absolute left-[0%]" />
      <Image
        src={TopRightFlower}
        alt="Flower"
        className="absolute right-[0%]"
      />
      <Image
        src={BottomLeftFlower}
        alt="Flower"
        className="absolute bottom-[0%] left-[0%]"
      />
      <Image
        src={BottomRightFlower}
        alt="Flower"
        className="absolute bottom-[0%] right-[0%]"
      />

      <div className="together mt-5 md:mt-9">
        <h2>{data.invitation_intro.together}</h2>
        <h2>{data.invitation_intro.families}</h2>
      </div>

      <div className="text-center pt-[0.5rem] pb-2">
        <h3 className="couples-name text-[3.5rem] leading-[4.375rem]">
          {data.couple.bride_family_name}
        </h3>
        <p className="and">{data.couple.and}</p>
        <h3 className="couples-name text-[3.5rem] leading-[4.375rem]">
          {data.couple.bridegroom_family_name}
        </h3>
      </div>

      <div className="together pb-2">
        <p>{data.invitation.invite}</p>
        <p>{data.invitation.ceremony}</p>
      </div>

      <div className="w-full flex items-center justify-center my-[0.2rem] md:my-[0.5rem]">
        <Date {...data.date} />
      </div>
      <div className="w-[80%] flex flex-col items-center">
        <h3 className="py-[2px] reception">Venue</h3>
        <p className="venue">{data.wedding_ceremony_venue.branch}</p>
        <p className="venue">{data.wedding_ceremony_venue.address}</p>

        {/* <h3 className="py-2 reception">{data.reception}</h3>

        <p className="venue">{data.reception_venue.address}</p>
        <p className="venue">{data.reception_venue.bustop}</p> */}
      </div>
    </Card>
  );
}
