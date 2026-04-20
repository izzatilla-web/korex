import Wrapper from "../wrapper";

const selects = [
  { label: "Марка" },
  { label: "Выберите модель" },
  { label: "Кузов" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-[#21334f] !bg-white">
      <div className="absolute inset-x-0 top-0 h-[82%] bg-[radial-gradient(circle_at_top_left,rgba(242,182,54,0.34),transparent_28%),radial-gradient(circle_at_75%_0%,rgba(212,69,46,0.28),transparent_26%),linear-gradient(135deg,#0a376d_0%,#174d8f_38%,#1f5ebd_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[82%] opacity-20 [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_18px,rgba(255,255,255,0.06)_18px,rgba(255,255,255,0.06)_36px)]" />

      <Wrapper className="relative pt-8 md:pt-10">
        <div className="flex flex-col items-center justify-center gap-10 pb-28 pt-6 lg:pb-44">
          <div className="text-center">
            <h1 className="mt-5 text-[40px] font-unbounded uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-[70px] md:text-[94px] lg:text-[112px]">
              Автомобили
            </h1>

            <p className="mt-5 text-[25px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[38px] md:text-[54px]">
              из Кореи, Китая и Японии под заказ
            </p>
            <p className="mx-auto mt-6 max-w-[860px] text-lg font-medium text-white/84 sm:text-2xl md:text-[25px]">
              Привезем авто без посредников за 20 дней и подберем лучший вариант
              под ваш бюджет.
            </p>
          </div>
        </div>

        <div className="relative z-10 -mt-14 pb-10 md:-mt-24 md:pb-16">
          <div className="overflow-hidden rounded-[30px] border border-[#d6e1ed] bg-white">
            <div className="grid xl:grid-cols-[250px_repeat(3,minmax(0,1fr))_360px]">
              <div className="flex items-center justify-center bg-[linear-gradient(180deg,#fff7e8_0%,#ffe4b5_100%)] px-6 py-8 text-center text-[20px] font-bold tracking-[-0.03em] text-[#173a6c] lg:text-[22px]">
                Выберите авто
              </div>

              {selects.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex min-h-24 cursor-pointer items-center justify-between border-t border-[#e5ebf2] px-6 text-[18px] text-[#8a97aa] transition hover:bg-[#f8fbff] xl:border-l xl:border-t-0"
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon />
                </button>
              ))}

              <button
                type="button"
                className="flex min-h-24 cursor-pointer items-center justify-center gap-4 bg-[linear-gradient(135deg,#d4452e_0%,#f2b636_100%)] px-6 text-center text-[20px] font-bold tracking-[-0.03em] text-white transition hover:brightness-105 lg:text-[22px] xl:border-l xl:border-[#f0cf8e]"
              >
                <SearchIcon />
                <span>Показать 304 544 авто</span>
              </button>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current text-[#1f5ebd]">
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
