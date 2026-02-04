import Apple from "../assets/Apple.jpg";
import Google from "../assets/Google.jpg";
import Microsoft from "../assets/Microsoft.jpg";
import Slack from "../assets/Slack.jpg";

const Sponsors = () => {
  return (
    <section className="py-16 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Nossos patrocinadores
      </h1>

      <div
        className="
          flex flex-col items-center
          md:flex-row md:justify-between
          gap-8
          max-w-5xl mx-auto
        "
      >
        <img className="h-10 md:h-12 w-auto" src={Apple} alt="Apple" />
        <img className="h-10 md:h-12 w-auto" src={Google} alt="Google" />
        <img className="h-10 md:h-12 w-auto" src={Microsoft} alt="Microsoft" />
        <img className="h-10 md:h-12 w-auto" src={Slack} alt="Slack" />
      </div>
    </section>
  );
};

export default Sponsors;
