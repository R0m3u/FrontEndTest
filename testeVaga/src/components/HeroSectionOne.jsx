import arrowRight from "../assets/right-arrow.png";
import Button from "../components/Button.jsx";

const HeroSectionOne = ({
  title,
  description,
  image,
  styles,
  bgColor,
  textColor,
  flexDirection,
  height,
  marginImage,
  buttonName,
  marginContainer,
  myClass,
}) => {
  return (
    <div
      className={`${bgColor} ${marginContainer} ${myClass} text-[#000] min-h-screen md:h-auto md:min-h-0`}
    >
      <div
        className=" h-auto md:h-[calc(100vh-80px)] w-full bg-center bg-no-repeat"
        style={styles}
      >
        <div
          className={`h-full  md:flex items-center justify-center`}
          style={{ color: textColor, flexDirection: flexDirection }}
        >
          <div
            className={`text-center md:text-left md:w-[45%] pt-[8rem] px-[1.6rem] md:px-0 md:pt-0`}
          >
            <h1 className="text-5xl font-bold mb-[2rem]">{title}</h1>
            <p className="mb-[3rem]">{description}</p>
            <Button
              name={buttonName}
              className="bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
              imgSrc={arrowRight}
              imgStyles="inline h-4 ml-[0.75rem]"
            />
          </div>
          <div className={`mt-[4rem] md:mt-0 ${marginImage}`}>
            <img src={image} className={`w-full ${height} md:w-[35rem]`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
