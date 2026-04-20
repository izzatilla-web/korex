import Link from "next/link";
import Wrapper from "../wrapper";

const catalogLinks = [
  "Авто из Кореи",
  "Авто из Китая",
  "Авто из Японии",
  "Авто из ОАЭ",
  "Авто в наличии",
];

const companyLinks = [
  "О компании",
  "Отзывы клиентов",
  "Как купить автомобиль",
  "Контакты",
];

const socialLinks = [
  { label: "Telegram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "VK", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f2446] pb-28 pt-14 text-white md:pb-0 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,132,225,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,103,200,0.16),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.35),rgba(255,255,255,0))]" />

      <Wrapper className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-14">
          <div>
            {/* <Link href="#" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Korex logo"
                width={120}
                height={120}
              />
            </Link> */}
            <h2 className="mt-5 max-w-[12ch] text-[32px] font-unbounded uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-[42px]">
              Подберем и доставим автомобиль под ваш запрос
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-white/68 sm:text-[16px]">
              Чистый и понятный процесс покупки автомобиля из Кореи, Китая,
              Японии и ОАЭ. Помогаем от первого запроса до выдачи машины и
              оформления документов.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/8 px-4 text-[14px] font-medium text-white/82 transition hover:bg-white/12 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <FooterGroup title="Каталоги">
              {catalogLinks.map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </FooterGroup>

            <FooterGroup title="Компания">
              {companyLinks.map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </FooterGroup>
          </div>

          <div>
            <FooterGroup title="Контакты">
              <Link
                href="tel:+79098781898"
                className="block text-[28px] font-semibold tracking-[-0.05em] text-white transition hover:text-white/86 sm:text-[34px]"
              >
                +7 (909) 878-18-98
              </Link>
              <Link
                href="mailto:hello@korex.auto"
                className="block text-[15px] text-white/70 transition hover:text-white"
              >
                hello@korex.auto
              </Link>
              <p className="text-[15px] leading-7 text-white/68">
                Владивосток, Москва, Краснодар
                <br />
                Работаем по всей России
              </p>
            </FooterGroup>

            <div className="mt-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/52">
                Режим работы
              </p>
              <p className="mt-3 text-[15px] leading-7 text-white/76">
                Ежедневно с 10:00 до 20:00
                <br />
                Консультации и подбор без лишней спешки
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 py-5 text-[13px] text-white/48 sm:flex-row sm:items-center sm:justify-between md:mt-16 md:pt-6">
          <p>© 2026 Korex. Все права защищены.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="transition hover:text-white/72">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="transition hover:text-white/72">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/50">
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-[15px] text-white/74 transition hover:translate-x-0.5 hover:text-white"
    >
      {children}
    </Link>
  );
}
