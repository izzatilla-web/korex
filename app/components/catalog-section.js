import Image from "next/image";
import Wrapper from "../wrapper";

const catalogItems = [
  {
    title: "Корея",
    img: "/img-korea.webp",
  },
  {
    title: "Китай",
    img: "/img-china.webp",
  },
  {
    title: "Япония",
    img: "/img-japan.webp",
  },
  {
    title: "ОАЭ",
    img: "/img-uae.webp",
  },
];

export default function CatalogSection() {
  return (
    <section id="catalogs" className="bg-white py-16 md:py-24">
      <Wrapper>
        <h2 className="text-[30px] font-semibold tracking-[-0.06em] text-[#17171d] sm:text-[50px]">
          Каталоги автомобилей
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:gap-5 xl:grid-cols-4">
          {catalogItems.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-[28px] bg-[#fbfcff] p-3.5 transition duration-300 active:-translate-y-0.5 active:bg-[#eef4fb] sm:rounded-[34px] sm:p-5 md:hover:bg-[#00437c] md:hover:shadow-[0_24px_60px_rgba(14,79,141,0.16)] lg:p-7"
            >
              <div className="relative z-10 flex min-h-[180px] flex-col justify-between sm:min-h-[220px] md:min-h-[300px]">
                <h3 className="relative z-20 text-[26px] tracking-[-0.06em] text-[#1e2025] transition duration-300 sm:text-[40px] md:text-[44px] md:group-hover:text-white xl:text-[52px]">
                  {item.title}
                </h3>

                <div className="pointer-events-none absolute inset-x-2 bottom-0 h-[140px] sm:inset-x-0 sm:h-[220px] md:h-[250px]">
                  <div className="absolute inset-x-3 bottom-2 h-16 rounded-full bg-[#96b5e1]/20 blur-2xl sm:inset-x-8 sm:h-20" />
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="h-full w-full object-contain object-right-bottom transition-transform duration-500 scale-[1.60] sm:scale-105 md:scale-115 md:group-hover:scale-[1.60]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
