"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../app/wrapper";
import CatalogCard from "../app/components/catalog-card";

export default function CarDetailPage({ car, similarCars }) {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = car.images[activeImage] ?? car.images[0];

  function showNextImage() {
    setActiveImage((index) => (index + 1) % car.images.length);
  }

  function showPreviousImage() {
    setActiveImage((index) => (index - 1 + car.images.length) % car.images.length);
  }

  return (
    <main className="pb-16 pt-8 sm:pb-20 lg:pb-24">
      <Wrapper>
        <nav className="text-[12px] uppercase tracking-[0.16em] text-[#7587a2] sm:text-[13px]">
          <Link href="/" className="transition hover:text-[#1f5ebd]">
            Korex
          </Link>
          <span className="mx-2 text-[#b8c4d3]">/</span>
          <Link href="/#stock" className="transition hover:text-[#1f5ebd]">
            Авто в наличии
          </Link>
          <span className="mx-2 text-[#b8c4d3]">/</span>
          <span className="text-[#1b2f4b]">{car.title}</span>
        </nav>

        <section>
          <div className="grid gap-[50px] xl:grid-cols-[420px_minmax(0,1fr)]">
            <div className="border-b border-[#e8eef5] mt-5">
              <h1 className="mt-4 max-w-[12ch] text-[34px] font-unbounded uppercase leading-[0.94] tracking-[-0.08em] text-[#12233d] sm:text-[44px]">
                {car.title}
              </h1>
              <p className="mt-3 text-[14px] uppercase tracking-[0.16em] text-[#6f819c]">
                {car.trim}
              </p>

              <dl className="mt-8 space-y-3">
                <SpecRow label="Год выпуска" value={car.year} />
                <SpecRow label="Пробег" value={car.mileage} />
                <SpecRow label="Привод" value={car.drive} />
                <SpecRow label="Объём" value={car.volume} />
                <SpecRow label="Двигатель" value={car.fuel} />
                <SpecRow label="Мощность" value={car.power} />
                <SpecRow label="Трансмиссия" value={car.gearbox} />
                <SpecRow label="Комплектация" value={car.trim} />
              </dl>

              <div className="mt-8 ">
                <div className="flex items-center justify-between gap-3 border-b border-[#dbe4ef] pb-4">
                  <span className="text-[14px] text-[#7386a0]">Статус</span>
                  <span className="text-[15px] font-semibold text-[#1f5ebd]">{car.status}</span>
                </div>

                <div className="mt-4 space-y-3">
                  <PriceLine label="Цена в стране" value={car.priceChina} accent />
                  <PriceLine label="Цена под ключ" value={car.priceLocal} />
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row xl:flex-col">
                  <a
                    href="#description"
                    className="inline-flex min-h-12 items-center !text-white justify-center rounded-full bg-[#0f4c8a] px-6 text-[15px] font-semibold text-white transition hover:bg-[#0d5aa7]"
                  >
                    Узнать подробнее
                  </a>
                  <Link
                    href="/#stock"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6e1ee] bg-white px-6 text-[15px] font-semibold text-[#163865] transition hover:border-[#b7c9df] hover:text-[#1f5ebd]"
                  >
                    К другим авто
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:p-6 lg:p-7">
              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#edf3f8_0%,#f7fafc_100%)]">
                <button
                  type="button"
                  aria-label="Предыдущее фото"
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#153966] shadow-[0_10px_30px_rgba(17,40,76,0.12)] transition hover:bg-white"
                >
                  <ArrowIcon direction="left" />
                </button>

                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Следующее фото"
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-[#153966] shadow-[0_10px_30px_rgba(17,40,76,0.12)] transition hover:bg-white"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>

              <div className="mt-4 grid gap-3 grid-cols-4">
                {car.images.map((image, index) => (
                  <button
                    key={image.alt + index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`group relative overflow-hidden rounded-[10px] sm:rounded-[20px] border transition ${
                      activeImage === index
                        ? "border-[#1f5ebd] ring-2 ring-[#d7e7fb]"
                        : "border-[#dce5ef] hover:border-[#b8cce5]"
                    }`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="description"
          className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start"
        >
          <div className="mt-8">
            <div className="max-w-[980px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7c8ea9]">
                Описание автомобиля
              </p>
              <h2 className="mt-4 text-[28px] font-unbounded uppercase leading-[0.98] tracking-[-0.07em] text-[#132642] sm:text-[38px]">
                {car.title}
              </h2>

              <div className="mt-8 space-y-6 text-[16px] leading-8 text-[#546882]">
                <p>
                  <span className="font-semibold text-[#10243f]">Статус:</span> {car.status}.
                </p>
                <p>
                  <span className="font-semibold text-[#10243f]">Комментарий специалиста:</span>{" "}
                  {car.specialistComment}
                </p>
                <p>{car.description}</p>
              </div>

              <div className="mt-8 space-y-3">
                {car.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[20px] border border-[#edf2f7] bg-[#fbfdff] px-4 py-4 text-[15px] leading-7 text-[#314862]"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef4fb] text-[14px] font-bold text-[#1f5ebd]">
                      +
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
{/* 
          <aside className="rounded-[32px] border border-[#e4ebf4] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.05)] sm:p-8 lg:sticky lg:top-6">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#7b8ba5]">Korex Selection</p>
            <h3 className="mt-4 text-[30px] font-unbounded uppercase leading-[0.98] tracking-[-0.07em] text-[#12335b]">
              Быстрый расчёт
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[#617490]">
              Сориентируем по срокам, доставке и итоговой стоимости именно под этот автомобиль.
            </p>

            <div className="mt-6 rounded-[24px] border border-[#edf2f7] bg-[#f8fbfe] p-4">
              <InfoLine label="Локация" value={car.location} />
              <InfoLine label="Публикация" value={car.publishedAt} />
              <InfoLine label="Под ключ" value={car.priceLocal} />
            </div>

            <Link
              href="/#contact"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#123f72] px-6 text-[15px] font-semibold text-white transition hover:bg-[#0f4c8a]"
            >
              Оставить заявку
            </Link>
          </aside> */}
        </section>

        <section className="mt-10 lg:mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[#7587a2]">Похожие варианты</p>
              <h2 className="mt-3 text-[30px] font-unbounded uppercase leading-[0.98] tracking-[-0.07em] text-[#132642] sm:text-[40px]">
                Похожие авто
              </h2>
            </div>
            <Link href="/#stock" className="hidden text-[15px] font-semibold text-[#1f5ebd] md:inline-flex">
              Смотреть все
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {similarCars.map((similarCar) => (
              <CatalogCard key={similarCar.id} car={similarCar} />
            ))}
          </div>
        </section>
      </Wrapper>
    </main>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#e7edf4] pb-3 text-[15px]">
      <dt className="text-[#71839e]">{label}</dt>
      <dd className="text-right font-semibold text-[#122844]">{value}</dd>
    </div>
  );
}

function PriceLine({ label, value, accent = false }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <span className="text-[14px] text-[#7386a0]">{label}</span>
      <span className={`text-right text-[22px] font-semibold ${accent ? "text-[#ff5c44]" : "text-[#12335b]"}`}>
        {value}
      </span>
    </div>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#e3ebf4] py-3 text-[14px] last:border-b-0 last:pb-0 first:pt-0">
      <span className="text-[#6f819c]">{label}</span>
      <span className="font-semibold text-[#12335b]">{value}</span>
    </div>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 fill-none stroke-current ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
