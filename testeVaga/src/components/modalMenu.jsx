import Button from "../components/Button.jsx";
import arrowRight from "../assets/right-arrow.png";

const ModalMenu = ({ itsOpened }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        itsOpened ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay escuro */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          itsOpened ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Menu lateral */}
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl rounded-t-sm rounded-l-sm transition-transform duration-300 ${
          itsOpened ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header do menu */}

        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full"></button>
          </div>
        </div>

        {/* Itens do menu */}
        <nav className="p-4 space-y-2 flex flex-col items-center">
          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            <span className="font-medium text-center">Produtos</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            <span className="font-medium">Soluções</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            <span className="font-medium">Recursos</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            <span className="font-medium">Preços</span>
          </a>
        </nav>
        {/* Itens do menu */}

        {/* Footer do menu */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
          <Button
            name="Login"
            className="bg-[#ffe492] w-full mb-4 cursor-pointer text-[#000] py-[0.75rem] px-8 rounded-[8px] md:ml-[3rem]"
          />
          <Button
            name="Try Whitspace free"
            className="bg-[#4f9cf9] w-full cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px] md:ml-[1.5rem]"
            imgSrc={arrowRight}
            imgStyles="inline h-4 ml-[0.75rem]"
          />
        </div>
        {/* Footer do menu */}
      </div>
    </div>
  );
};

export default ModalMenu;
