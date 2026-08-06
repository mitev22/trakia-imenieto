/**
 * Shared film-language blocks. Server components; motion comes from the global
 * reveal system (.r) and the dedicated client components.
 */
import Link from "next/link";
import { CountUp } from "./count-up";
import { AtomMark } from "./glyphs";
import { nap, register } from "@/template.config";

export function FilmMedia({
  video,
  poster,
  image,
  alt = "",
  marker,
}: {
  video?: string;
  poster?: string;
  image?: string;
  alt?: string;
  marker?: string;
}) {
  return (
    <div className="media r">
      {video ? (
        <video src={video} poster={poster} autoPlay muted loop playsInline />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={alt} />
      )}
      <div className="tint" />
      {marker && <span className="marker">{marker}</span>}
    </div>
  );
}

export function Chapter({
  id,
  media,
  card,
  offset = false,
}: {
  id?: string;
  media: React.ReactNode;
  card: React.ReactNode;
  offset?: boolean;
}) {
  return (
    <section className="chapter" id={id}>
      {media}
      <div className={`card r${offset ? " offset" : ""}`}>{card}</div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  video,
  poster,
  image,
  alt = "",
}: {
  kicker?: string;
  title: string;
  video?: string;
  poster?: string;
  image?: string;
  alt?: string;
}) {
  return (
    <header className="phero">
      {video ? (
        <video src={video} poster={poster} autoPlay muted loop playsInline />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={alt} />
      )}
      <div className="scrim" />
      <div className="t">
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export function RegisterBand() {
  return (
    <section className="register" aria-label="Извадка от портфолиото">
      <h2 className="serif r" style={{ fontSize: 24 }}>
        Из портфолиото на строителното дружество
      </h2>
      <div className="cells">
        {register.map((c) => (
          <div className="cell r" key={c.label}>
            <div className="n">
              <CountUp value={c.value} plain={!!c.plain} />
              {"unit" in c && c.unit ? <span className="unit"> {c.unit}</span> : null}
            </div>
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DuskContact({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="dusk-cta" id="kontakt">
      <AtomMark className="mark" />
      <h2 className="r">{title}</h2>
      <p className="sub r">{sub}</p>
      <div className="nap r">
        <b>{nap.phoneDisplay}</b>
        {nap.address} · {nap.email}
      </div>
      <a className="btn-est r" href={`mailto:${nap.email}`}>
        Свържете се с нас
      </a>
    </section>
  );
}

export function CrossLinks({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="xlink" aria-label="Още от групата">
      {items.map((i) => (
        <Link key={i.href} className="more-link" href={i.href}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
