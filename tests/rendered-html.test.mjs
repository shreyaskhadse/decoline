import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Decoline experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Decoline — Art Drawn in Metal<\/title>/i);
  assert.match(html, /Objects with/);
  assert.match(html, /Signature directions/);
  assert.match(html, /Prototypes, <em>refined/);
  assert.match(html, /Two Currents/);
  assert.match(html, /The Plant Halo/);
  assert.match(html, /Trailing Orbit/);
  assert.match(html, /The Garden/);
  assert.match(html, /Light meets living/);
  assert.match(html, /Balcony decor/);
  assert.match(html, /Even one or two thoughtful pieces/);
  assert.match(html, /Weather-resistant finish/);
  assert.match(html, /Just remember to water the plants/);
  assert.match(html, /Made slowly/);
  assert.match(html, /Custom-made for you/);
  assert.match(html, /A gift for now/);
  assert.match(html, /Rajesh Khadse/);
  assert.match(html, /Deepa Khadse/);
  assert.match(html, /Imagined together/);
  assert.match(html, /Ask about this piece/);
  assert.match(html, /I%20would%20like%20to%20ask%20about%20the%20Decoline%20piece/);
  assert.match(html, /wa\.me\/919326969492/);
  assert.doesNotMatch(html, /\/artworks\//);
});

test("uses generated visual collections and includes phone layouts", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /\/artworks\//);
  assert.match(page, /\/concepts\//);
  assert.match(page, /\/story\//);
  assert.match(page, /\/packaging\//);
  assert.match(page, /\/maker\//);
  assert.match(page, /hero-editorial-v3\.jpg/);
  assert.match(page, /GalleryLightbox/);
  assert.match(page, /floating-whatsapp/);
  assert.match(page, /ArrowUpRight/);
  assert.doesNotMatch(page, /↗|→|↓/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.doesNotMatch(css, /\.site-header\.is-hidden/);
  assert.match(css, /aspect-ratio:\s*1672\s*\/\s*941/);
  assert.match(css, /\.floating-whatsapp svg/);
  assert.doesNotMatch(css, /grayscale|mix-blend-mode/);
  assert.match(layout, /Decoline — Art Drawn in Metal/);

  await Promise.all([
    access(new URL("../public/concepts/flock-in-flight.jpg", import.meta.url)),
    access(new URL("../public/concepts/double-arc-wall-planter.jpg", import.meta.url)),
    access(new URL("../public/concepts/halo-cradle-planter.jpg", import.meta.url)),
    access(new URL("../public/concepts/orbit-shelf-planter.jpg", import.meta.url)),
    access(new URL("../public/concepts/garden-keeper-lamp.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-01-before.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-01-after.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-06-before.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-06-after.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-07-before.jpg", import.meta.url)),
    access(new URL("../public/balcony/balcony-07-after.jpg", import.meta.url)),
    access(new URL("../public/story/bending-iron.jpg", import.meta.url)),
    access(new URL("../public/packaging/gift-box-open.jpg", import.meta.url)),
    access(new URL("../public/packaging/unboxing-v2.jpg", import.meta.url)),
    access(new URL("../public/maker/rajesh-khadse-editorial.jpg", import.meta.url)),
    access(new URL("../public/maker/deepa-khadse-editorial.jpg", import.meta.url)),
    access(new URL("../public/hero-editorial-v3.jpg", import.meta.url)),
  ]);
});
