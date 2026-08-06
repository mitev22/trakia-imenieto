import type { Metadata } from "next";
import Link from "next/link";
import { DuskContact, CrossLinks } from "@/components/blocks";
import { copy, media } from "@/template.config";

export const metadata: Metadata = { title: "Възобновяема енергия · Тракия-РМ" };

/* Нарочно по-тих регистър: без филмов герой, каменна страница с една снимка. */
export default function Page() {
  return (
    <main>
      <div className="chrome-top dark-on-light">
        <Link className="chrome-link" href="/">
          Тракия-РМ
        </Link>
        <Link className="chrome-link" href="/kontakti/">
          Контакт
        </Link>
      </div>
      <div className="page-body" style={{ marginTop: 56 }}>
        <h1 className="sec-title r" style={{ fontSize: "clamp(30px, 4.4vw, 50px)", marginTop: 8 }}>
          {copy.energia.title}
        </h1>
        <div className="prose" style={{ marginTop: 22 }}>
          {copy.energia.p.map((p) => (
            <p className="r" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
        <figure className="r" style={{ margin: "36px 0 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.mtPark}
            alt="Фотоволтаичен парк от портфолиото на групата, въздушна снимка"
            style={{ aspectRatio: "16/9", objectFit: "cover", width: "100%" }}
          />
          <figcaption className="kicker" style={{ marginTop: 10 }}>
            фотоволтаичен парк от портфолиото на групата
          </figcaption>
        </figure>
        <CrossLinks
          items={[
            { href: "/grupata/", label: "За групата" },
            { href: "/stroitelstvo/", label: "Строителството" },
          ]}
        />
      </div>
      <DuskContact
        title="Енергия за десетилетия напред."
        sub="За въпроси по направлението: пишете ни."
      />
    </main>
  );
}
