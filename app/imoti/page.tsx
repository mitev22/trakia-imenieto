import type { Metadata } from "next";
import { CornerChrome } from "@/components/chrome";
import { PageHero, DuskContact, CrossLinks } from "@/components/blocks";
import { copy, media } from "@/template.config";

export const metadata: Metadata = { title: "Недвижими имоти · Тракия-РМ" };

export default function Page() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <CornerChrome />
        <PageHero
          title="Недвижими имоти с потенциал за дългосрочно развитие"
          image={media.harvestTopdown}
          alt="Земеделски земи на групата, въздушна снимка"
        />
      </div>
      <div className="page-body">
        <div className="prose">
          {copy.imoti.p.map((p) => (
            <p className="r" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
        <div className="duo" style={{ margin: "44px 0 0", padding: 0 }}>
          <div className="r">
            <div className="ph-slot">
              <span>индустриален имот · снимка предстои</span>
            </div>
          </div>
          <div className="r">
            <div className="ph-slot">
              <span>жилищен проект · снимка предстои</span>
            </div>
          </div>
        </div>
        <CrossLinks
          items={[
            { href: "/stroitelstvo/", label: "Строителството" },
            { href: "/zemedelie/", label: "Земеделието" },
          ]}
        />
      </div>
      <DuskContact
        title="Търсите партньор за вашия имот?"
        sub="Пишете ни: отговаряме в рамките на един работен ден."
      />
    </main>
  );
}
