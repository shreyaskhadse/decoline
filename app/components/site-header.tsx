import { ArrowUpRight } from "./arrow-icon";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Decoline home">
        <span className="monogram" aria-hidden="true">D</span>
        <span><strong>DECOLINE</strong><small>HANDCRAFTED METAL ART</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#ideas">New ideas</a>
        <a href="#balcony">Balconies</a>
        <a href="#custom">Custom work</a>
        <a href="#studio">The studio</a>
      </nav>
      <a
        className="header-enquire"
        href="https://wa.me/919326969492?text=Hello%20Rajesh%2C%20I%20would%20like%20to%20enquire%20about%20Decoline."
        target="_blank"
        rel="noreferrer"
      >
        Enquire <ArrowUpRight />
      </a>
    </header>
  );
}
