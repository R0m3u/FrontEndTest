import Button from "../components/Button";

const CardPlan = ({
  type,
  title,
  price,
  priceType,
  btnName = "Get Started",
  features = [],
  descriptionPlan,
  styleInline,
  styleBlock,
  checkIcon,
  variant = "default", // "default" | "featured"
}) => {
  const isFeatured = variant === "featured";

  return (
    <div
      className={`
        rounded-xl shadow-lg mx-auto w-full max-w-sm
        flex flex-col
        ${isFeatured ? "p-8 sm:p-10" : "p-6"}
        ${isFeatured ? "min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]" : "min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]"}
        ${styleInline || ""}
      `}
      style={styleBlock}
    >
      {/* Header */}
      <div className="mb-6">
        {type && (
          <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-sm font-medium mb-2">
            {type}
          </span>
        )}

        <h3 className={`${isFeatured ? "text-3xl" : "text-2xl"} font-bold mb-2 text-left`}>
          {title}
        </h3>

        <div className="flex items-baseline mb-4">
          <span className={`${isFeatured ? "text-5xl" : "text-4xl"} font-bold text-left`}>
            ${price}
          </span>
          {priceType && <span className="ml-1">/{priceType}</span>}
        </div>

        <p className="text-left">
          {descriptionPlan || "Capture ideas and find them quickly"}
        </p>
      </div>

      {/* Features (cresce e empurra CTA pra baixo) */}
      <div className={`flex-1 space-y-3 ${isFeatured ? "text-base" : "text-sm"} overflow-y-auto pr-1`}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {!!checkIcon && (
              <img
                src={checkIcon}
                alt="Check"
                className="w-5 mt-0.5 mr-3 flex-shrink-0"
              />
            )}
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA (sempre no rodapé) */}
      <Button
        name={btnName}
        className={`
          mt-6 cursor-pointer text-white rounded-lg
          ${isFeatured ? "py-4 px-10 text-base" : "py-3 px-8 text-sm"}
          bg-[#4f9cf9]
        `}
        imgStyles="inline h-4 ml-3"
      />
    </div>
  );
};

export default CardPlan;
