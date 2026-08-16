"use client";

import { useEffect, useRef, useState } from "react";

type OpenImage = {
  src: string;
  alt: string;
};

export function GalleryLightbox() {
  const [openImage, setOpenImage] = useState<OpenImage | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>("img[data-expandable]"));

    const open = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      const image = event.currentTarget as HTMLImageElement;
      setOpenImage({ src: image.currentSrc || image.src, alt: image.alt });
    };

    const openWithKeyboard = (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") open(keyboardEvent);
    };

    images.forEach((image) => {
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", `View larger: ${image.alt}`);
      image.addEventListener("click", open);
      image.addEventListener("keydown", openWithKeyboard);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", open);
        image.removeEventListener("keydown", openWithKeyboard);
      });
    };
  }, []);

  useEffect(() => {
    if (!openImage) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [openImage]);

  if (!openImage) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded artwork view"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpenImage(null);
      }}
    >
      <button ref={closeButton} type="button" onClick={() => setOpenImage(null)} aria-label="Close expanded image">
        <span aria-hidden="true" />
      </button>
      <figure>
        <img src={openImage.src} alt={openImage.alt} />
        <figcaption>{openImage.alt}</figcaption>
      </figure>
    </div>
  );
}
