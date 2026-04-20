"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RequestModal from "./request-modal";
import Wrapper from "../wrapper";

const topLinks = [
  "О компании",
  "Калькуляторы",
  "Отзывы",
  "Погрузки",
  "Партнерам",
  "Блог",
];

const mainLinks = [
  "Авто из Кореи",
  "Авто из Китая",
  "Авто из Японии",
  "Авто из ОАЭ",
  "Авто в наличии",
];

const socialLinks = [
  { label: "Telegram", href: "#", icon: <TelegramIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "VK", href: "#", icon: <VkIcon /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <>
      <header className="w-full font-sans">
        <div className="bg-[#00437c] text-white">
          <Wrapper className="flex w-full items-center justify-between gap-6 py-2.5">
            <div className="hidden items-center gap-2 text-[13px] font-medium lg:flex">
              <GlobeIcon />
              <span>Русский</span>
              <ChevronDownIcon />
            </div>

            <nav className="hidden items-center gap-6 text-[13px] font-medium text-white/90 lg:flex xl:gap-10">
              {topLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
          
            </nav>

            <div className="hidden lg:block">
              <Link
                href="tel:+79098781898"
                className="block text-[18px] font-semibold leading-none tracking-[-0.04em] text-[#1a2230] lg:text-[20px]"
              >
                +7 (909) 878-18-98
              </Link>
            </div>

            <div className="flex lg:min-h-14 w-full items-center justify-between lg:hidden">
              <div className="flex items-center gap-2 text-sm font-medium">
                <GlobeIcon />
                <span>Русский</span>
              </div>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8"
              >
                <MenuIcon open={isOpen} />
              </button>
            </div>
          </Wrapper>
        </div>

        <div className="border-b border-black/6 bg-white">
          <Wrapper className="flex w-full items-center justify-between gap-4 py-4 lg:py-2">
            <Link href="#" className="shrink-0">
              <Image
                src="/avtostatus_logo.png"
                alt="Avtostatus logo"
                width={120}
                height={120}
              />
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex xl:gap-10">
              {mainLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={[
                    "text-[13px] font-semibold tracking-[-0.02em] text-[#1c2430] transition hover:text-[#b14d2c]",
                    index === 0 ? "text-[#b14d2c]" : "",
                  ].join(" ")}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 lg:gap-4">
              <button
                type="button"
                onClick={() => setIsRequestOpen(true)}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2d67c8] px-4 py-2 text-[14px] font-semibold tracking-[-0.03em] text-white transition hover:bg-[#245ab3] sm:min-h-12 sm:px-6 sm:text-[15px]"
              >
                Оставить заявку
              </button>
            </div>
          </Wrapper>
        </div>

        {isOpen ? (
          <div className="border-b border-slate-200 bg-white xl:hidden">
            <Wrapper className="flex w-full flex-col gap-6 py-6">
              <div className="grid gap-3">
                {mainLinks.map((item, index) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className={[
                      "rounded-2xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-900 transition hover:border-[#b14d2c] hover:text-[#b14d2c]",
                      index === 0
                        ? "border-[#e6c9bc] bg-[#fff8f5] text-[#b14d2c]"
                        : "",
                    ].join(" ")}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {topLinks.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-slate-200 pt-5">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 rounded-[28px] bg-slate-50 px-4 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#31384a] text-white">
                    <PhoneIcon />
                  </div>
                  <div>
                    <Link
                      href="tel:+79098781898"
                      className="block text-lg font-bold tracking-[-0.04em] text-slate-900"
                    >
                      +7 (909) 878-18-98
                    </Link>
                    <span className="block text-sm text-[#00437c]">
                      Обратный звонок
                    </span>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        ) : null}
      </header>

      <RequestModal
        open={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
      />
    </>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current">
      <path
        d="m5 7 5 6 5-6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M7.8 4.5h2.4l1.2 4-1.5 1.5a16 16 0 0 0 4 4l1.5-1.5 4 1.2v2.4a1.6 1.6 0 0 1-1.6 1.6C10.4 17.7 6.3 13.6 6.3 8.1A1.6 1.6 0 0 1 7.8 6.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M19.7 5.3 17 18.2c-.2.9-.7 1.1-1.5.7l-4.1-3-2 2c-.2.2-.4.4-.8.4l.3-4.2 7.7-6.9c.3-.3-.1-.4-.5-.2l-9.6 6-4.1-1.3c-.9-.3-.9-.9.2-1.3L18 4.4c.8-.3 1.5.2 1.3.9Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.2 8.4a2.9 2.9 0 0 0-2-2C17.4 6 12 6 12 6s-5.4 0-7.2.4a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2.4 12a30 30 0 0 0 .4 3.6 2.9 2.9 0 0 0 2 2c1.8.4 7.2.4 7.2.4s5.4 0 7.2-.4a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .4-3.6 30 30 0 0 0-.4-3.6ZM10.2 15.6V8.4l5.6 3.6-5.6 3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
      <rect x="4" y="4" width="16" height="16" rx="4.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.7" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M4 7.8h2.6c.1 3.9 1.8 6.2 2.7 6.7.7.4 1-.1 1-.7V7.8h2.4v3.4c0 1.1.4 1.3.7 1.3.9 0 3.1-2.3 3.2-4.7H19c-.4 2.8-3.7 5-3.7 5s3.5 1.8 4.2 5.2H17c-.2-1.1-1.4-3.8-2.7-3.8-.8 0-.9.5-.9 1.2V18h-1.4C7.8 18 5.1 13.8 4 7.8Z" />
    </svg>
  );
}

function MenuIcon({ open, dark }) {
  const colorClass = dark ? "stroke-slate-900" : "stroke-white";

  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 fill-none ${colorClass}`}>
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
