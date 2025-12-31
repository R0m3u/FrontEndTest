import arrowDown from "../assets/arrowDown.svg";
import logo from "../assets/logo.svg";
import arrowRight from "../assets/right-arrow.png";
import Button from "../components/Button.jsx";
import { useState } from "react";
import HamburguerMenu from "../components/HamburguerMenu.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#043873] flex text-white py-2 realative">
      <div className="flex items-center justify-between md:px-[3rem] p-[1rem] w-full">
        {/*brand logo*/}
        <div>
          <img src={logo} className="md:h-12 h-8" />
        </div>
        {/*menu*/}
        <div className="lg:flex items-center">
          <ul className="lg:flex hidden items-center">
            <li className="flex cursor-pointer">
              <span className="md:mr-[0.85rem]">Products</span>
              <img
                src={arrowDown}
                className="w-[12px] hidden md:block md:mr-8"
              />
            </li>
            <li className="flex cursor-pointer">
              <span className="mr-[0.85rem]">Solutions</span>
              <img
                src={arrowDown}
                className="w-[12px] hidden md:block md:mr-8"
              />
            </li>
            <li className="flex cursor-pointer">
              <span className="mr-[0.85rem]">Resources</span>
              <img
                src={arrowDown}
                className="w-[12px] hidden md:block md:mr-8"
              />
            </li>
            <li className="flex cursor-pointer">
              <span className="mr-[0.85rem]">Pricing</span>
              <img src={arrowDown} className="w-[12px] hidden md:block" />
            </li>
          </ul>
        </div>
        <div className="lg:block hidden items-center">
          <Button
            name="Login"
            className="bg-[#ffe492] cursor-pointer text-[#000] py-[0.75rem] px-8 rounded-[8px] md:ml-[3rem]"
          />
          <Button
            name="Try Whitspace free"
            className="bg-[#4f9cf9] cursor-pointer text-[#fff] py-[0.75rem] px-8 rounded-[8px] md:ml-[1.5rem]"
            imgSrc={arrowRight}
            imgStyles="inline h-4 ml-[0.75rem]"
          />
        </div>
        <HamburguerMenu />
      </div>
    </header>
  );
};

export default Header;
