const CommentsCard = ({ asset, avatar, lineColor, inlineStyle, nameColor }) => {
  return (
    <div className={`${inlineStyle} md:w-[25rem] px-[2rem] py-[3rem]`}>
      <div>
        <img className="mb-8" src={asset} alt="container asset" />
        <p>
          Whitepate is designed as a collaboration tool for businesses that is a
          full project management solution.
        </p>
      </div>
      <div class={`w-full h-[2px] ${lineColor} my-4`}></div>
      <div className="flex items-center">
        <div className="">
          <img src={avatar} alt="avatar asset" />
        </div>
        <div className="w-[60%] ml-[2rem]">
          <h3 className={`mb-[.5rem] font-bold text-[1.1rem] ${nameColor}`}>
            Oberon Shaw, MHC
          </h3>
          <p>Head of Talent Acquisition, North America</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
