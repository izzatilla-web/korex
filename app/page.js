import { connection } from "next/server";
import CatalogSection from "./components/catalog-section";
import Footer from "./components/footer";
import FaqSection from "./components/faq-section";
import Hero from "./components/hero";
import MobileBottomBar from "./components/mobile-bottom-bar";
import Navbar from "./components/navbar";
import PurchaseStepsSection from "./components/purchase-steps-section";
import ReviewsSection from "./components/reviews-section";
import StockCarsSection from "./components/stock-cars-section";

export default async function Home() {
  await connection();

  return (
    <>
      <Navbar />
      <main id="home" >
        <Hero />
        <CatalogSection />
        <PurchaseStepsSection />
        <ReviewsSection />
        <StockCarsSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
