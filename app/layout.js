import { Montserrat, Unbounded } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

export const metadata = {
  title: "Korex",
  description: "SSR starter for Korex project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${montserrat.variable} ${unbounded.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
