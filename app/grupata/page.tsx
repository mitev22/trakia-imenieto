import type { Metadata } from "next";
import { CornerChrome } from "@/components/chrome";
import { PageHero, RegisterBand, DuskContact, CrossLinks } from "@/components/blocks";
import { copy, media } from "@/template.config";

export const metadata: Metadata = { title: "За групата · Тракия-РМ" };

export default function Page() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <CornerChrome />
        <PageHero
          title={copy.grupata.title}
          video={media.lavenderVideo}
          poster={media.lavenderPoster}
        />
      </div>
      <div className="page-body">
        <div className="prose">
          {copy.grupata.p.map((p) => (
            <p className="r" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
        <div className="founder r">
          <p className="sig serif">{copy.grupata.founder}</p>
          <p className="role">{copy.grupata.founderRole}</p>
        </div>
        <CrossLinks
          items={[
            { href: "/stroitelstvo/", label: "Строителството" },
            { href: "/zemedelie/", label: "Земеделието" },
            { href: "/imoti/", label: "Имотите" },
            { href: "/energia/", label: "Енергията" },
          ]}
        />
      </div>
      <RegisterBand />
      <DuskContact
        title="Едно семейство, пет направления."
        sub="Пишете ни: отговаряме в рамките на един работен ден."
      />
    </main>
  );
}
