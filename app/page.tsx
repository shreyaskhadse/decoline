import { SiteHeader } from "./components/site-header";
import { ArrowDown, ArrowRight, ArrowUpRight } from "./components/arrow-icon";
import { GalleryLightbox } from "./components/gallery-lightbox";

const works = [
  { src: "/concepts/flock-in-flight.jpg", title: "Flock in Flight", category: "Connected wall sculpture", shape: "landscape" },
  { src: "/concepts/sculptural-wall-sconce.jpg", title: "Carry the Light", category: "Sculptural wall sconce", shape: "portrait" },
  { src: "/concepts/opal-table-lamp.jpg", title: "Held Glow", category: "Opal glass table lamp", shape: "square" },
  { src: "/concepts/propagation-frame.jpg", title: "Root & Rise", category: "Glass propagation frame", shape: "portrait" },
  { src: "/concepts/mug-drying-rack.jpg", title: "Morning Order", category: "Mug display & drying rack", shape: "landscape" },
  { src: "/concepts/wine-display-rack.jpg", title: "Four Bottles", category: "Wine & stemware stand", shape: "square" },
];

const collections = [
  { title: "Light & atmosphere", note: "Metal forms that carry a softer glow", image: "/concepts/sculptural-wall-sconce.jpg" },
  { title: "Living with plants", note: "Glass, green and hand-forged line", image: "/concepts/propagation-frame.jpg" },
  { title: "Useful everyday", note: "Quiet order for the objects we use", image: "/concepts/mug-drying-rack.jpg" },
];

const conceptWorks = [
  { src: "/concepts/towel-loop.jpg", title: "The Quiet Loop", category: "Basin towel holder" },
  { src: "/concepts/plant-pedestal-set.jpg", title: "Three Heights", category: "Nesting plant pedestals" },
  { src: "/concepts/serving-stand.jpg", title: "At the Table", category: "Two-tier serving stand" },
  { src: "/concepts/key-crescent.jpg", title: "Homecoming", category: "Entryway key keeper" },
  { src: "/concepts/umbrella-stand.jpg", title: "After Rain", category: "Umbrella & cane stand" },
  { src: "/concepts/candle-incense-arc.jpg", title: "Evening Arc", category: "Candle & incense stand" },
  { src: "/concepts/wall-planter.jpg", title: "Up the Wall", category: "Wall planter & trellis" },
  { src: "/concepts/jewellery-valet.jpg", title: "Small Rituals", category: "Jewellery valet" },
  { src: "/concepts/cookbook-stand.jpg", title: "Open Page", category: "Cookbook & tablet stand" },
];

export default function Home() {
  return (
    <main id="top">
      <div className="utility-bar">
        <span>Handcrafted in Nagpur</span>
        <span>Original metalwork</span>
        <span>Made slowly. Made to last.</span>
      </div>

      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-background" src="/hero-editorial-v3.jpg" alt="Decoline botanical metal wall sculpture holding a glass propagation tube and living plant" />
        <div className="hero-shade" />
        <div className="hero-copy intro-reveal">
          <p className="kicker"><span /> Contemporary craft from India</p>
          <h1 id="hero-title">Objects with<br /><em>presence.</em></h1>
          <p>Original metal art by Rajesh Khadse—drawn in iron, shaped by hand and made for spaces with a story.</p>
          <a className="primary-button" href="#collection">View the collection <ArrowUpRight /></a>
        </div>
        <div className="hero-index">
          <span>Featured work</span>
          <strong>Still Growing</strong>
          <small>Wall sculpture · No. 02</small>
        </div>
        <a className="scroll-cue" href="#introduction" aria-label="Scroll to introduction">Scroll <ArrowDown /></a>
      </section>

      <section className="introduction scroll-reveal" id="introduction">
        <p className="section-number">01 / The practice</p>
        <div>
          <h2>Indian craft,<br />in a quieter <em>language.</em></h2>
          <p className="intro-copy">Decoline brings an artist’s eye to everyday metalwork. Familiar curves and folk memories are reduced into clean silhouettes—honest, tactile and distinctly handmade.</p>
        </div>
        <div className="studio-details">
          <span><strong>Material</strong>Iron & brass</span>
          <span><strong>Origin</strong>Nagpur, India</span>
          <span><strong>Method</strong>Made by hand</span>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading scroll-reveal">
          <div><p className="section-number">02 / Signature directions</p><h2>Forms for <em>living.</em></h2></div>
          <p>Lighting, wall forms and useful objects—each developed to order, with the small variations that are the quiet signature of the maker.</p>
        </div>

        <div className="art-grid">
          {works.map((work, index) => (
            <article className={`art-card ${work.shape} scroll-reveal`} key={work.src}>
              <div className="art-image">
                <img data-expandable src={work.src} alt={`${work.title}, handcrafted ${work.category.toLowerCase()} by Decoline`} loading={index > 1 ? "lazy" : "eager"} />
                <span className="work-number">0{index + 1}</span>
                <a href={`mailto:guidelinengp@gmail.com?subject=Enquiry%20about%20${encodeURIComponent(work.title)}`}>Ask about this piece <ArrowUpRight /></a>
              </div>
              <div className="art-caption"><div><h3>{work.title}</h3><p>{work.category}</p></div><span>Made to order</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-image scroll-reveal"><img data-expandable src="/concepts/flock-in-flight.jpg" alt="Connected blackened-iron flock sculpture flowing across a warm wall" /></div>
        <div className="statement-copy scroll-reveal">
          <p className="section-number light">03 / A living tradition</p>
          <blockquote>“One line becomes<br />a sense of movement.”</blockquote>
          <p>Folk memory, birds in flight, garden forms and the rhythm of daily life find their way into each piece—not as decoration, but as feeling.</p>
          <a href="#studio">Meet the maker <ArrowRight /></a>
        </div>
      </section>

      <section className="collections-list" aria-label="Collections">
        {collections.map((item, index) => (
          <a href="#contact" className="collection-row" key={item.title}>
            <span className="row-number">0{index + 1}</span>
            <img data-expandable src={item.image} alt={`${item.title} by Decoline`} />
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <span className="row-arrow"><ArrowUpRight /></span>
          </a>
        ))}
      </section>

      <section className="concepts" id="ideas">
        <div className="concepts-intro scroll-reveal">
          <div>
            <p className="section-number">04 / New directions</p>
            <h2>More forms,<br /><em>still unfolding.</em></h2>
          </div>
          <div className="concepts-note">
            <p>Beyond the signature pieces, these explorations imagine Decoline at the basin, beside the door, on the dining table and among living plants.</p>
            <small>Concept visualisations · final forms are developed and made to order</small>
          </div>
        </div>

        <div className="concept-grid">
          {conceptWorks.map((concept, index) => (
            <article className="concept-card scroll-reveal" key={concept.src}>
              <a href={`mailto:guidelinengp@gmail.com?subject=Custom%20Decoline%20idea%20inspired%20by%20${encodeURIComponent(concept.title)}`} className="concept-image">
                <img data-expandable src={concept.src} alt={`${concept.title} — ${concept.category.toLowerCase()} concept for Decoline`} loading="lazy" />
                <span>Discuss this idea <ArrowUpRight /></span>
              </a>
              <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{concept.title}</h3><p>{concept.category}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="craft-story" id="craft">
        <div className="craft-lead-image scroll-reveal">
          <img data-expandable src="/story/bending-iron.jpg" alt="Illustrative close-up of an artisan patiently forming a curve in iron" loading="lazy" />
          <span>Heat · Bend · Consider · Repeat</span>
        </div>
        <div className="craft-copy scroll-reveal">
          <p className="section-number light">05 / Hand & mind</p>
          <h2>Made slowly.<br /><em>Thought through.</em></h2>
          <p className="craft-lead">Every piece begins as an idea and a length of metal.</p>
          <p>We measure, heat, bend, join and finish by hand—returning to the line until it feels balanced. Time is not something we remove from the process; it is what gives the object its character.</p>
          <blockquote>Patience in the curve.<br />Care in every joint.<br />A little of the maker in every piece.</blockquote>
        </div>
        <figure className="craft-detail craft-detail-one scroll-reveal">
          <img data-expandable src="/story/hammering-brass.jpg" alt="Illustrative close-up of a brass detail being finished by hand" loading="lazy" />
          <figcaption>Small marks become the surface.</figcaption>
        </figure>
        <figure className="craft-detail craft-detail-two scroll-reveal">
          <img data-expandable src="/story/welding-curves.jpg" alt="Illustrative close-up of curved iron sections being carefully joined" loading="lazy" />
          <figcaption>Separate lines become one form.</figcaption>
        </figure>
        <p className="story-note">Workshop imagery is illustrative of the handcrafted process.</p>
      </section>

      <section className="custom-work" id="custom">
        <div className="custom-image scroll-reveal">
          <img data-expandable src="/concepts/custom-nameplate-khadse.jpg" alt="Custom forged metal letter K and KHADSE family name beside a home entrance" loading="lazy" />
          <span>Letters · Names · House numbers · Personal symbols</span>
        </div>
        <div className="custom-copy scroll-reveal">
          <p className="section-number">06 / Custom-made for you</p>
          <h2>Your idea,<br /><em>drawn in metal.</em></h2>
          <p className="custom-lead">We welcome custom orders—and ideas that do not fit neatly into a catalogue.</p>
          <p>Bring us a letter, a family name, a house number, a rough sketch, an empty wall or simply a problem you would like a beautiful object to solve. Rajesh will discuss the use, size, finish and installation with you before shaping it by hand.</p>
          <div className="custom-steps" aria-label="Custom order process">
            <span><strong>01</strong>Share the idea</span>
            <span><strong>02</strong>Shape the details</span>
            <span><strong>03</strong>Made for your space</span>
          </div>
          <a className="custom-button" href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20have%20an%20idea%20for%20a%20custom%20Decoline%20piece%20and%20would%20like%20to%20discuss%20it." target="_blank" rel="noreferrer">Discuss a custom idea <ArrowUpRight /></a>
        </div>
      </section>

      <section className="packaging" id="gifting">
        <div className="packaging-heading scroll-reveal">
          <div>
            <p className="section-number">07 / Gifting</p>
            <h2>A gift for now.<br /><em>An object for life.</em></h2>
          </div>
          <div>
            <p>Metal remembers. A Decoline piece is intended to travel from home to home and gather stories as it goes. Its presentation should carry the same long view.</p>
            <span>Gift-ready · Protective · Considered</span>
          </div>
        </div>
        <div className="packaging-gallery">
          <figure className="packaging-main scroll-reveal">
            <img data-expandable src="/packaging/gift-box-open.jpg" alt="Generated Decoline gift box concept with natural paper protection and a handcrafted metal object" loading="lazy" />
            <figcaption>Made to be opened slowly—and kept long after.</figcaption>
          </figure>
          <figure className="packaging-small scroll-reveal">
            <img data-expandable src="/packaging/eco-packaging-set.jpg" alt="Generated recyclable and reusable Decoline packaging concept" loading="lazy" />
            <figcaption>Paper, fibre, cotton and a reusable keepsake box.</figcaption>
          </figure>
          <figure className="packaging-wide scroll-reveal">
            <img data-expandable src="/packaging/unboxing.jpg" alt="Generated human unboxing moment for a Decoline handcrafted gift" loading="lazy" />
            <figcaption>A personal object deserves a personal arrival.</figcaption>
          </figure>
        </div>
        <div className="packaging-values scroll-reveal">
          <span><strong>01</strong><b>Reusable</b><small>A keepsake box with a life beyond delivery.</small></span>
          <span><strong>02</strong><b>Plastic-light</b><small>Natural fibre and paper do the protective work.</small></span>
          <span><strong>03</strong><b>Gift-ready</b><small>Thoughtful enough to give without another layer.</small></span>
          <span><strong>04</strong><b>Made to last</b><small>The piece inside is designed to outlive the moment.</small></span>
        </div>
        <p className="packaging-note">Packaging shown is a design direction and may evolve as the collection develops.</p>
      </section>

      <section className="studio" id="studio">
        <div className="studio-visual scroll-reveal">
          <img data-expandable src="/maker/rajesh-khadse-editorial.jpg" alt="Editorial portrait of Decoline founder and maker Rajesh Khadse" />
          <span>Rajesh Khadse · Founder & maker</span>
        </div>
        <div className="studio-copy scroll-reveal">
          <p className="section-number">08 / The maker</p>
          <h2>Made with<br /><em>attention.</em></h2>
          <p className="lead">Decoline is the evolving studio practice of artist-maker Rajesh Khadse.</p>
          <p>Working from Nagpur, Rajesh turns raw iron into lyrical, useful forms. Every curve is considered, every joint finished by hand, and every piece carries the small irregularities that make it singular.</p>
          <div className="maker-signature"><span>Rajesh Khadse</span><small>Founder & maker, Decoline</small></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-number light">09 / Begin a conversation</p>
        <div className="contact-grid">
          <h2>Start something<br /><em>personal.</em></h2>
          <div className="contact-copy">
            <p>For available works, made-to-order pieces, custom names and completely new ideas, speak directly with Rajesh.</p>
            <a href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">guidelinengp@gmail.com <ArrowUpRight /></a>
            <a href="tel:+919326969492">+91 93269 69492 <ArrowUpRight /></a>
            <a className="whatsapp" href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20would%20like%20to%20know%20more%20about%20Decoline." target="_blank" rel="noreferrer">Start on WhatsApp <ArrowUpRight /></a>
          </div>
        </div>
        <footer>
          <a className="wordmark footer-mark" href="#top"><span className="monogram" aria-hidden="true">D</span><span><strong>DECOLINE</strong><small>HANDCRAFTED METAL ART</small></span></a>
          <p>Original metalwork · Nagpur, India</p>
          <p>© {new Date().getFullYear()} Decoline</p>
        </footer>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20would%20like%20to%20discuss%20a%20Decoline%20piece." target="_blank" rel="noreferrer" aria-label="Connect with Decoline on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.79h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.82 9.82 0 0 1-1.51-5.25A9.87 9.87 0 0 1 12.03 2a9.87 9.87 0 0 1 .01 19.79m8.39-18.18A11.78 11.78 0 0 0 12.04.14C5.52.14.21 5.45.21 11.97c0 2.09.55 4.13 1.6 5.93L.11 24l6.24-1.64a11.84 11.84 0 0 0 5.68 1.45h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.44-8.37" /></svg>
      </a>
      <GalleryLightbox />
    </main>
  );
}
