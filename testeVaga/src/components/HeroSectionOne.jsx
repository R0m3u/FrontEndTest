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
  // Define a direção do flex só para telas grandes (lg)
  const directionClass =
    flexDirection === "row-reverse"
      ? "lg:flex-row-reverse"
      : "lg:flex-row";

  return (
    <div
      className={`${bgColor} ${marginContainer} ${myClass} text-[#000] min-h-screen md:h-auto md:min-h-0`}
    >
      <div
        className="md:p-[8rem] h-auto lg:h-[calc(100vh-80px)] w-full bg-center bg-no-repeat"
        style={styles}
      >
        <div
          className={`
            h-full
            md:flex md:flex-col   /* 1 coluna a partir de 768px */
            ${directionClass}     /* 2 colunas (row/row-reverse) a partir de 1024px */
            items-center justify-center
          `}
          style={{ color: textColor }}
        >
          <div className="md:flex md:flex-col md:items-center lg:block md:text-center lg:text-left lg:w-[45%] px-[1.6rem] md:px-0 md:pt-0">
            <h1 className="font-bold mb-[2rem] text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className=" mb-[3rem] text-base md:text-lg lg: lg:text-xl">
              {description}
            </p>
            <div>
               <Button
              name={buttonName}
              className="bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
              imgSrc={arrowRight}
              imgStyles="inline h-4 ml-[0.75rem]"
            />
            </div>
          </div>

          <div className={`${marginImage}`}>
            <img
              src={image}
              className={`
                ${height || ""}
                w-[16rem]       /* mobile */
                md:w-[22rem]    /* a partir de 768px */
                lg:w-[35rem]    /* a partir de 1024px */
              
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
