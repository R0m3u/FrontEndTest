// let CallToAction = () => {
//   return (
//     <div className="bg-[#043873] text-white py-12 px-4">
//       <h2 className="text-2xl font-bold text-center mb-4">
//         Your work, everywhere you are
//       </h2>
//       <p className="text-center mb-8">
//         Access your notes from your computer, phone or tablet by synchronising with various
//         services, including whitespace, Dropbox and OneDrive. The app is available 
//         on Windows, macOS, Linux, iOS and Android.
//       </p>
//       <div className="flex justify-center">
//         <button className="bg-[#FFE492] text-[#043873] font-bold py-2 px-4 rounded">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };


const CallToAction = () => {
  return (
    <div className="bg-[#043873] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Lado esquerdo com imagem de background */}
        <div
          className="w-full md:w-1/2 h-56 md:h-64 bg-no-repeat bg-left bg-contain"
          style={{
            backgroundImage: "url('/callToActionAsset.jpg')",
          }}
        />

        {/* Lado direito com texto e botão */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h2 className="text-2xl font-bold text-center md:text-left mb-4">
            Your work, everywhere you are
          </h2>
          <p className="text-center md:text-left mb-8">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitespace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, iOS
            and Android.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#FFE492] text-[#043873] font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CallToAction;
