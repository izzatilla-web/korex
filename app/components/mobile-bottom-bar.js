"use client";

import Link from "next/link";
import { CarFront, Grid2X2, House, PhoneCall, Route } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    id: "#catalogs",
    label: "Каталог",
    icon: Grid2X2,
    href: "#catalogs",
    position: "side",
  },
  {
    id: "#steps",
    label: "Этапы",
    icon: Route,
    href: "#steps",
    position: "side",
  },
  {
    id: "#home",
    label: "Главная",
    icon: House,
    href: "#home",
    position: "center",
  },
  {
    id: "#stock",
    label: "В наличии",
    icon: CarFront,
    href: "#stock",
    position: "side",
  },
  {
    id: "tel",
    label: "Звонок",
    icon: PhoneCall,
    href: "tel:+821099260978",
    position: "side",
  },
];

export default function MobileBottomBar() {
  const [activeId, setActiveId] = useState("#home");

  useEffect(() => {
    function syncHash() {
      setActiveId(window.location.hash || "#home");
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] px-3 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto mx-auto max-w-[430px]">
        <div className="relative rounded-[30px] border border-white/70 bg-[rgba(255,255,255,0.64)] px-3 pb-2 pt-2 shadow-[0_18px_50px_rgba(17,39,76,0.14)] backdrop-blur-2xl">
          <div className="grid grid-cols-5 items-end gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isCenter = item.position === "center";
              const isActive =
                item.id === "tel" ? false : activeId === item.id || (activeId === "" && item.id === "#home");

              const content = (
                <>
                  <span
                    className={[
                      "inline-flex items-center justify-center transition duration-300",
                      isCenter
                        ? [
                            "h-14 w-14 rounded-full border border-white/80 bg-[#2d67c8] text-white shadow-[0_16px_38px_rgba(45,103,200,0.34)]",
                            isActive ? "scale-100" : "scale-[0.98]",
                          ].join(" ")
                        : [
                            "h-10 w-10 rounded-2xl",
                            isActive
                              ? "bg-[#edf4ff] text-[#2d67c8]"
                              : "bg-transparent text-[#6c809f]",
                          ].join(" "),
                    ].join(" ")}
                  >
                    <Icon className={isCenter ? "h-6 w-6" : "h-5 w-5"} strokeWidth={2.1} />
                  </span>

                  <span
                    className={[
                      "mt-1 text-center text-[10px] font-semibold tracking-[-0.01em] transition duration-300",
                      isCenter
                        ? "text-[#20457f]"
                        : isActive
                        ? "text-[#20457f]"
                        : "text-[#7d90ab]",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </>
              );

              if (item.id === "tel") {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex flex-col items-center justify-end pb-1"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveId(item.id)}
                  className={[
                    "flex flex-col items-center justify-end transition duration-300 active:scale-[0.97]",
                    isCenter ? "-mt-7 pb-0" : "pb-1",
                  ].join(" ")}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
