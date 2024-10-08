import propTypes from "prop-types";

const Date = ({ day, month, day_numeric, year, time }) => {
  return (
    <div className="w-[70%] lg:w-[45%] h-[60px] md:h-[100px] flex">
      <div className="w-[35%] h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center py-[1.125rem] w-full h-1/3 border-y-[2.5px] border-[#E5B873] day">
          {day}
        </div>
      </div>
      <div className="w-[30%] h-full flex flex-col">
        <div className="w-full h-full flex items-center justify-center  month">
          {month}
        </div>
        <div className="w-full h-full day_numeric">{day_numeric}</div>
        <div className="w-full h-full flex items-center justify-center  year">
          {year}
        </div>
      </div>
      <div className="w-[35%] h-full flex flex-col items-center justify-center date">
        <div className="flex items-center justify-center py-[1.125rem] w-full h-1/3 border-y-[2.5px] border-[#E5B873] time">
          {time}
        </div>
      </div>
    </div>
  );
};

Date.propTypes = {
  day: propTypes.string.isRequired,
  month: propTypes.string.isRequired,
  day_numeric: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};

export default Date;
