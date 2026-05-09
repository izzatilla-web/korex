import SectionPage from "../components/section-page";

export const metadata = {
  title: "Калькуляторы | Avtostatus",
};

export default function CalculatorsPage() {
  return (
    <SectionPage
      title="Калькуляторы"
      description="Заготовка под калькуляторы стоимости, таможни, доставки или итогового бюджета. Route готов, дальше можно подключить логику расчета."
    />
  );
}
