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
      <Image
        src={TopLeftFlower}
        alt="Flower"
        className="absolute left-[0%] w-[80px] md:w-fit"
      />
      <Image
        src={TopRightFlower}
        alt="Flower"
        className="absolute right-[0%] w-[100px] md:w-fit"
      />
      <Image
        src={BottomLeftFlower}
        alt="Flower"
        className="absolute bottom-[0%] left-[0%] w-[100px] md:w-fit"
      />
      <Image
        src={BottomRightFlower}
        alt="Flower"
        className="absolute bottom-[0%] right-[0%] w-[100px] md:w-fit"
      />

      <div className="together mt-[2rem] md:mt-6 w-[75%]">
        <h2>{data.invitation_intro.intro}</h2>
        <h2>{data.invitation_intro.bride_family_name}</h2>
        <h2>{data.invitation_intro.and}</h2>
        <h2>{data.invitation_intro.bridegroom_family_name}</h2>
      </div>

      <div className="text-center pt-[0.5rem] pb-2">
        <h3 className="couples-name text-[2.5rem] md:text-[3.5rem] leading-[2.75rem] md:leading-[3.75rem]">
          {data.couple.bride_name}
        </h3>
        <p className="and">{data.couple.and}</p>
        <h3 className="couples-name text-[2.5rem] md:text-[3.5rem] leading-[2.75rem] md:leading-[3.75rem]">
          {data.couple.bridegroom_name}
        </h3>
      </div>

      <div className="together pb-2">
        <p>{data.invitation.invite}</p>
        <p>{data.invitation.ceremony}</p>
      </div>

      <div className="w-full flex items-center justify-center md:my-[0.25rem]">
        <Date {...data.date} />
      </div>
      <div className="w-[80%] flex flex-col items-center">
        <h3 className="py-[2px] reception">
          {data.wedding_ceremony_venue.venue}
        </h3>
        <p className="venue">{data.wedding_ceremony_venue.branch}</p>
        <p className="venue">{data.wedding_ceremony_venue.address}</p>

        <h3 className="py-2 reception">{data.reception}</h3>

        <p className="venue">{data.reception_address.address}</p>
        <p className="venue">{data.reception_address.bustop}</p>
      </div>
    </Card>
  );
}
