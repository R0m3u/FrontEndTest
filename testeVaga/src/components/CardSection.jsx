import { useMemo } from "react";
import CheckIcon from "../assets/checkIcon.svg";
import GoldenCheckIcon from "../assets/goldenCheckIcon.svg";
import CardPlan from "../components/Card";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSection = () => {
  const cards = useMemo(
    () => [
      {
        styleInline: "border border-solid border-[#FFE492]",
        checkIcon: CheckIcon,
        features: [
          "Sincronize dispositivos ilimitados",
          "10 GB de uploads mensais",
          "Notas com até 200 MB",
          "Personalize o painel inicial e acesse widgets adicionais",
          "Conecte sua conta principal do Google Agenda",
          "Adicione prazos, lembretes e notificações às suas tarefas",
        ],
        title: "Grátis",
        price: "0",
        btnName: "Começar",
      },
      {
        styleInline:
          "border border-solid border-[#FFE492] bg-[#043873] text-white",
        styleBlock: { color: "#fff" },
        checkIcon: GoldenCheckIcon,
        features: [
          "Sincronize dispositivos ilimitados",
          "10 GB de uploads mensais",
          "Notas com até 200 MB",
          "Personalize o painel inicial e acesse widgets adicionais",
          "Conecte sua conta principal do Google Agenda",
          "Adicione prazos, lembretes e notificações às suas tarefas",
        ],
        btnName: "Get Started",
        descriptionPlan: "Keep home and family on track",
        title: "Pessoal",
        price: "12.99",
      },
      {
        styleInline: "border border-solid border-[#FFE492]",
        checkIcon: CheckIcon,
        features: [
          "Sincronize dispositivos ilimitados",
          "10 GB de uploads mensais",
          "Notas com até 200 MB",
          "Personalize o painel inicial e acesse widgets adicionais",
          "Conecte sua conta principal do Google Agenda",
          "Adicione prazos, lembretes e notificações às suas tarefas",
        ],
        title: "Organizacional",
        price: "49.99",
        btnName: "Falar com vendas",
      },
    ],
    []
  );

  return (
    <div className="mt-[5rem] px-4 mb-[7rem]">
      <div className="mb-12">
        <h1 className="text-[3rem] font-bold text-center mb-4">
          Escolha Seu Plano
        </h1>
        <p className="px-2 md:p-0 md:max-w-[60%] text-center m-auto">
          Seja para se organizar, manter sua vida pessoal nos eixos ou aumentar
          a produtividade no trabalho, a Whitepace tem o plano certo para você.
        </p>
      </div>

      {/* DESKTOP (lg+): 3 cards com o do meio maior */}
      <div className="hidden lg:flex lg:gap-6 lg:items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 1 ? "flex-[1.15]" : "flex-1"
            } flex justify-center`}
          >
            <CardPlan {...card} variant={index === 1 ? "featured" : "default"} />
          </div>
        ))}
      </div>

      {/* MOBILE + TABLET (<lg): Swiper com peek dos dois lados (mais vazado) */}
      <div className="lg:hidden">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            loop
            centeredSlides
            grabCursor
            spaceBetween={1}
            slidesPerView={1.45}
            slidesOffsetBefore={12}
            slidesOffsetAfter={12}
            breakpoints={{
              480: {
                slidesPerView: 1.55,
                spaceBetween: 1,
                slidesOffsetBefore: 14,
                slidesOffsetAfter: 14,
              },
              640: {
                slidesPerView: 1.7,
                spaceBetween: 1,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
              768: {
                slidesPerView: 1.9,
                spaceBetween: 1,
                slidesOffsetBefore: 18,
                slidesOffsetAfter: 18,
              },
              900: {
                slidesPerView: 2.05,
                spaceBetween: 1,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },
            }}
            navigation={{
              nextEl: ".plans-swiper-next",
              prevEl: ".plans-swiper-prev",
            }}
            pagination={{
              el: ".plans-swiper-pagination",
              clickable: true,
            }}
            className="!pb-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="px-2">
                  <CardPlan
                    {...card}
                    variant={index === 1 ? "featured" : "default"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradientes laterais (reforça o “tem mais”) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 to-transparent" />

          {/* Botões (custom) */}
          <button
            className="plans-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Anterior"
            type="button"
          >
            ←
          </button>

          <button
            className="plans-swiper-next absolute right-2 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            aria-label="Próximo"
            type="button"
          >
            →
          </button>

          {/* Dots (custom container do Swiper) */}
          <div className="plans-swiper-pagination flex justify-center gap-3 mt-6" />
        </div>

        {/* Estilo mínimo pros bullets */}
        <style>{`
          .plans-swiper-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
            border-radius: 9999px;
            transition: all .2s ease;
          }
          .plans-swiper-pagination .swiper-pagination-bullet-active {
            width: 32px;
            background: #043873;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardSection;
