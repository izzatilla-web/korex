"use client";

import { ChevronDown, Star } from "lucide-react";
import { useMemo, useState } from "react";
import Wrapper from "../wrapper";

const reviews = [
  {
    id: 1,
    name: "Алексей Морозов",
    city: "Москва",
    car: "Kia K5 2022",
    text: "Все прошло спокойно и без лишней суеты. Присылали подборки, объясняли по каждому варианту, по срокам тоже не подвели. Машина приехала именно в том состоянии, которое обсуждали заранее.",
    accent: "bg-[#f7fbff]",
  },
  {
    id: 2,
    name: "Денис Юсупов",
    city: "Казань",
    car: "Hyundai Elantra",
    text: "Больше всего понравилось, что команда не торопила с выбором. Подобрали несколько лотов, дали нормальную обратную связь по рискам, в итоге выбрал удачный вариант по бюджету.",
    accent: "bg-[#fbfcff]",
  },
  {
    id: 3,
    name: "Ирина Соколова",
    city: "Санкт-Петербург",
    car: "Toyota Corolla Cross",
    text: "Для меня был важен понятный процесс, потому что заказывала автомобиль впервые. Здесь как раз понравилась прозрачность: на каждом этапе было ясно, что происходит и сколько это займет.",
    accent: "bg-[#f8fbfe]",
  },
  {
    id: 4,
    name: "Роман Бекетов",
    city: "Екатеринбург",
    car: "Volkswagen Tayron",
    text: "Хорошая коммуникация и аккуратная организация. Отдельно отмечу, что фото и описание по машине совпали с реальностью. После выдачи тоже помогли с вопросами по документам.",
    accent: "bg-[#f9fbff]",
  },
  {
    id: 5,
    name: "Максим Чернов",
    city: "Новосибирск",
    car: "Honda Vezel",
    text: "Сравнивал несколько компаний, в итоге остановился здесь из-за нормальной подачи и четких ответов. По цене все было ожидаемо, без сюрпризов. Машину отправили в мой город без задержек.",
    accent: "bg-[#fbfcff]",
  },
  {
    id: 6,
    name: "Артем Сидоров",
    city: "Краснодар",
    car: "BMW 3 Series",
    text: "Понравился сам подход: без громких обещаний, но с понятной работой. Варианты подбирали вдумчиво, связывались быстро. В итоге получили тот результат, на который и рассчитывали.",
    accent: "bg-[#f7fbff]",
  },
];

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleReviews = useMemo(
    () => (expanded ? reviews : reviews.slice(0, 3)),
    [expanded]
  );

  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,103,200,0.05),transparent_28%),linear-gradient(180deg,rgba(247,251,255,0.75)_0%,rgba(255,255,255,1)_55%)]" />

      <Wrapper className="relative">
        <div className="w-full max-w-full sm:max-w-[760px]">
          <h2 className="text-[32px] font-unbounded uppercase leading-[0.96] tracking-[-0.07em] text-[#15305b] sm:text-[42px] lg:text-[56px]">
            Отзывы клиентов
          </h2>
          <p className="mt-4 w-full max-w-full text-[15px] leading-7 text-[#677895] sm:max-w-[620px] sm:text-[16px]">
            Реальные впечатления клиентов о подборе, покупке и доставке автомобиля.
            Блок оставили спокойным и чистым, чтобы он естественно вписывался в общий стиль сайта.
          </p>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="grid gap-3 md:gap-4 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <article
                key={review.id}
                className={[
                  "group relative overflow-hidden rounded-[24px] border border-[#dbe5f1] p-5 transition duration-300 md:p-6",
                  "active:-translate-y-0.5 md:hover:-translate-y-1 md:hover:border-[#c9d8ea]",
                  review.accent,
                ].join(" ")}
                style={{
                  animation: `stepFadeUp 0.5s ease-out ${index * 80}ms both`,
                }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/70 blur-2xl" />

                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex items-center gap-1 text-[#2d67c8]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4.5 w-4.5 fill-current"
                        strokeWidth={1.8}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-[#4e607c]">
                    {review.text}
                  </p>

                  <div className="mt-6 border-t border-[#e5edf6] pt-4">
                    <p className="text-[16px] font-semibold tracking-[-0.03em] text-[#1f3c69]">
                      {review.name}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-[13px] text-[#6e84a5]">
                      <span>{review.city}</span>
                      <span>{review.car}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!expanded ? (
            <>
              <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(244,248,252,0.82)_45%,rgba(255,255,255,1)_100%)]" />
              <div className="pointer-events-none absolute inset-x-[12%] bottom-5 h-20 rounded-full bg-[#dce9f8]/60 blur-3xl" />
            </>
          ) : null}
        </div>

        <div className="relative z-[50] mt-6 flex justify-center md:mt-8">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d8e3ef] bg-white/90 px-5 text-[15px] font-semibold text-[#20457f] transition hover:border-[#bfd0e3] hover:bg-white active:scale-[0.98]"
          >
            <span>{expanded ? "Скрыть отзывы" : "Еще отзывы"}</span>
            <ChevronDown
              className={[
                "h-4 w-4 transition duration-300",
                expanded ? "rotate-180" : "",
              ].join(" ")}
              strokeWidth={2.2}
            />
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
