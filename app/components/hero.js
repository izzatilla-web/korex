import Wrapper from "../wrapper";

const quickFilters = [
  { label: "Все", active: false },
  { label: "До 160 л.с.", active: true },
  { label: "Гибриды", active: true },
  { label: "Кроссоверы", active: false },
  { label: "Минивэны", active: false },
  { label: "Седаны", active: false },
  { label: "Хэтчбеки", active: false },
  { label: "Европа. Правый руль", active: false },
  { label: "Санкции Японии", active: false },
  { label: "Вне санкций", active: false },
  { label: "Универсалы", active: false },
  { label: "Кабриолеты", active: false },
  { label: "Купе", active: false },
  { label: "Пикапы", active: false },
  { label: "Лифтбеки", active: false },
  { label: "Кей-кары", active: false },
  { label: "Новые авто", active: "success" },
];

const selects = [
  { label: "Марка" },
  { label: "Выберите модель" },
  { label: "Кузов" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-[#243b6b]">
      <div className="absolute inset-x-0 top-0 h-[40%] lg:h-[55%] bg-[radial-gradient(circle_at_top_left,rgba(72,126,255,0.30),transparent_32%),linear-gradient(135deg,#0b4c8a_0%,#0a5ea9_38%,#0c4b83_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[40%] lg:h-[55%] opacity-20 [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_22px,rgba(255,255,255,0.05)_22px,rgba(255,255,255,0.05)_44px)]" />

      <Wrapper className="relative pt-8 md:pt-10">
        <div className="flex flex-col gap-10 pb-28 pt-6 items-center justify-center lg:pb-44">
          <div className="text-center">
            <h1 className="mt-5 text-[40px] font-unbounded uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-[70px] md:text-[94px] lg:text-[112px]">
              Автомобили
            </h1>

            <p className="mt-5 text-[25px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[38px] md:text-[54px]">
              из Кореи, Китая и Японии под заказ
            </p>
            <p className="mt-6 text-lg font-medium text-white/88 sm:text-2xl md:text-[25px]">
              Привезем авто без посредников за 20 дней и подберем лучший вариант
              под ваш бюджет.
            </p>

            {/* <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                aria-label="Telegram"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[5px] border-white bg-[#2ca5e0] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:scale-[1.03]"
              >
                <TelegramIcon />
              </Link>

              <Link
                href="#"
                aria-label="WhatsApp"
                className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[5px] border-white bg-[#35d167] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:scale-[1.03]"
              >
                <WhatsAppIcon />
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-[74px] min-w-[250px] items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 text-center text-[22px] font-semibold tracking-[-0.03em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-sm transition hover:bg-white/14 sm:min-w-[390px]"
              >
                Оставить заявку
              </Link>
            </div> */}
          </div>
        </div>

        <div className="relative z-10 -mt-14 pb-10 md:-mt-24 md:pb-16">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_28px_80px_rgba(18,44,94,0.12)] ring-1 ring-[#d8e4ff]">
            <div className="grid xl:grid-cols-[220px_repeat(3,minmax(0,1fr))_360px]">
              <div className="flex items-center justify-center bg-[#dce7ff] px-6 py-8 text-center text-[20px] lg:text-[22px] font-bold tracking-[-0.03em] text-[#213d74]">
                Выберите авто
              </div>

              {selects.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="cursor-pointer flex min-h-26.5 items-center justify-between border-t border-[#e3ebfa] px-6 text-[18px] text-[#95a0b7] transition hover:bg-[#f8fbff] xl:border-l xl:border-t-0"
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon />
                </button>
              ))}

              <button
                type="button"
                className="flex min-h-26.5 cursor-pointer items-center justify-center gap-4 bg-[#2c67c8] px-6 text-center text-[20px] lg:text-[22px] font-bold tracking-[-0.03em] text-white transition hover:bg-[#2458ae] xl:border-l xl:border-[#4c7bd0]"
              >
                <SearchIcon />
                <span>Показать 304 544 авто</span>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 lg:gap-3 md:gap-4">
            {quickFilters.map((item) => (
              <button
                key={item.label}
                type="button"
                className={[
                  "rounded-2xl px-5 lg:px-7 py-3 lg:py-5 text-[14px] lg:text-[18px] cursor-pointer font-bold uppercase tracking-[-0.03em] transition",
                  item.active === true
                    ? "bg-[#3b88d6] text-white shadow-[0_12px_30px_rgba(59,136,214,0.22)]"
                    : "",
                  item.active === "success"
                    ? "bg-[#b6e85f] text-[#24416f]"
                    : "",
                  !item.active
                    ? "bg-[#dce7ff] text-[#274880] hover:bg-[#cedcff]"
                    : "",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current">
      <path
        d="m6 9 6 6 6-6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-current">
      <circle cx="11" cy="11" r="7.5" strokeWidth="1.8" />
      <path d="m16.5 16.5 4 4" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// function TelegramIcon() {
//   return (
//     <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white">
//       <path d="M19.7 5.3 17 18.2c-.2.9-.7 1.1-1.5.7l-4.1-3-2 2c-.2.2-.4.4-.8.4l.3-4.2 7.7-6.9c.3-.3-.1-.4-.5-.2l-9.6 6-4.1-1.3c-.9-.3-.9-.9.2-1.3L18 4.4c.8-.3 1.5.2 1.3.9Z" />
//     </svg>
//   );
// }

// function WhatsAppIcon() {
//   return (
//     <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white">
//       <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.5L3 20.8l1.3-4.8A8.5 8.5 0 1 1 20.5 12Zm-8.5-5.9c-3.2 0-5.8 2.6-5.8 5.8 0 1 .3 2 .8 2.9l-.8 2.8 2.9-.8a5.8 5.8 0 1 0 2.9-10.7Zm3.5 7.4c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1l-.4.5c-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.4-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.6l.3-.3.2-.3c.1-.2.1-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.8-.9 2 0 1.1.8 2.2.9 2.4.1.2 1.7 2.7 4.3 3.7 2.6 1 2.6.7 3.1.7s1.5-.6 1.7-1.2c.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
//     </svg>
//   );
// }
