import Image from "next/image";

import Card from "./Card";
import data from "../assets/static/data.json";
import Date from "./Date";

import Left from "../assets/images/left.svg";
import Right from "../assets/images/right.svg";
import Bottom from "../assets/images/bottom.svg";
import Corner from "../assets/images/corner.svg";
import Arrow from "../assets/images/arrow.svg";
import Couple from "../assets/images/image.png";

const LeftCard = () => {
  return (
    <Card>
      <div className="w-full h-full flex items-center justify-center">
        <div className="absolute right-[5%] top-[5%]">
          <h2 className="couples-wedding text-right">{data.couples_name}</h2>
          <h1 className="save-date">{data.save_the_date}</h1>
        </div>
        <Image
          src={Arrow}
          alt="Flower"
          className="w-[100px] absolute right-[18%] top-[18%]"
        />
        <Image
          src={Couple}
          alt="Flower"
          className="w-[150px] absolute bottom-[0%]"
        />

        <Image
          src={Left}
          alt="Flower"
          layout="fixed"
          className="w-[188px] md:w-[200px] absolute left-[0%] bottom-[0%]"
        />

        <Image
          src={Right}
          alt="Flower"
          className="absolute w-[120px] md:w-[180px] right-[0%] bottom-[0%]"
        />

        <Image
          src={Bottom}
          alt="Flower"
          className="absolute w-[400px] bottom-[0%]"
        />

        <Image
          src={Corner}
          alt="Flower"
          className="absolute w-[200px] bottom-[0%] right-[0%]"
        />

        <Date {...data.date} />
      </div>
    </Card>
  );
};

export default LeftCard;
