import Image from "next/image";
import Wrapper from "../wrapper";

const catalogItems = [
  {
    title: "Корея",
    img: "/genesis_3.png",
    flag: "/kr.png",
  },
  {
    title: "Китай",
    img: "/voyah_2.png",
    flag: "/cn.png", 
  },
  {
    title: "Япония",
    img: "/crown.png",
    flag: "/jp.png",
  },
];

export default function CatalogSection() {
  return (
    <section id="catalogs" className="bg-white py-16 md:py-24">
      <Wrapper>
        <h2 className="text-[30px] font-semibold tracking-[-0.06em] text-[#17171d] sm:text-[50px]">
          Каталоги автомобилей
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:grid-rows-2 md:gap-5">
          {catalogItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[28px] bg-[#fbfcff] p-6 transition-all duration-500 active:-translate-y-0.5 active:bg-[#eef4fb] sm:rounded-[34px] sm:p-8 md:hover:bg-[#00437c] md:hover:shadow-[0_24px_60px_rgba(14,79,141,0.16)] 
                ${index === 0 ? "md:row-span-2 min-h-[200px] md:min-h-[450px]" : "min-h-[200px]"} 
              `}
            >
              <div className="absolute inset-0 z-0 opacity-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100 group-hover:opacity-15">
                <Image
                  src={item.flag}
                  alt={`${item.title} flag`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fbfcff] via-transparent to-transparent md:group-hover:from-[#00437c]" />
              </div>

              <div className="relative z-20">
                <h3 className="max-w-[150px] text-[26px] font-medium leading-tight tracking-[-0.06em] text-[#1e2025] transition-colors duration-300 sm:text-[40px] md:group-hover:text-white lg:text-[48px]">
                  {item.title}
                </h3>
              </div>

              <div className={`${index === 0 ? "md:bottom-[-50px] h-full md:h-[60%] lg:h-[70%] bottom-[-30px]" : ""} pointer-events-none absolute bottom-0 right-0 z-10 h-[65%] w-[85%] sm:w-[75%] md:h-[60%] lg:h-[70%]`}>
                <div className="relative h-full w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain object-right-bottom transition-transform duration-700 ease-out origin-bottom-right md:group-hover:scale-[1.20]"
                    sizes="(max-width: 768px) 100vw, 50vw"
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