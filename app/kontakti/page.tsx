import type { Metadata } from "next";
import { CornerChrome } from "@/components/chrome";
import { PageHero } from "@/components/blocks";
import { AtomMark } from "@/components/glyphs";
import { media, nap } from "@/template.config";

export const metadata: Metadata = { title: "Контакт · Тракия-РМ" };

export default function Page() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <CornerChrome />
        <PageHero
          title="Да поговорим за вашия проект"
          image={media.lavenderClose}
          alt="Лавандулово поле, едър план"
        />
      </div>
      <div className="page-body" style={{ textAlign: "center", paddingBottom: 20 }}>
        <div className="r" style={{ width: 56, height: 56, margin: "0 auto", color: "var(--orange)" }}>
          <AtomMark />
        </div>
        <div className="dusk-cta" style={{ background: "none", color: "inherit", margin: 0, padding: "12px 0 0" }}>
          <div className="nap r" style={{ marginTop: 8 }}>
            <b style={{ color: "var(--navy-deep)" }}>{nap.phoneDisplay}</b>
            {nap.address}
            <br />
            {nap.email}
          </div>
          <a className="btn-est r" href={`mailto:${nap.email}`}>
            Изпратете запитване
          </a>
          <p className="kicker r" style={{ marginTop: 26 }}>
            отговаряме в рамките на един работен ден
          </p>
          <p className="r" style={{ marginTop: 18 }}>
            <a
              className="more-link"
              href="https://maps.google.com/?q=ул. Братя Бъкстон 136, Пловдив"
              target="_blank"
              rel="noreferrer"
            >
              Отворете адреса в Google Maps
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
