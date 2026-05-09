import SectionPage from "../components/section-page";

export const metadata = {
  title: "Авто в наличии | Avtostatus",
};

export default function CarsInStockPage() {
  return (
    <SectionPage
      title="Авто в наличии"
      description="Страница для автомобилей, которые уже доступны. Здесь удобно разместить текущий склад, быстрые фильтры и CTA на покупку."
    />
  );
}
