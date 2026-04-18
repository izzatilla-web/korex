"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Wrapper from "../wrapper";

const faqItems = [
  {
    id: "price",
    question: "Сколько стоят ваши услуги?",
    answer:
      "Наша комиссия зависит от страны покупки, сложности подбора и формата сопровождения. До старта работы мы заранее объясняем структуру расходов, чтобы итоговая сумма была понятной и прозрачной.",
  },
  {
    id: "total",
    question: "Из чего формируется итоговая стоимость автомобиля?",
    answer:
      "Обычно в итоговую сумму входят стоимость лота или автомобиля, комиссия, логистика, таможенные платежи, оформление документов и доставка по России при необходимости. По каждому этапу мы даем понятную раскладку.",
  },
  {
    id: "delivery",
    question: "Вы доставляете только во Владивосток?",
    answer:
      "Нет, после прихода автомобиля мы можем организовать отправку в другие города России. Также возможна выдача во Владивостоке, если вам так удобнее.",
  },
  {
    id: "timing",
    question: "Как быстро я получу свой автомобиль?",
    answer:
      "Срок зависит от страны, маршрута доставки и текущей логистики. В среднем процесс занимает от нескольких недель, и по ходу работы мы держим вас в курсе каждого этапа.",
  },
  {
    id: "inspection",
    question: "Что именно проверяет технический специалист при осмотре?",
    answer:
      "Мы смотрим общее состояние кузова, салона, ходовой части, силового агрегата, следы ремонта, а также сопоставляем фактическое состояние с описанием лота и фотоотчетом.",
  },
  {
    id: "guarantees",
    question: "Какие гарантии вы предоставляете?",
    answer:
      "Мы работаем прозрачно по согласованному процессу: фиксируем условия, показываем подбор, согласовываем покупку и сопровождаем выдачу. Главная гарантия для клиента — понятная коммуникация и подтверждение каждого шага.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(faqItems[0].id);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,103,200,0.05),transparent_30%),linear-gradient(180deg,rgba(249,251,255,0.7)_0%,rgba(255,255,255,1)_58%)]" />

      <Wrapper className="relative">
        <div className="w-full max-w-full sm:max-w-[780px]">
          <h2 className="text-[32px] font-unbounded uppercase leading-[0.96] tracking-[-0.07em] text-[#17171d] sm:text-[42px] lg:text-[58px]">
            Популярные вопросы
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3 md:mt-14 md:gap-4">
          {faqItems.map((item) => {
            const isOpen = item.id === openId;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-[22px] border border-[#edf2f8] hover:!border-[#00427c2e] transition duration-300"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenId((current) => (current === item.id ? "" : item.id))
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition sm:px-8 sm:py-6"
                >
                  <span className="text-[20px] font-semibold tracking-[-0.05em] text-[#1d2430] sm:text-[28px] lg:text-[32px]">
                    {item.question}
                  </span>

                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#2a2d35] transition duration-300">
                    <ChevronDown
                      className={[
                        "h-7 w-7 transition duration-400 ease-out",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div
                      className={[
                        "px-5 pb-5 text-[16px] leading-8 text-[#4f617c] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 sm:pb-7 sm:text-[18px]",
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0",
                      ].join(" ")}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
