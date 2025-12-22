import Button from "../components/Button"

const CardPlan = ({
  type,
  color,
  iconType,
  title,
  price,
  priceType,
  btnType,
  btnName,
  features,
  descriptionPlan,
  styleInline,
  styleBlock,
  svgColor,
  checkIcon,
  btnStyle
}) => {
  return (
    <div 
      className={`rounded-xl  shadow-lg p-6 max-w-sm mx-auto ${styleInline || '' }`}
      style={{styleBlock}}
    >
      {/* Cabeçalho do Card */}
      <div className="text-center mb-6">
        {type && (
          <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-sm font-medium mb-2">
            {type}
          </span>
        )}
        
        <h3 className="text-2xl font-bold mb-2 text-left">
          {title}
        </h3>
        
        <div className="flex items-baseline  mb-4">
          <span className="text-4xl font-bold text-left">
            ${price}
          </span>
          {priceType && (
            <span className="ml-1">/{priceType}</span>
          )}
        </div>
        
        <p className="text-left">
          {descriptionPlan || "Capture ideas and find them quickly"}
        </p>
      </div>
      
      {/* Lista de Features */}
      <div className="space-y-3">
        {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <img 
                src={checkIcon} 
                alt="Check" 
                className="w-5  mt-0.5 mr-3 flex-shrink-0"
              />
              <span className="">{feature}</span>
            </div>
          ))}
      </div>
      
      <Button
        name="Get Started"
        className="my-[2rem] bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
        imgStyles="inline h-4 ml-[0.75rem]"
      />      
    </div>
  );
};

export default CardPlan;