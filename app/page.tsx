const works = [
  {
    src: "/artworks/warli-bell-panel.jpg",
    title: "The Procession",
    category: "Bell panel",
    className: "wide",
  },
  {
    src: "/artworks/botanical-wall-art.jpg",
    title: "Still Growing",
    category: "Wall sculpture",
    className: "tall",
  },
  {
    src: "/artworks/spiral-diya.jpg",
    title: "Quiet Flame",
    category: "Diya holder",
    className: "square",
  },
  {
    src: "/artworks/heart-bells.jpg",
    title: "Two Notes",
    category: "Bell sculpture",
    className: "tall",
  },
  {
    src: "/artworks/heritage-wall-hooks.jpg",
    title: "Seven Keepsakes",
    category: "Wall hooks",
    className: "wide",
  },
  {
    src: "/artworks/peacock-lines.jpg",
    title: "Monsoon Plume",
    category: "Table sculpture",
    className: "square",
  },
];

const categories = [
  ["01", "Wall forms", "Sculptural lines that bring rhythm to open walls."],
  ["02", "Light & ritual", "Diya holders shaped for quiet, everyday ceremony."],
  ["03", "Useful objects", "Hooks, stands and details where function meets form."],
];

export default function Home() {
  return (
    <main>
      <div className="utility-strip">
        <span>✦ Handcrafted in India</span>
        <span>✦ Made to last</span>
        <span>✦ Original designs</span>
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Decoline home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span className="brand-type">DECOLINE</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#collection">Collection</a>
          <a href="#story">Studio</a>
          <a href="#contact">Custom orders</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">
          Enquire <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Handcrafted in Nagpur</p>
          <h1>Handcrafted<br />metal decor for<br /><em>inspired living.</em></h1>
          <p className="hero-note">
            Original metalwork by Rajesh Khadse—shaped slowly by hand,
            made to bring character and calm into everyday spaces.
          </p>
          <a className="hero-button" href="#collection">Explore collections <span>↗</span></a>
        </div>
        <div className="hero-art reveal reveal-delay">
          <div className="hero-image-wrap">
            <img src="/artworks/heritage-wall-hooks.jpg" alt="Hand-forged black metal wall hooks by Rajesh Khadse" />
            <span className="image-index">No. 01 / Wall form</span>
          </div>
          <div className="hero-image-small">
            <img src="/artworks/heart-bells.jpg" alt="Heart-shaped metal wall bells" />
          </div>
          <p className="vertical-note">IRON · FIRE · FORM</p>
        </div>
      </section>

      <section className="collection-strip" aria-label="Shop by collection">
        <div className="strip-title"><span /> <h2>Shop by collection</h2> <span /></div>
        <div className="strip-grid">
          <a href="#collection"><img src="/artworks/heritage-wall-hooks.jpg" alt="Wall hooks" /><strong>Wall hooks</strong><small>Functional sculpture</small></a>
          <a href="#collection"><img src="/artworks/heart-bells.jpg" alt="Bell decor" /><strong>Bell decor</strong><small>Pieces with a gentle chime</small></a>
          <a href="#collection"><img src="/artworks/spiral-diya.jpg" alt="Diya holders" /><strong>Diya holders</strong><small>Light for daily rituals</small></a>
          <a href="#collection"><img src="/artworks/peacock-lines.jpg" alt="Table sculptures" /><strong>Table forms</strong><small>Objects for quiet corners</small></a>
        </div>
      </section>

      <section className="manifesto" aria-label="Studio statement">
        <p>Rooted in Indian craft.</p>
        <p>Reduced to its <em>purest line.</em></p>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected works</p>
            <h2>Forms for living</h2>
          </div>
          <p>Each piece begins as a line, then takes shape through heat, patience and the maker’s hand.</p>
        </div>

        <div className="art-grid">
          {works.map((work, index) => (
            <article className={`art-card ${work.className}`} key={work.src}>
              <div className="art-image">
                <img src={work.src} alt={`${work.title}, ${work.category} by Decoline`} loading={index > 1 ? "lazy" : "eager"} />
                <a href={`mailto:guidelinengp@gmail.com?subject=Enquiry%20about%20${encodeURIComponent(work.title)}`} aria-label={`Enquire about ${work.title}`}>
                  Enquire <span>↗</span>
                </a>
              </div>
              <div className="art-caption">
                <h3>{work.title}</h3>
                <p>{work.category} · Made to order</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="categories" aria-label="Collections">
        {categories.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#contact" aria-label={`Enquire about ${title}`}>↗</a>
          </article>
        ))}
      </section>

      <section className="story" id="story">
        <div className="story-image reveal">
          <img src="/artworks/leaf-wall-diya.jpg" alt="Leaf-shaped handcrafted metal diya holder" />
          <span>Made by hand · Nagpur, India</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span /> The studio</p>
          <h2>A line, a curve,<br />a little <em>soul.</em></h2>
          <p className="lead">
            Decoline is the evolving practice of artist-maker Rajesh Khadse. His work finds elegance in honest materials and familiar forms.
          </p>
          <p>
            Every piece is cut, bent, joined and finished in small batches. Natural variations are not flaws—they are the trace of the hand that made it.
          </p>
          <div className="story-facts">
            <div><strong>Handmade</strong><span>One piece at a time</span></div>
            <div><strong>Original</strong><span>Designed in our studio</span></div>
            <div><strong>Considered</strong><span>Made to live with</span></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow light"><span /> Begin a conversation</p>
        <div className="contact-main">
          <h2>Have a wall<br />in <em>mind?</em></h2>
          <div className="contact-details">
            <p>For available pieces, commissions and collaborations, speak directly with the maker.</p>
            <a href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">guidelinengp@gmail.com <span>↗</span></a>
            <a href="tel:+919326969492">+91 93269 69492 <span>↗</span></a>
            <a className="contact-button" href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20would%20like%20to%20know%20more%20about%20Decoline." target="_blank" rel="noreferrer">
              Start on WhatsApp <span>↗</span>
            </a>
          </div>
        </div>
        <footer>
          <a className="brand brand-footer" href="#top">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span className="brand-type">DECOLINE</span>
          </a>
          <p>Original metalwork by Rajesh Khadse</p>
          <p>© {new Date().getFullYear()} Decoline</p>
        </footer>
      </section>
    </main>
  );
}
