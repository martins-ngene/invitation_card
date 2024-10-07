import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="relative max-w-[475px] w-[90%] lg:w-full mx-auto lg:mx-[2rem] mb-10 bg-[rgba(238,_237,_235,_1)] h-[72vh] lg:h-[90vh] flex flex-col items-center card_styles">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
