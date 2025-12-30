import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CommentsCard from "../components/CommentsCard";
import QuoteBlue from "../assets/Quote_blue.jpg";
import QuoteWhite from "../assets/Quote_white.svg";
import Avatar1 from "../assets/Avatar1.jpg";
import Avatar2 from "../assets/Avatar2.svg";
import Avatar3 from "../assets/Avatar3.svg";

const CommentsCarousel = () => {
  return (
    <div className="px-8 mb-20">
      <h1 className="text-center text-[3rem] font-bold my-12">
        What Our Clients Says
      </h1>

      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <CommentsCard
            asset={QuoteBlue}
            avatar={Avatar1}
            lineColor="bg-[#212529]"
            inlineStyle="bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.30)]"
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
