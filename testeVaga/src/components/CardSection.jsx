import { useState } from "react";
import CheckIcon from "../assets/checkIcon.svg";
import GoldenCheckIcon from "../assets/goldenCheckIcon.svg";
import CardPlan from "../components/Card";

const CardSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      styleInline: "border border-solid border-[#FFE492]",
      checkIcon: CheckIcon,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      title: "Free",
      price: "0",
    },
    {
      styleInline:
        "border border-solid border-[#FFE492] bg-[#043873] text-[#fff]",
      styleBlock: { textColor: "#fff" },
      checkIcon: GoldenCheckIcon,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      btnName: "Get Started",
      descriptionPlan: "Keep home and family on track",
      title: "Personal",
      price: "12.99",
    },
    {
      styleInline: "border border-solid border-[#FFE492]",
      checkIcon: CheckIcon,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      title: "Organization",
      price: "49.99",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-[5rem] px-4">
      <div className="mb-12">
        <h1 className="text-[3rem] font-bold text-center mb-4">
          Choose Your Plan
        </h1>
        <p className="px-2 md:p-0 md:max-w-[60%] text-center m-auto">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* Desktop View (original) */}
      <div className="hidden md:flex md:gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex-1">
            <CardPlan {...card} />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <CardPlan {...card} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#043873] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
