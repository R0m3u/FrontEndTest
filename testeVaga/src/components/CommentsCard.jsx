const CommentsCard = ({
  asset,
  avatar,
  lineColor = "bg-gray-200",
  inlineStyle = "",
  nameColor = "text-black",
}) => {
  return (
    <div
      className={`
        ${inlineStyle}
        w-full
        px-6 py-10
        md:w-[22rem] md:px-8 md:py-12
        lg:w-[25rem]
      `}
    >
      <div>
        {asset ? (
          <img className="mb-8" src={asset} alt="Ilustração do comentário" />
        ) : null}

        <p className="leading-relaxed">
          O Whitepace foi projetado como uma ferramenta de colaboração para
          empresas e funciona como uma solução completa de gestão de projetos.
        </p>
      </div>

      <div className={`w-full h-[2px] ${lineColor} my-6`} />

      <div className="flex items-center gap-6">
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar do autor do comentário"
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-200" />
        )}

        <div className="min-w-0">
          <h3
            className={`mb-2 font-bold text-[1.05rem] md:text-[1.1rem] ${nameColor}`}
          >
            Oberon Shaw, MHC
          </h3>
          <p className="text-sm md:text-base">
            Chefe de Aquisição de Talentos, América do Norte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
