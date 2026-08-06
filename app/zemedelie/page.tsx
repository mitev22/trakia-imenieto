import type { Metadata } from "next";
import { CornerChrome } from "@/components/chrome";
import { PageHero, Chapter, FilmMedia, DuskContact, CrossLinks } from "@/components/blocks";
import { copy, media } from "@/template.config";

export const metadata: Metadata = { title: "Земеделие · Тракия-РМ" };

export default function Page() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <CornerChrome />
        <PageHero
          title="Земеделие: с грижа към земята и бъдещите поколения"
          video={media.rosesVideo}
          poster={media.rosesPoster}
        />
      </div>
      <div className="page-body">
        <div className="prose">
          {copy.zemedelie.p.map((p) => (
            <p className="r" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
      </div>
      <Chapter
        media={
          <FilmMedia
            video={media.lavenderVideo}
            poster={media.lavenderPoster}
            marker="лавандулова жътва в стопанството"
          />
        }
        card={
          <>
            <h2 className="sec-title">
              Роза, лавандула и <span className="tint">зърно</span>
            </h2>
            <p>
              Стопанствата на групата са в землищата на с. Момино и с. Съединение, Пловдивско.
              Продукцията преминава през собствена преработка на място.
            </p>
          </>
        }
      />
      <div className="page-body">
        <CrossLinks
          items={[
            { href: "/grupata/", label: "За групата" },
            { href: "/imoti/", label: "Земеделските имоти" },
          ]}
        />
      </div>
      <DuskContact
        title="Земята работи всеки ден."
        sub="За партньорства в земеделието: пишете ни."
      />
    </main>
  );
}
