const Button = ({ className, name, imgSrc, alt, imgStyles }) => {
  return (
    <button className={className}>
      {name}
      <img src={imgSrc || ""} className={imgStyles} />
    </button>
  );
};

export default Button;
