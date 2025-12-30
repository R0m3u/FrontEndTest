import arrowRight from "../assets/right-arrow.png";
import Button from "../components/Button.jsx";

const CallToAction = () => {
  return (
    <div
      className={`
        bg-[#043873] text-white py-24 px-4

        bg-none
        md:bg-no-repeat md:bg-contain
        md:bg-[position:-100px_-50px]
        md:bg-[image:url('/backgrounds/callToActionAsset.jpg')]
    `}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[3rem] text-left md:text-center font-bold mb-4">
          Your work, everywhere you are
        </h1>

        <p className="mb-8 text-left md:text-center text-[1.2rem] font-light">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitespace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, iOS and Android.
        </p>

        <div className="flex justify-left md:justify-center">
          <Button
            name="Try taskey"
            className="bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px]"
            imgSrc={arrowRight}
            imgStyles="inline h-4 ml-[0.75rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;