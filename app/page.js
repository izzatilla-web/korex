import { connection } from "next/server";
import CatalogSection from "./components/catalog-section";
import Hero from "./components/hero";
import MobileBottomBar from "./components/mobile-bottom-bar";
import Navbar from "./components/navbar";
import PurchaseStepsSection from "./components/purchase-steps-section";
import StockCarsSection from "./components/stock-cars-section";

export default async function Home() {
  await connection();

  return (
    <>
      <Navbar />
      <main id="home" className="pb-28 md:pb-0">
        <Hero />
        <CatalogSection />
        <PurchaseStepsSection />
        <StockCarsSection />
      </main>
      <MobileBottomBar />
    </>
  );
}
