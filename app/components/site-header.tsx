"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./arrow-icon";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);
      setHidden(currentScrollY > 88);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}
    >
      <a className="wordmark" href="#top" aria-label="Decoline home">
        <span className="monogram" aria-hidden="true">D</span>
        <span><strong>DECOLINE</strong><small>HANDCRAFTED METAL ART</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#ideas">New ideas</a>
        <a href="#custom">Custom work</a>
        <a href="#studio">The maker</a>
      </nav>
      <a className="header-enquire" href="mailto:guidelinengp@gmail.com?subject=Decoline%20artwork%20enquiry">
        Enquire <ArrowUpRight />
      </a>
    </header>
  );
}
