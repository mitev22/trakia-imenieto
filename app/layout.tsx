import type { Metadata } from "next";
import { Prata, Onest } from "next/font/google";
import "./globals.css";
import { RevealRoot } from "@/components/reveal";
import { SiteFooter } from "@/components/chrome";
import { brand } from "@/template.config";

const prata = Prata({
  variable: "--font-prata",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: `${brand.name}: семейна група от компании`,
  description:
    "Инфраструктурно строителство, земеделие, недвижими имоти и възобновяема енергия. Пловдив, от 1991 година.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bg" className={`${prata.variable} ${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RevealRoot />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
