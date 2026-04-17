"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CatalogCard({ car }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="group min-w-[288px] snap-start md:min-w-[340px] lg:min-w-[360px] xl:min-w-[calc((100%-24px)/3)]">
      <div className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#dfe7f2] bg-white/95 transition duration-300 hover:border-[#ccd8e7]">
        <div className={`relative overflow-hidden bg-gradient-to-b ${car.accent}`}>
          <div className="relative h-[220px] overflow-hidden rounded-t-[22px] bg-[#e6ecf3] md:h-[250px]">
            {car.images.map((image, index) => (
              <Image
                key={image.src + index}
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 31vw"
                className={[
                  "object-cover transition-all duration-300",
                  activeImage === index
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.02] opacity-0",
                ].join(" ")}
              />
            ))}

            <div className="absolute inset-0 z-10 flex">
              {car.images.map((image, index) => (
                <button
                  key={image.src + "-zone"}
                  type="button"
                  aria-label={`${car.title}: показать фото ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onMouseEnter={() => setActiveImage(index)}
                  onFocus={() => setActiveImage(index)}
                  onClick={() => setActiveImage(index)}
                  className="h-full flex-1 cursor-pointer"
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,28,48,0.02)_0%,rgba(14,28,48,0.16)_100%)]" />

            <div className="absolute left-3 top-3 z-20 inline-flex rounded-full bg-white/88 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#294266] md:left-4 md:top-4">
              {car.badge}
            </div>

            <div className="absolute inset-x-4 z-20 flex gap-2 md:inset-x-8 bottom-1">
              {car.images.map((image, index) => (
                <button
                  key={image.src + "-pagination"}
                  type="button"
                  aria-label={`${car.title}: показать фото ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onMouseEnter={() => setActiveImage(index)}
                  onFocus={() => setActiveImage(index)}
                  onClick={() => setActiveImage(index)}
                  className="relative z-30 flex-1 cursor-pointer py-2"
                >
                  <span
                    className={[
                      "block h-[4px] rounded-full transition-all duration-200",
                      activeImage === index ? "bg-[#00437c]" : "bg-white/70",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-3.5 md:px-5 md:pb-5 justify-between">
          <div className="flex items-start justify-between gap-2.5">
            <div className="min-w-0">
              <h3 className="text-[18px] font-bold uppercase leading-[1.02] tracking-[-0.05em] text-[#152b4d] md:text-[24px]">
                {car.title}
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7488a9] md:mt-1.5 md:text-[12px]">
                {car.trim}
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-[#e2e9f2] bg-[#f8fbfe] px-3 py-1 text-[12px] font-medium text-[#617490] md:text-[13px]">
              {car.year}
            </div>
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-2 rounded-[18px] border border-[#ebf0f6] bg-[#fbfcfe] p-2.5 md:mt-5 md:grid-cols-3 md:gap-3 md:p-3.5">
            <SpecItem label="Мощность" value={car.engine} />
            <SpecItem label="Пробег" value={car.mileage} />
            <SpecItem label="КПП" value={car.gearbox} wide />
          </dl>

          <div className="mt-3 rounded-[18px] border border-[#ebf0f6] bg-[#fcfdff] p-2.5 md:mt-5 md:p-4">
            <div className="rounded-[16px] bg-[#f7fafc] p-2.5 md:bg-transparent md:p-0">
              <div className="flex flex-col gap-2.5 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#7d8eab] md:text-sm md:tracking-normal">
                    Цена в Китае
                  </p>
                  <p className="mt-0.5 text-[20px] font-semibold tracking-[-0.05em] text-[#e15f4c] md:mt-1 md:text-[25px]">
                    {car.priceChina}
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-[#e4ebf3] lg:block" />

                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#7d8eab] md:text-sm md:tracking-normal">
                    Цена с доставкой
                  </p>
                  <p className="mt-0.5 text-[17px] font-semibold tracking-[-0.04em] text-[#294266] md:mt-1 md:text-[21px]">
                    {car.priceLocal}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2 md:hidden">
              <CompactMeta value={car.badge} />
              <CompactMeta value={car.trim} />
            </div>

            <Link
              href="#"
              className="mt-2.5 inline-flex min-h-10 w-full items-center justify-center rounded-[14px] border border-[#d5dfec] bg-[white] px-4 text-[14px] font-semibold !text-white transition hover:border-[#bccbdd] hover:bg-[#00437c] md:hidden hover:!text-[#00437c]"
            >
              Подробнее
            </Link>
          </div>

          <Link
            href="#"
            className="mt-4 hidden min-h-12 items-center justify-center rounded-full border border-[#d5dfec] bg-[#00437c] px-6 text-[16px] font-semibold !text-white transition hover:border-[#bccbdd] hover:bg-[white] md:inline-flex hover:!text-[#00437c]"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}

function SpecItem({ label, value, wide = false }) {
  return (
    <div
      className={[
        "rounded-[14px] bg-white px-2.5 py-2 md:rounded-none md:bg-transparent md:px-0 md:py-0",
        wide ? "col-span-2 md:col-span-1" : "",
      ].join(" ")}
    >
      <dt className="text-[10px] uppercase tracking-[0.16em] text-[#8ca0c0] md:text-[11px]">
        {label}
      </dt>
      <dd className="mt-0.5 text-[13px] font-semibold leading-5 text-[#20385e] md:mt-1.5 md:text-[14px] md:leading-6">
        {value}
      </dd>
    </div>
  );
}

function CompactMeta({ value }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-full border border-[#e6edf5] bg-white px-3 text-[12px] font-medium text-[#5a7093]">
      {value}
    </span>
  );
}
