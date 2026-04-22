"use client";

import { useRef } from "react";
import { stockCars } from "../../data/stock-cars";
import Wrapper from "../wrapper";
import CatalogCard from "./catalog-card";

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
              Подобрали витрину с понятными карточками и быстрым переходом в детальную страницу каждой машины.
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
        className={`h-5 w-5 fill-none stroke-current ${direction === "next" ? "" : "rotate-180"}`}
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
