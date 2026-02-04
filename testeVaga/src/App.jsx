import Header from "./components/Header";
import HeroSectionOne from "./components/HeroSectionOne";
import HeroImageOne from "./assets/Hero-section-background.jpg";
import HeroOne from "./assets/heroOne.png";
import HeroTwo from "./assets/heroTwo.svg";
import HeroThree from "./assets/heroThree.png";
import HeroFour from "./assets/heroFour.jpg";
import HeroFive from "./assets/heroFive.jpg";
import HeroSix from "./assets/heroSix.jpg";

import CardSection from "./components/CardSection";
import CallToAction from "./components/CallToAction";
import Sponsors from "./components/Sponsors";
import Apps from "./assets/Apps.png";
import CommentsCarousel from "./components/CommentsCarousel";
import Footer from "./components/Footer";

function App() {
  const bgColor = "bg-[#043873]";

  return (
    <>
      <Header />
      <main>
        <HeroSectionOne
          title="Aumente sua produtividade com espaços em branco."
          description="Imagens, vídeos, PDFs e arquivos de áudio são suportados. Crie expressões matemáticas e diagramas diretamente no app. Tire fotos pelo celular e salve-as em uma nota."
          styles={{
            backgroundImage: `url(${HeroImageOne})`,
            backgroundPosition: "center",
          }}
          image={HeroOne}
          textColor="#fff"
          height="md:h-[20em]"
          buttonName="Experimente o Whitspace gratuitamente"
        />
        <HeroSectionOne
          title="Gestão de Projetos"
          description="Software de gestão de projetos que permite às suas equipes colaborar, planejar, analisar e gerenciar tarefas do dia a dia."
          textColor="#000"
          image={HeroTwo}
          height="h-auto md:h-[20em]"
          buttonName="Experimente o Whitspace gratuitamente"
          marginImage="md:mb-[6rem]"
        />
        <HeroSectionOne
          title="Colaborem juntos"
          description="Software de gestão de projetos que permite às suas equipes colaborar, planejar, analisar e gerenciar tarefas do dia a dia."
          textColor="#000"
          image={HeroThree}
          desktopDirection="row-reverse"
          height="md:h-[35rem]"
          marginImage="md:mr-[4rem] md:mb-[6rem]"
          buttonName="Experimente o Whitspace gratuitamente"
        />
        <HeroSectionOne
          title="Usar como extensão"
          description="Use a extensão Web Clipper, disponível no Chrome e no Firefox, para salvar páginas da web ou fazer capturas de tela como anotações."
          buttonName="Vamos lá!"
          image={HeroFour}
          bgColor={bgColor}
          marginImage="md:mt-[2rem]"
          textColor="#fff"
        />
        <HeroSectionOne
          textColor="#000"
          title="Personalize conforme suas necessidades."
          description="Personalize o aplicativo com plugins, temas personalizados e vários editores de texto (Rich Text ou Markdown). Ou crie seus próprios scripts e plugins usando a API de extensão."
          buttonName="Vamos lá!"
          image={HeroFive}
          flexDirection="row-reverse"
          marginImage="md:mr-[4rem]"
        />
        <CardSection />
        <CallToAction />
        <HeroSectionOne
          textColor="#000"
          title="100% dos seus dados"
          description="O aplicativo é open source e suas notas são salvas em um formato aberto, garantindo que você sempre tenha acesso a elas. Utiliza criptografia de ponta a ponta (E2EE) para proteger seus dados, assegurando que só você possa acessá-los."
          buttonName="Vamos lá!"
          image={HeroSix}
          marginImage="md:mr-[4rem]"
        />
        <Sponsors />
        <HeroSectionOne
          textColor="#fff"
          title="Trabalhe com seus apps favoritos usando o Whitepace."
          description="O aplicativo é open source e suas notas são salvas em um formato aberto, garantindo que você sempre tenha acesso a elas. Utiliza criptografia de ponta a ponta (E2EE) para proteger seus dados, assegurando que só você possa acessá-los."
          buttonName="Vamos lá!"
          image={Apps}
          marginImage="md:mr-[4rem]"
          bgColor="bg-[#043873]"
          desktopDirection="row-reverse"
          myClass="py-20"
          stackOrder="image-first"
        />
        <CommentsCarousel />
      </main>
      <Footer/>
    </>
  );
}

export default App;
