import type { Metadata } from "next";
import { CornerChrome } from "@/components/chrome";
import { PageHero, RegisterBand, DuskContact, CrossLinks } from "@/components/blocks";
import { Glyph } from "@/components/glyphs";
import { copy, media } from "@/template.config";

export const metadata: Metadata = { title: "Строителство · Тракия-РМ" };

export default function Page() {
  const s = copy.stroitelstvo;
  return (
    <main>
      <div style={{ position: "relative" }}>
        <CornerChrome />
        <PageHero
          title="Инфраструктурно и индустриално строителство"
          image={media.facility}
          alt="Производствена база на групата"
        />
      </div>
      <div className="page-body">
        <div className="prose">
          {s.p.map((p) => (
            <p className="r" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
        <h2 className="sec-title r" style={{ marginTop: 44 }}>
          Основни <span className="tint">дейности</span>
        </h2>
        <ul className="acts-list">
          {s.activities.map((a) => (
            <li className="r" key={a.glyph}>
              <Glyph name={a.glyph} className="glyph" />
              <span>{a.text}</span>
            </li>
          ))}
        </ul>
        <h2 className="sec-title r" style={{ marginTop: 44 }}>
          Членства и <span className="tint">сертификация</span>
        </h2>
        <div className="memb-strip r">
          {s.memberships.map((m) => (
            <div className="m" key={m}>
              <b>{m}</b>
              <span>член</span>
            </div>
          ))}
          <div className="m">
            <b>ISO 9001</b>
            <span>сертифицирана система за управление на качеството</span>
          </div>
        </div>
        <CrossLinks
          items={[
            { href: "/grupata/", label: "За групата" },
            { href: "/imoti/", label: "Имотите" },
          ]}
        />
      </div>
      <RegisterBand />
      <DuskContact
        title="Следващият обект може да е вашият."
        sub="Разкажете ни за проекта: отговаряме в рамките на един работен ден."
      />
    </main>
  );
}
