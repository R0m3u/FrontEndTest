import Button from "./Button";
import AppleIcon from "../assets/apple-black-logo.svg";
import AndroidIcon from "../assets/android-logo.png";
import WindowsIcon from "../assets/WindowsIcon.svg";
import arrowRight from "../assets/right-arrow.png";
import BlueLogo from "../assets/Logo.svg";
import Globe from "../assets/globe.svg";
import Icon from "../assets/Vector.png";
import FacebookIcon from "../assets/facebookIcon.svg";
import TwitterIcon from "../assets/twitterIcon.svg";
import LinkedinIcon from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#043873]">
      {/* TOP CTA */}
      <div className="text-white flex flex-col items-center justify-center py-[4rem] gap-[2rem] px-4">
        <h1 className="font-bold text-[2.2rem] md:text-[3rem] text-center">
          Experimente o Whitepace hoje mesmo
        </h1>

        <p className="text-center text-sm md:text-base">
          Comece gratuitamente.
          <br />
          Adicione toda a sua equipe conforme suas necessidades aumentarem.
        </p>

        <Button
          name="Try Whitspace free"
          className="bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
          imgSrc={arrowRight}
          imgStyles="inline h-4 ml-[0.75rem]"
        />

        <p className="text-sm md:text-base">
          Equipe grande? Contate o setor de vendas
        </p>

        <div className="flex gap-[2rem] flex-wrap justify-center">
          <img src={AppleIcon} alt="apple icon" />
          <img src={AndroidIcon} alt="android icon" />
          <img src={WindowsIcon} alt="windows icon" />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div
        className="
        text-white 
        flex flex-col 
        md:flex-row 
        gap-10 
        py-[4rem] 
        px-6 
        md:px-[6rem]
        md:justify-between
      "
      >
        <div className="md:w-[15%]">
          <img src={BlueLogo} alt="brand icon" className="w-[10rem] mb-4" />
          <p className="text-[#F7F7EE] text-sm">
            whitepace foi criado para os novos modos de vida e trabalho. Criamos um
            melhor ambiente de trabalho em todo o mundo
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2">Produto</h2>
          <div className="text-[#F7F7EE] space-y-1 text-sm">
            <span className="block">
              <a href="#">Visão geral</a>
            </span>
            <span className="block">
              <a href="#">Preços</a>
            </span>
            <span className="block">
              <a href="#">Histórias de clientes</a>
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-2">Recursos</h2>
          <div className="text-[#F7F7EE] space-y-1 text-sm">
            <span className="block">
              <a href="#">Blog</a>
            </span>
            <span className="block">
              <a href="#">Guias e tutoriais</a>
            </span>
            <span className="block">
              <a href="#">Central de Ajuda</a>
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-2">Company</h2>
          <div className="text-[#F7F7EE] space-y-1 text-sm">
            <span className="block">
              <a href="#">About us</a>
            </span>
            <span className="block">
              <a href="#">Carrers</a>
            </span>
            <span className="block">
              <a href="#">Media kit</a>
            </span>
          </div>
        </div>

        <div className="md:max-w-[220px]">
          <h2 className="font-bold text-[1.6rem] md:text-[2rem] mb-2">
            Experimente hoje
          </h2>
          <p className="mt-4 text-sm">
              Comece gratuitamente. Adicione toda a sua <br/>
              equipe à medida que suas necessidades crescerem.          
          </p>
          <Button
            name="Start today"
            className="bg-[#4f9cf9] mt-4 cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
            imgSrc={arrowRight}
            imgStyles="inline h-4 ml-[0.75rem]"
          />
        </div>
      </div>
      <div
        className="text-[#F7F7EE] flex flex-col md:flex-row items-center justify-between
                py-4 px-6 md:px-[6rem] border-t border-t-white/20 gap-4 md:gap-0"
      >
        <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-12 items-center text-sm text-center md:text-left">
          <div className="flex items-center gap-2">
            <img src={Globe} alt="" />
            <span>English</span>
            <img src={Icon} alt="" />
          </div>

          <p>Termos & privacidade</p>
          <p>Segunrança</p>
          <p>Status</p>
          <p>&#169; 2021 Whitespace LLC.</p>
        </div>

        <div className="flex justify-around gap-4 md:gap-6 items-center">
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={TwitterIcon} alt="twitter icon" />
          <img src={LinkedinIcon} alt="linkedin icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
