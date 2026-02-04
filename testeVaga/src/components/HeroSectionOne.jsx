import arrowRight from "../assets/right-arrow.png";
import Button from "../components/Button.jsx";

const HeroSectionOne = ({
  title,
  description,
  image,
  styles,
  bgColor = "",
  textColor = "#000",
  buttonName = "Get Started",
  marginContainer = "",
  myClass = "",
  imageClassName = "",

  // NOVO: ordem apenas para MOBILE/TABLET (stack)
  // "text-first" (padrão): texto em cima, imagem embaixo
  // "image-first": imagem em cima, texto embaixo
  stackOrder = "text-first",

  // Desktop (lg) continua split
  desktopDirection = "row", // "row" | "row-reverse"
}) => {
  const desktopDirClass =
    desktopDirection === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-row";

  // ordem vertical só no stack (mobile/tablet)
  const stackOrderClass = stackOrder === "image-first" ? "flex-col-reverse" : "flex-col";

  return (
    <section
      className={`${bgColor} ${marginContainer} ${myClass} w-full`}
      style={{ color: textColor }}
    >
      <div className="w-full bg-center bg-no-repeat bg-cover" style={styles}>
        <div
          className={`
            mx-auto max-w-[1200px]
            min-h-screen
            px-6 pt-6 pb-16

            /* MOBILE + TABLET: stack com ordem configurável */
            flex ${stackOrderClass}
            items-center text-center justify-center gap-10

            /* DESKTOP: split */
            lg:flex ${desktopDirClass}
            lg:items-center lg:justify-between lg:text-left lg:gap-16
          `}
        >
          {/* BLOCO TEXTO */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-bold mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>

            <p className="mb-10 text-base md:text-lg leading-relaxed max-w-[52ch] mx-auto lg:mx-0">
              {description}
            </p>

            <Button
              name={buttonName}
              className="bg-[#4f9cf9] cursor-pointer text-white py-3 px-8 rounded-lg inline-flex items-center"
              imgSrc={arrowRight}
              imgStyles="inline h-4 ml-3"
            />
          </div>

          {/* BLOCO IMAGEM */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-16">
            <img
              src={image}
              alt={typeof title === "string" ? title : "Hero image"}
              loading="lazy"
              className={`
                w-full h-auto
                max-h-[42vh] md:max-h-[48vh] lg:max-h-[70vh]
                object-contain
                ${imageClassName}
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
