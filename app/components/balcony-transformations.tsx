"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { ArrowRight, ArrowUpRight } from "./arrow-icon";

const balconyConcepts = [
  {
    code: "1501",
    title: "Morning Rail",
    mode: "Daylight concept",
    summary: "A few well-placed lines bring the edge of the balcony to life.",
    features: "Carry the Light · Railing planters · Three-height stand",
    before: "/balcony/balcony-01-before.jpg",
    after: "/balcony/balcony-01-after.jpg",
  },
  {
    code: "1502",
    title: "Breakfast Line",
    mode: "Compact concept",
    summary: "A narrow balcony becomes a useful morning perch without losing circulation.",
    features: "Fold-down ledge · Herb hoops · Railing cradle",
    before: "/balcony/balcony-02-before.jpg",
    after: "/balcony/balcony-02-after.jpg",
  },
  {
    code: "1503",
    title: "The Living Wall",
    mode: "Botanical concept",
    summary: "A blank wall becomes a made-to-measure garden drawn in iron and glass.",
    features: "Custom trellis · Propagation glass · Railing pieces",
    before: "/balcony/balcony-03-before.jpg",
    after: "/balcony/balcony-03-after.jpg",
  },
  {
    code: "1504",
    title: "Evening Perch",
    mode: "Light & living",
    summary: "A quiet corner shaped around the Garden Keeper and a slim place to sit.",
    features: "Garden Keeper · Teak bench · Side table",
    before: "/balcony/balcony-04-before.jpg",
    after: "/balcony/balcony-04-after.jpg",
  },
  {
    code: "1505",
    title: "Monsoon Order",
    mode: "Weather-ready concept",
    summary: "Useful pieces keep rain-day essentials and greenery beautifully ordered.",
    features: "Orbit shelf · Umbrella stand · Rail planters",
    before: "/balcony/balcony-05-before.jpg",
    after: "/balcony/balcony-05-after.jpg",
  },
  {
    code: "1506",
    title: "Carry the Night",
    mode: "Night concept",
    summary: "One illuminated metal line changes the mood without filling the space.",
    features: "Carry the Light · Tiered stands · Rail planters",
    before: "/balcony/balcony-06-before.jpg",
    after: "/balcony/balcony-06-after.jpg",
  },
  {
    code: "1507",
    title: "Keeper After Dark",
    mode: "Night concept",
    summary: "Light and living greenery meet in one sculptural balcony companion.",
    features: "Garden Keeper · Teak bench · Planter cradles",
    before: "/balcony/balcony-07-before.jpg",
    after: "/balcony/balcony-07-after.jpg",
  },
];

export function BalconyTransformations() {
  const [active, setActive] = useState(0);
  const [reveal, setReveal] = useState(50);
  const current = balconyConcepts[active];

  function showConcept(index: number) {
    setActive((index + balconyConcepts.length) % balconyConcepts.length);
    setReveal(50);
  }

  const revealStyle = { "--reveal": `${reveal}%` } as CSSProperties;

  return (
    <section className="balcony-decor" id="balcony" aria-labelledby="balcony-title">
      <div className="balcony-intro scroll-reveal">
        <div>
          <p className="section-number light">05 / Balcony decor</p>
          <h2 id="balcony-title">A little outside.<br /><em>Made your own.</em></h2>
        </div>
        <div className="balcony-intro-copy">
          <p>Even one or two thoughtful pieces can uplift the look of your balcony—adding greenery, a warm pool of light or simply a more beautiful place for everyday things.</p>
          <small>Every concept is customised to the balcony, the way it is used and the amount of space it has to breathe.</small>
        </div>
      </div>

      <div className="balcony-stage scroll-reveal">
        <div className="balcony-reveal" style={revealStyle}>
          <Image
            className="balcony-before"
            src={current.before}
            alt={`${current.title} balcony before Decoline decor`}
            fill
            sizes="(max-width: 620px) 88vw, 90vw"
            quality={88}
            unoptimized
          />
          <div className="balcony-after-mask" aria-hidden="true">
            <Image
              className="balcony-after"
              src={current.after}
              alt=""
              fill
              sizes="(max-width: 620px) 88vw, 90vw"
              quality={88}
              unoptimized
            />
          </div>
          <span className="balcony-state-label balcony-before-label">Before</span>
          <span className="balcony-state-label balcony-after-label">After</span>
          <div className="balcony-divider" aria-hidden="true">
            <span><ArrowRight className="reverse" /><ArrowRight /></span>
          </div>
          <input
            className="balcony-range"
            type="range"
            min="0"
            max="100"
            value={reveal}
            onChange={(event) => setReveal(Number(event.target.value))}
            aria-label={`Reveal the before and after view for ${current.title}`}
          />
        </div>

        <div className="balcony-caption" aria-live="polite">
          <div className="balcony-caption-index">
            <span>#{current.code}</span>
            <small>{current.mode}</small>
          </div>
          <div className="balcony-caption-copy">
            <h3>{current.title}</h3>
            <p>{current.summary}</p>
            <small>{current.features}</small>
          </div>
          <div className="balcony-navigation">
            <button type="button" onClick={() => showConcept(active - 1)} aria-label="Previous balcony concept">
              <ArrowRight className="reverse" />
            </button>
            <span>{String(active + 1).padStart(2, "0")} / {String(balconyConcepts.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => showConcept(active + 1)} aria-label="Next balcony concept">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="balcony-dots" aria-label="Choose a balcony concept">
          {balconyConcepts.map((concept, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => showConcept(index)}
              aria-label={`Show ${concept.title}`}
              aria-current={index === active ? "true" : undefined}
              key={concept.title}
            />
          ))}
        </div>
      </div>

      <div className="balcony-promise scroll-reveal">
        <div>
          <span>Made for your balcony</span>
          <p>Dimensions, mounting and the balance of each piece are adapted to your space.</p>
        </div>
        <div>
          <span>Weather-resistant finish</span>
          <p>Our outdoor pieces receive a weather-resistant coating, made to face rain and scorching sun while keeping their character.</p>
        </div>
        <blockquote>Rain or scorching sun? The metal can take it.<br /><em>Just remember to water the plants.</em></blockquote>
        <a href={`https://wa.me/919326969492?text=${encodeURIComponent(`Hello Rajesh! I wanted to get more details and discuss ideas related to #${current.code} (${current.title} balcony concept).`)}`} target="_blank" rel="noreferrer">
          Discuss your balcony <ArrowUpRight />
        </a>
      </div>

      <p className="balcony-concept-note">Concept visualisations · final combinations, finishes and installation are developed for each balcony</p>
    </section>
  );
}
