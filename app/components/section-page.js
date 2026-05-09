import Footer from "./footer";
import MobileBottomBar from "./mobile-bottom-bar";
import Navbar from "./navbar";
import Wrapper from "../wrapper";

export default function SectionPage({ title, description }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_38%,#f8fbff_100%)] pb-20 pt-10">
        <Wrapper>
          <section className="overflow-hidden rounded-[36px] border border-[#dbe7f7] bg-white px-6 py-10 shadow-[0_24px_80px_rgba(15,36,70,0.08)] sm:px-8 sm:py-14 lg:px-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2d67c8]">
              Korex
            </p>
            <h1 className="mt-4 max-w-[12ch] text-[34px] font-unbounded uppercase leading-[0.95] tracking-[-0.06em] text-[#10213d] sm:text-[42px] lg:text-[54px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[720px] text-[16px] leading-8 text-[#51627f] sm:text-[18px]">
              {description}
            </p>
            <div className="mt-10 rounded-[28px] bg-[#f4f8fe] px-5 py-5 text-[15px] leading-7 text-[#5d6b82] sm:px-6">
              Kontent keyin shu sahifa ichiga alohida to‘ldiriladi. Hozir route va
              page fayl tayyor holatda qo‘shildi.
            </div>
          </section>
        </Wrapper>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
