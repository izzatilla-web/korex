import SectionPage from "../components/section-page";

export const metadata = {
  title: "Блог | Avtostatus",
};

export default function BlogPage() {
  return (
    <SectionPage
      title="Блог"
      description="Базовая страница блога. Позже сюда можно вывести список статей, фильтры по темам и SEO-контент под органический трафик."
    />
  );
}
