import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import MobileBottomBar from "../../components/mobile-bottom-bar";
import CarDetailPage from "../../../components/car-detail-page";
import { getAllCarSlugs, getCarBySlug, stockCars } from "../../../data/stock-cars";

export async function generateStaticParams() {
  return getAllCarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return {
      title: "Car Not Found | Avtostatus",
    };
  }

  return {
    title: `${car.title} | Avtostatus`,
    description: car.description,
  };
}

export default async function CarDetailsRoute({ params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const similarCars = stockCars.filter(
    (item) => item.slug !== car.slug && !(item.aliases ?? []).includes(slug)
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <CarDetailPage car={car} similarCars={similarCars} />
      <Footer />
      <MobileBottomBar />
    </>
  );
}
