import crownToyotaImage from "../public/crown.png";
import genesisImage from "../public/genesis_3.png";
import voyahImage from "../public/voyah.png";

export const stockCars = [
  {
    id: "toyota-crown-crossover",
    slug: "toyota-crown-crossover",
    aliases: ["toyota-corolla-cross"],
    badge: "В наличии",
    title: "Toyota Crown Crossover",
    trim: "G Advanced",
    year: "2022",
    engine: "186 л.с.",
    mileage: "24 850 км",
    gearbox: "e-CVT",
    drive: "2WD",
    volume: "2490 см3",
    fuel: "Гибрид",
    power: "186 л.с.",
    status: "В продаже",
    location: "Япония",
    priceChina: "¥ 29 000 000",
    priceLocal: "2 200 000 ₽",
    accent: "from-[#edf3f9] to-[#f8fbfd]",
    publishedAt: "22.04.2026",
    specialistComment:
      "Автомобиль в аккуратном состоянии, с чистым салоном и спокойной историей эксплуатации. Хорошо подходит для быстрой доставки под ключ и дальнейшей городской эксплуатации.",
    description:
      "Toyota Crown Crossover сочетает высокий дорожный просвет, современный салон и мягкую гибридную настройку. Страницу сделали в более спокойной и минималистичной подаче, чтобы автомобиль смотрелся чище и статуснее.",
    bullets: [
      "Авто проверено перед публикацией и готово к выкупу.",
      "Цена пересчитывается под курс и логистику на дату запроса.",
      "Оформление, доставка и сопровождение берём на себя.",
    ],
    images: [
      { src: crownToyotaImage, alt: "Toyota Crown Crossover rear view" },
      { src: genesisImage, alt: "Toyota Crown Crossover front view" },
      { src: voyahImage, alt: "Toyota Crown Crossover interior preview" },
      { src: crownToyotaImage, alt: "Toyota Crown Crossover detail view" },
    ],
  },
  {
    id: "genesis-gv70",
    slug: "genesis-gv70",
    aliases: ["hyundai-elantra"],
    badge: "В пути",
    title: "Genesis GV70",
    trim: "Luxury",
    year: "2023",
    engine: "249 л.с.",
    mileage: "18 240 км",
    gearbox: "AT",
    drive: "AWD",
    volume: "2497 см3",
    fuel: "Бензин",
    power: "249 л.с.",
    status: "В пути",
    location: "Корея",
    priceChina: "¥ 34 800 000",
    priceLocal: "3 840 000 ₽",
    accent: "from-[#eff4f9] to-[#fbfcfe]",
    publishedAt: "21.04.2026",
    specialistComment:
      "Премиальная комплектация с опрятным кузовом и хорошим оснащением. Подходит для клиента, которому важны комфорт, шумоизоляция и богатая базовая комплектация.",
    description:
      "Genesis GV70 рассчитан на тех, кто ищет более статусный кроссовер с мягкой посадкой, выразительным экстерьером и современным набором опций.",
    bullets: [
      "Проверяем историю и состояние до выкупа.",
      "Подбираем маршрут доставки под бюджет и сроки.",
      "Помогаем с документами и постановкой на учёт.",
    ],
    images: [
      { src: genesisImage, alt: "Genesis GV70 front angle" },
      { src: crownToyotaImage, alt: "Genesis GV70 rear angle" },
      { src: voyahImage, alt: "Genesis GV70 cabin detail" },
      { src: genesisImage, alt: "Genesis GV70 side profile" },
    ],
  },
  {
    id: "voyah-free",
    slug: "voyah-free",
    aliases: ["volkswagen-tayron-black", "volkswagen-tayron-white"],
    badge: "Готов",
    title: "Voyah Free",
    trim: "Flagship",
    year: "2023",
    engine: "489 л.с.",
    mileage: "11 920 км",
    gearbox: "AT",
    drive: "AWD",
    volume: "EV",
    fuel: "Электро",
    power: "489 л.с.",
    status: "В продаже",
    location: "Китай",
    priceChina: "¥ 36 500 000",
    priceLocal: "4 290 000 ₽",
    accent: "from-[#eef3f8] to-[#f9fbfd]",
    publishedAt: "20.04.2026",
    specialistComment:
      "Современный электрокроссовер с эффектным салоном и высоким уровнем оснащения. Хороший вариант для витринного предложения и быстрого показа клиентам.",
    description:
      "Voyah Free подойдёт тем, кому нужен технологичный электрокар с ярким дизайном, просторным интерьером и высоким уровнем комфорта.",
    bullets: [
      "Автомобиль доступен для оперативного бронирования.",
      "Даём прозрачную калькуляцию под ключ без скрытых блоков.",
      "Фото и комплектацию подтверждаем перед оплатой.",
    ],
    images: [
      { src: voyahImage, alt: "Voyah Free front view" },
      { src: genesisImage, alt: "Voyah Free rear view" },
      { src: crownToyotaImage, alt: "Voyah Free interior detail" },
      { src: voyahImage, alt: "Voyah Free side profile" },
    ],
  },
];

export function getCarBySlug(slug) {
  return stockCars.find(
    (car) => car.slug === slug || (car.aliases ?? []).includes(slug)
  );
}

export function getAllCarSlugs() {
  return stockCars.flatMap((car) => [car.slug, ...(car.aliases ?? [])]);
}
