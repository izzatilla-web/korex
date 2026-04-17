import { connection } from "next/server";
import CatalogSection from "./components/catalog-section";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default async function Home() {
  await connection();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CatalogSection />
      </main>
    </>
  );
}
