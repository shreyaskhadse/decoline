const works = [
  { src: "/artworks/warli-bell-panel.jpg", title: "The Procession", category: "Bell panel", shape: "landscape" },
  { src: "/artworks/botanical-wall-art.jpg", title: "Still Growing", category: "Wall sculpture", shape: "portrait" },
  { src: "/artworks/spiral-diya.jpg", title: "Quiet Flame", category: "Diya holder", shape: "square" },
  { src: "/artworks/heart-bells.jpg", title: "Two Notes", category: "Bell sculpture", shape: "portrait" },
  { src: "/artworks/heritage-wall-hooks.jpg", title: "Seven Keepsakes", category: "Wall hooks", shape: "landscape" },
  { src: "/artworks/peacock-lines.jpg", title: "Monsoon Plume", category: "Table sculpture", shape: "square" },
];

const collections = [
  { title: "Wall forms", note: "Sculptural lines for open walls", image: "/artworks/botanical-wall-art.jpg" },
  { title: "Light & ritual", note: "Objects for the everyday ceremony", image: "/artworks/spiral-diya.jpg" },
  { title: "Useful objects", note: "Where purpose meets the hand", image: "/artworks/heritage-wall-hooks.jpg" },
];

export default function Home() {
  return (
    <main id="top">
      <div className="utility-bar">
        <span>Handcrafted in Nagpur</span>
        <span>Original metalwork</span>
        <span>Made slowly. Made to last.</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Decoline home">
          <span className="monogram" aria-hidden="true">D</span>
          <span><strong>DECOLINE</strong><small>HANDCRAFTED METAL ART</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#studio">The maker</a>
          <a href="#contact">Custom work</a>
        </nav>
        <a className="header-enquire" href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">
          Enquire <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-background" src="/hero-editorial-v2.jpg" alt="Decoline botanical metal wall sculpture in a serene contemporary interior" />
        <div className="hero-shade" />
        <div className="hero-copy intro-reveal">
          <p className="kicker"><span /> Contemporary craft from India</p>
          <h1 id="hero-title">Objects with<br /><em>presence.</em></h1>
          <p>Original metal art by Rajesh Khadse—drawn in iron, shaped by hand and made for spaces with a story.</p>
          <a className="primary-button" href="#collection">View the collection <span>↗</span></a>
        </div>
        <div className="hero-index">
          <span>Featured work</span>
          <strong>Still Growing</strong>
          <small>Wall sculpture · No. 02</small>
        </div>
        <a className="scroll-cue" href="#introduction" aria-label="Scroll to introduction">Scroll <span>↓</span></a>
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
          <div><p className="section-number">02 / Selected works</p><h2>Forms for <em>living.</em></h2></div>
          <p>Small-batch and made to order. Each object carries slight variations—the quiet signature of the maker.</p>
        </div>

        <div className="art-grid">
          {works.map((work, index) => (
            <article className={`art-card ${work.shape} scroll-reveal`} key={work.src}>
              <div className="art-image">
                <img src={work.src} alt={`${work.title}, handcrafted ${work.category.toLowerCase()} by Decoline`} loading={index > 1 ? "lazy" : "eager"} />
                <span className="work-number">0{index + 1}</span>
                <a href={`mailto:guidelinengp@gmail.com?subject=Enquiry%20about%20${encodeURIComponent(work.title)}`}>Ask about this piece <span>↗</span></a>
              </div>
              <div className="art-caption"><div><h3>{work.title}</h3><p>{work.category}</p></div><span>Made to order</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-image scroll-reveal"><img src="/artworks/warli-bell-panel.jpg" alt="Warli-inspired handcrafted bell panel" /></div>
        <div className="statement-copy scroll-reveal">
          <p className="section-number light">03 / A living tradition</p>
          <blockquote>“The hand leaves a line<br />the machine never could.”</blockquote>
          <p>Folk memory, garden forms and the rhythm of daily life find their way into each piece—not as decoration, but as feeling.</p>
          <a href="#studio">Meet the maker <span>→</span></a>
        </div>
      </section>

      <section className="collections-list" aria-label="Collections">
        {collections.map((item, index) => (
          <a href="#contact" className="collection-row" key={item.title}>
            <span className="row-number">0{index + 1}</span>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <span className="row-arrow">↗</span>
          </a>
        ))}
      </section>

      <section className="studio" id="studio">
        <div className="studio-visual scroll-reveal">
          <img src="/artworks/leaf-wall-diya.jpg" alt="Leaf-shaped metal diya holder by Rajesh Khadse" />
          <span>Cut · Bent · Joined · Finished</span>
        </div>
        <div className="studio-copy scroll-reveal">
          <p className="section-number">04 / The maker</p>
          <h2>Made with<br /><em>attention.</em></h2>
          <p className="lead">Decoline is the evolving studio practice of artist-maker Rajesh Khadse.</p>
          <p>Working from Nagpur, Rajesh turns raw iron into lyrical, useful forms. Every curve is considered, every joint finished by hand, and every piece carries the small irregularities that make it singular.</p>
          <div className="maker-signature"><span>Rajesh Khadse</span><small>Founder & maker, Decoline</small></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-number light">05 / Begin a conversation</p>
        <div className="contact-grid">
          <h2>Bring a wall<br />to <em>life.</em></h2>
          <div className="contact-copy">
            <p>For available works, made-to-order pieces and collaborations, speak directly with Rajesh.</p>
            <a href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">guidelinengp@gmail.com <span>↗</span></a>
            <a href="tel:+919326969492">+91 93269 69492 <span>↗</span></a>
            <a className="whatsapp" href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20would%20like%20to%20know%20more%20about%20Decoline." target="_blank" rel="noreferrer">Start on WhatsApp <span>↗</span></a>
          </div>
        </div>
        <footer>
          <a className="wordmark footer-mark" href="#top"><span className="monogram" aria-hidden="true">D</span><span><strong>DECOLINE</strong><small>HANDCRAFTED METAL ART</small></span></a>
          <p>Original metalwork · Nagpur, India</p>
          <p>© {new Date().getFullYear()} Decoline</p>
        </footer>
      </section>
    </main>
  );
}
