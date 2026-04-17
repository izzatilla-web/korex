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
    <section className="bg-white py-16 md:py-24">
      <Wrapper>
        <h2 className="text-[30px] font-semibold tracking-[-0.06em] text-[#17171d] sm:text-[50px]">
          Каталоги автомобилей
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2 md:mt-14 md:gap-5 xl:grid-cols-4">
          {catalogItems.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-[34px] bg-[#fbfcff] p-5 transition duration-300 hover:bg-[#00437c] hover:shadow-[0_24px_60px_rgba(14,79,141,0.16)] lg:p-7"
            >
              <div className="relative z-10 flex min-h-[200px] flex-col justify-between md:min-h-[300px]">
                <h3 className="text-[30px] tracking-[-0.06em] text-[#1e2025] transition duration-300 group-hover:text-white md:text-[44px] sm:text-[52px]">
                  {item.title}
                </h3>

                <div className="absolute bottom-0 right-0 h-[400px] w-full sm:h-[250px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="h-full w-full object-contain object-right-bottom transition-transform duration-500 scale-110 md:scale-120 group-hover:scale-150"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
