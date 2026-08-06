import Link from "next/link";
import { CornerChrome } from "@/components/chrome";
import { CreditsBand } from "@/components/credits-band";
import { Chapter, FilmMedia, RegisterBand, DuskContact } from "@/components/blocks";
import { brand, copy, media } from "@/template.config";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <video src={media.lavenderVideo} poster={media.lavenderPoster} autoPlay muted loop playsInline />
        <div className="scrim" />
        <CornerChrome />
        <div className="c">
          <h1>{brand.name}</h1>
          <p className="est">{brand.tagline}</p>
          <div className="pipe">
            <span>Земя</span>
            <span>Строителство</span>
            <span>Енергия</span>
            <span>Имоти</span>
          </div>
        </div>
        <div className="lead">
          <p>{copy.grupata.p[0]}</p>
        </div>
      </header>

      <section className="band" id="grupata">
        <div className="band-grid">
          <div className="sticky-col r">
            <h2 className="sec-title">
              Семейна група <span className="tint">от компании</span>
            </h2>
            <div className="founder">
              <p className="sig">{copy.grupata.founder}</p>
              <p className="role">{copy.grupata.founderRole}</p>
            </div>
          </div>
          <div className="prose">
            {copy.grupata.p.map((p) => (
              <p className="r" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
            <p className="r">
              <Link className="more-link" href="/grupata/">
                Повече за групата
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Chapter
        id="stroitelstvo"
        media={
          <FilmMedia
            image={media.facility}
            alt="Производствена база на групата"
            marker="инфраструктурно и индустриално строителство"
          />
        }
        card={
          <>
            <h2 className="sec-title">
              „Тракия-РМ” ЕООД: <span className="tint">основите на семейния бизнес</span>
            </h2>
            {copy.stroitelstvo.p.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <Link className="more-link" href="/stroitelstvo/">
              Към строителството
            </Link>
          </>
        }
      />

      <CreditsBand />

      <RegisterBand />

      <Chapter
        id="zemedelie"
        offset
        media={
          <FilmMedia
            video={media.rosesVideo}
            poster={media.rosesPoster}
            marker="земеделие · розобер в стопанството"
          />
        }
        card={
          <>
            <h2 className="sec-title">
              Земеделие: <span className="tint">естественото продължение</span>
            </h2>
            {copy.zemedelie.p.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <Link className="more-link" href="/zemedelie/">
              Към земеделието
            </Link>
          </>
        }
      />

      <section className="duo" id="imoti">
        <div className="r">
          <h2 className="sec-title">
            Недвижими имоти <span className="tint">с хоризонт</span>
          </h2>
          {copy.imoti.p.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <Link className="more-link" href="/imoti/">
            Към имотите
          </Link>
        </div>
        <div className="r">
          <div className="ph-slot">
            <span>обект от портфолиото · снимка предстои</span>
          </div>
        </div>
      </section>

      <section className="quiet" id="energia">
        <div className="rule r">
          <span>възобновяема енергия</span>
        </div>
        {copy.energia.p.map((p) => (
          <p className="r" key={p.slice(0, 24)}>
            {p}
          </p>
        ))}
        <p className="r" style={{ marginTop: 14 }}>
          <Link className="more-link" href="/energia/">
            Повече за направлението
          </Link>
        </p>
      </section>

      <DuskContact
        title="Имението работи. Заповядайте."
        sub="Разкажете ни за вашия проект: отговаряме в рамките на един работен ден."
      />
    </main>
  );
}
