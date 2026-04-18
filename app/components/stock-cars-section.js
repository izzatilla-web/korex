"use client";

import { useRef } from "react";
import Wrapper from "../wrapper";
import CatalogCard from "./catalog-card";

const stockCars = [
  {
    id: "toyota-corolla-cross",
    badge: "В наличии",
    title: "Toyota Corolla Cross",
    trim: "Hybrid MID",
    year: "2022",
    engine: "171 л.с.",
    mileage: "32 379 км",
    gearbox: "CVT",
    priceChina: "¥ 63 000",
    priceLocal: "от 2 931 114 ₽",
    accent: "from-[#edf3f9] to-[#f8fbfd]",
    images: [
      { src: "/img-korea.webp", alt: "Toyota Corolla Cross rear view" },
      { src: "/img-china.webp", alt: "Toyota Corolla Cross front view" },
      { src: "/img-japan.webp", alt: "Toyota Corolla Cross side view" },
      { src: "/img-uae.webp", alt: "Toyota Corolla Cross interior preview" },
    ],
  },
  {
    id: "hyundai-elantra",
    badge: "В пути",
    title: "Hyundai Elantra",
    trim: "MID+",
    year: "2022",
    engine: "115 л.с.",
    mileage: "8 544 км",
    gearbox: "CVT",
    priceChina: "¥ 95 800",
    priceLocal: "от 1 557 751 ₽",
    accent: "from-[#eff4f9] to-[#fbfcfe]",
    images: [
      { src: "/img-china.webp", alt: "Hyundai Elantra front view" },
      { src: "/img-korea.webp", alt: "Hyundai Elantra rear view" },
      { src: "/img-uae.webp", alt: "Hyundai Elantra profile view" },
      { src: "/img-japan.webp", alt: "Hyundai Elantra detail view" },
    ],
  },
  {
    id: "volkswagen-tayron-black",
    badge: "Топ",
    title: "Volkswagen Tayron",
    trim: "TOP",
    year: "2022",
    engine: "150 л.с.",
    mileage: "30 490 км",
    gearbox: "7-DCT",
    priceChina: "¥ 180 500",
    priceLocal: "от 2 496 963 ₽",
    accent: "from-[#eef3f8] to-[#f9fbfd]",
    images: [
      { src: "/img-japan.webp", alt: "Volkswagen Tayron front angle" },
      { src: "/img-uae.webp", alt: "Volkswagen Tayron front view" },
      { src: "/img-china.webp", alt: "Volkswagen Tayron rear angle" },
      { src: "/img-korea.webp", alt: "Volkswagen Tayron cabin view" },
    ],
  },
  {
    id: "volkswagen-tayron-white",
    badge: "Готов",
    title: "Volkswagen Tayron",
    trim: "TOP",
    year: "2022",
    engine: "150 л.с.",
    mileage: "25 076 км",
    gearbox: "7-DCT",
    priceChina: "¥ 177 500",
    priceLocal: "от 2 463 453 ₽",
    accent: "from-[#f0f4f8] to-[#fbfcfe]",
    images: [
      { src: "/img-uae.webp", alt: "Volkswagen Tayron white front view" },
      { src: "/img-japan.webp", alt: "Volkswagen Tayron grille detail" },
      { src: "/img-korea.webp", alt: "Volkswagen Tayron rear quarter view" },
      { src: "/img-china.webp", alt: "Volkswagen Tayron dashboard detail" },
    ],
  },
];

export default function StockCarsSection() {
  const railRef = useRef(null);

  function scrollRail(direction) {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const offset = Math.max(rail.clientWidth * 0.8, 280);
    rail.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  }

  return (
    <section id="stock" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,94,169,0.04),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.05),transparent_24%)]" />

      <Wrapper className="relative">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full max-w-full sm:max-w-[680px]">
            <h2 className="mt-4 text-[30px] font-unbounded uppercase leading-[0.96] tracking-[-0.07em] text-[#15305b] sm:text-[40px] lg:text-[50px]">
              Авто в наличии
            </h2>
            <p className="mt-4 w-full max-w-full text-[15px] leading-7 text-[#677895] sm:max-w-[560px] sm:text-[16px]">
              Аккуратная подборка автомобилей с понятной ценой и быстрым
              выкупом. Блок сделали спокойнее и чище, чтобы он лучше сочетался
              с текущим стилем сайта.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <SectionArrow
              direction="prev"
              label="Предыдущие автомобили"
              onClick={() => scrollRail("prev")}
            />
            <SectionArrow
              direction="next"
              label="Следующие автомобили"
              onClick={() => scrollRail("next")}
            />
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-12 lg:gap-4"
        >
          {stockCars.map((car) => (
            <CatalogCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <SectionArrow
            direction="prev"
            label="Предыдущие автомобили"
            onClick={() => scrollRail("prev")}
          />
          <SectionArrow
            direction="next"
            label="Следующие автомобили"
            onClick={() => scrollRail("next")}
          />
        </div>
      </Wrapper>
    </section>
  );
}

function SectionArrow({ direction, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e1ef] bg-white/90 text-[#173b70] transition hover:border-[#bccbdd] hover:bg-white hover:text-[#1f5cb8]"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 fill-none stroke-current ${
          direction === "next" ? "" : "rotate-180"
        }`}
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
