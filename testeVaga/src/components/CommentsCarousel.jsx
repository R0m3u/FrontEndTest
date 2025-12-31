import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import CommentsCard from "../components/CommentsCard";
import QuoteBlue from "../assets/Quote_blue.jpg";
import QuoteWhite from "../assets/Quote_white.svg";
import Avatar1 from "../assets/Avatar1.jpg";
import Avatar2 from "../assets/Avatar2.svg";
import Avatar3 from "../assets/Avatar3.svg";

const CommentsCarousel = () => {
  return (
    <div className="py-14 px-4 md:px-8 lg:px-12">
      <h1 className="text-center text-[3rem] font-bold my-12">
        What Our Clients Says
      </h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="py-10 overflow-visible"
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            centeredSlides: true,
            spaceBetween: 24,
          },
          540: {
            slidesPerView: 1.4,
            centeredSlides: true,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 48,
          },
        }}
      >
        <SwiperSlide>
          <CommentsCard
            asset={QuoteBlue}
            avatar={Avatar1}
            lineColor="bg-[#212529]"
            inlineStyle="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommentsCard
            asset={QuoteWhite}
            avatar={Avatar2}
            lineColor="bg-[#fff]"
            inlineStyle="bg-[#4F9CF9] text-white rounded-xl"
            nameColor="text-[#043873]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CommentsCard
            asset={QuoteWhite}
            avatar={Avatar3}
            lineColor="bg-[#fff]"
            inlineStyle="bg-[#4F9CF9] text-white rounded-xl"
            nameColor="text-[#043873]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommentsCarousel;
