import { connection } from "next/server";
import CatalogSection from "./components/catalog-section";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import StockCarsSection from "./components/stock-cars-section";

export default async function Home() {
  await connection();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CatalogSection />
        <StockCarsSection />
      </main>
    </>
  );
}
