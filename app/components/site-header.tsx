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
        <a href="#custom">Custom work</a>
        <a href="#studio">The studio</a>
      </nav>
      <a className="header-enquire" href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">
        Enquire <ArrowUpRight />
      </a>
    </header>
  );
}
