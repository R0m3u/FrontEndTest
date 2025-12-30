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
          title="Get More Done with whitespace"
          description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          styles={{
            backgroundImage: `url(${HeroImageOne})`,
            // backgroundSize: 'cover',
            backgroundPosition: "center",
          }}
          image={HeroOne}
          textColor="#fff"
          height="md:h-[20em]"
          buttonName="Try Whitspace free"
        />
        <HeroSectionOne
          title="Project Management"
          description="Project management softawre that enables your teams
                    to collaborate, plan, analyze and manage everyday tasks"
          textColor="#000"
          image={HeroTwo}
          height="h-auto md:h-[20em]"
          buttonName="Try Whitspace free"
          marginImage="md:mb-[6rem]"
        />
        <HeroSectionOne
          title="Work together"
          description="Project management softawre that enables your teams
                    to collaborate, plan, analyze and manage everyday tasks"
          textColor="#000"
          image={HeroThree}
          flexDirection="row-reverse"
          heigth="md:h-[35rem]"
          marginImage="md:mr-[4rem] md:mb-[6rem]"
          buttonName="Try Whitspace free"
        />
        <HeroSectionOne
          title="Use as Extension"
          description="Use the web clipper extensionm, availabe on Chrome and FIrefox, to save web pages or take screenshots as notes"
          buttonName="Let's Go"
          image={HeroFour}
          bgColor={bgColor}
          marginImage="md:mt-[2rem]"
          textColor="#fff"
        />
        <HeroSectionOne
          textColor="#000"
          title="Customize it to your needs"
          description="Customize the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the extension API"
          buttonName="Let's Go"
          image={HeroFive}
          flexDirection="row-reverse"
          marginImage="md:mr-[4rem]"
        />
        <CardSection />
        <CallToAction />
        <HeroSectionOne
          textColor="#000"
          title="100% your data"
          description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          buttonName="Let's Go"
          image={HeroSix}
          marginImage="md:mr-[4rem]"
        />
        <Sponsors />
        <HeroSectionOne
          textColor="#fff"
          title="Work with Your Favorite Apps Using whitepace"
          description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          buttonName="Let's Go"
          image={Apps}
          marginImage="md:mr-[4rem]"
          bgColor="bg-[#043873]"
          flexDirection="row-reverse"
        />
        <CommentsCarousel />
      </main>
      <Footer/>
    </>
  );
}

export default App;
