import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroTable from "@/assets/hero-table.jpg";
import collectionSeating from "@/assets/collection-seating.jpg";
import collectionSisal from "@/assets/collection-sisal.jpg";
import collectionCarving from "@/assets/collection-carving.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karibu Mfao — Handcrafted Furniture in Tanzania" },
      {
        name: "description",
        content:
          "Handcrafted mninga, teak and woven sisal furniture made in Dar es Salaam. Browse collections in TZS and place a custom order for delivery across Tanzania.",
      },
      { property: "og:title", content: "Karibu Mfao — Handcrafted Furniture in Tanzania" },
      {
        property: "og:description",
        content:
          "Mninga hardwood, sisal weave and Zanzibar carving, made to order in Dar es Salaam. Place your order online.",
      },
    ],
  }),
  component: Home,
});

const collections = [
  {
    name: "Mninga Seating",
    blurb: "Chairs, stools and armchairs in solid teak.",
    price: "TZS 680,000",
    tags: ["Solid teak", "Oil finish"],
    image: collectionSeating,
    alt: "Hand-oiled mninga teak armchair with warm visible grain",
  },
  {
    name: "Sisal Weave",
    blurb: "Hand-woven tops, baskets and wall pieces.",
    price: "TZS 340,000",
    tags: ["Natural sisal", "Hand-woven"],
    image: collectionSisal,
    alt: "Round table top woven from natural sisal fibre",
  },
  {
    name: "Zanzibar Carving",
    blurb: "Doors, screens and carved architectural pieces.",
    price: "TZS 1,900,000",
    tags: ["Relief carved", "Island style"],
    image: collectionCarving,
    alt: "Zanzibar-style carved hardwood door panel in deep relief",
  },
];

function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-mninga font-display text-lg font-semibold text-paper">
              K
            </div>
            <div className="leading-none">
              <span className="font-display text-lg font-semibold tracking-tight">Karibu Mfao</span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                Samani za Mikono
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#collections" className="hover:text-mninga">
              Collections
            </a>
            <a href="#workshop" className="hover:text-mninga">
              Workshop
            </a>
            <a href="#order" className="hover:text-mninga">
              Order
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-mninga"
          >
            Place an order
          </a>
        </div>
      </header>

      <main>
        {/* Hero + featured piece */}
        <section className="mx-auto grid max-w-7xl items-end gap-8 px-6 pt-10 pb-16 lg:grid-cols-12 lg:gap-12">
          <div className="rise lg:col-span-5">
            <p className="eyebrow mb-5">Dar es Salaam · Made to order</p>
            <h1 className="max-w-[32ch] text-4xl leading-tight sm:text-5xl xl:text-6xl">
              Furniture built by hand, finished in oil and patience.
            </h1>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-ink-soft sm:text-lg">
              Mninga hardwood sanded until the grain opens, sisal woven tight enough to hold a
              generation, and Zanzibar carving carried into modern rooms. Every piece is made to
              order, never stocked.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="inline-flex items-center gap-2 rounded-md bg-mninga py-3 pr-5 pl-4 text-sm font-medium text-paper transition-colors hover:bg-kitenge"
              >
                Order a piece
                <span aria-hidden>→</span>
              </a>
              <a href="#collections" className="text-sm font-medium hover:text-mninga">
                View collections
              </a>
            </div>
          </div>

          <div className="rise lg:col-span-7">
            <img
              src={heroTable}
              alt="Handcrafted mninga hardwood dining table in a Tanzanian joinery workshop"
              width={1408}
              height={1008}
              className="w-full rounded-xl object-cover aspect-[4/3] lg:aspect-[7/5]"
            />
            <div className="mt-4 flex items-start justify-between gap-6 border-t border-border pt-4">
              <div>
                <p className="font-display text-xl font-medium">The Mzinga Table</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                  Mninga hardwood · solid joinery · hand-rubbed oil
                </p>
              </div>
              <p className="font-display text-xl font-semibold whitespace-nowrap text-mninga">
                TZS 2,450,000
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-ink-soft">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em]">Dimensions</span>
                240 × 110 × 74 cm
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em]">Lead time</span>
                6–8 weeks
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em]">Finish</span>
                3-coat hard oil
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="bg-paper-deep">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow mb-3">Collections</p>
                <h2 className="max-w-[24ch] text-3xl leading-tight sm:text-4xl">
                  Three collections, one workshop.
                </h2>
              </div>
              <p className="hidden max-w-[30ch] text-sm text-ink-soft md:block">
                Prices in Tanzanian Shillings. Made to order, with delivery across the mainland and
                the islands.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {collections.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-xl bg-paper ring-1 ring-border"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width={816}
                    height={816}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-medium">{item.name}</h3>
                        <p className="mt-1 text-xs text-ink-soft">{item.blurb}</p>
                      </div>
                      <p className="font-display text-lg font-semibold whitespace-nowrap text-mninga">
                        {item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded bg-ink/5 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop story */}
        <section id="workshop" className="bg-ink text-paper">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16">
            <img
              src={workshopImg}
              alt="A maker running a palm over freshly oiled mninga hardwood in the workshop"
              loading="lazy"
              width={1200}
              height={960}
              className="aspect-[5/4] w-full rounded-xl object-cover"
            />
            <div>
              <p className="eyebrow mb-4">Our workshop</p>
              <h2 className="max-w-[24ch] text-3xl leading-tight sm:text-4xl">
                Run your palm over the grain. That is the whole craft.
              </h2>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-paper/75">
                In a narrow workshop off Kariakoo, Dar es Salaam, our makers let the mninga rest
                before a single cut. We weigh each plank and take the joinery slowly, then oil it in
                thin coats until the surface drinks it in.
              </p>
              <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-paper/75">
                Sisal is woven the way it has been on the islands for generations, and our carvings
                follow patterns handed down by our elders. Nothing leaves the workshop until it
                would hold for a family.
              </p>
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="font-display text-3xl font-semibold">2014</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-paper/60">
                    Established
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">3</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-paper/60">Materials</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-paper/60">
                    Made to order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Place an order */}
        <section id="order" className="bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow mb-3">Oda / Order</p>
                <h2 className="max-w-[26ch] text-3xl leading-tight sm:text-4xl">
                  Place a custom order.
                </h2>
                <p className="mt-4 max-w-[50ch] text-base text-ink-soft">
                  Tell us what you need. This is an order request, not a checkout — we reply within
                  one working day to confirm materials, dimensions and a firm TZS price.
                </p>

                <form
                  className="mt-10 grid gap-5 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="piece">
                      Type of piece
                    </label>
                    <select id="piece" className="field" defaultValue="Dining table">
                      <option>Dining table</option>
                      <option>Chair or armchair</option>
                      <option>Sisal-woven top or basket</option>
                      <option>Zanzibar carved door</option>
                      <option>Bed</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="material">
                      Wood or material
                    </label>
                    <select id="material" className="field" defaultValue="Mninga (teak)">
                      <option>Mninga (teak)</option>
                      <option>Mvule</option>
                      <option>Sisal weave</option>
                      <option>Mixed</option>
                    </select>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="size">
                      Dimensions (L × W × H, cm)
                    </label>
                    <input id="size" className="field" type="text" placeholder="240 × 110 × 74" />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="region">
                      Region or city
                    </label>
                    <select id="region" className="field" defaultValue="Dar es Salaam">
                      <option>Dar es Salaam</option>
                      <option>Zanzibar (Mjini Magharibi)</option>
                      <option>Arusha</option>
                      <option>Mwanza</option>
                      <option>Dodoma</option>
                      <option>Mbeya</option>
                      <option>Other region</option>
                    </select>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="delivery">
                      Delivery
                    </label>
                    <select id="delivery" className="field" defaultValue="Workshop collection">
                      <option>Workshop collection</option>
                      <option>Local courier (quoted separately)</option>
                      <option>Inter-city freight</option>
                    </select>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="name">
                      Full name
                    </label>
                    <input id="name" className="field" type="text" placeholder="Amina Juma" required />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="phone">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      className="field"
                      type="tel"
                      placeholder="+255 700 000 000"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="notes">
                      Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      className="field resize-none"
                      placeholder="Carving pattern, finish, deadline…"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2 sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-md bg-kitenge py-3 pr-5 pl-4 text-sm font-medium text-paper transition-colors hover:bg-mninga"
                    >
                      Send order request
                      <span aria-hidden>→</span>
                    </button>
                    <p className="text-xs text-ink-soft">
                      No payment now. We confirm a TZS price first.
                    </p>
                  </div>

                  {sent && (
                    <p
                      role="status"
                      className="sm:col-span-2 rounded-md bg-paper-deep px-4 py-3 text-sm text-ink"
                    >
                      Asante sana — your order request has been noted. We will call or WhatsApp you
                      within one working day.
                    </p>
                  )}
                </form>
              </div>

              <aside className="lg:col-span-4">
                <div className="rounded-xl bg-mninga p-7 text-paper">
                  <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-paper/70">
                    Visit us
                  </p>
                  <h3 className="font-display text-2xl font-medium">Karibu Mfao Workshop</h3>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-paper/60">
                        Address
                      </span>
                      Plot 42, Kariakoo Road, Dar es Salaam
                    </li>
                    <li>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-paper/60">
                        WhatsApp / Phone
                      </span>
                      <a href="tel:+255712345678" className="hover:underline">
                        +255 712 345 678
                      </a>
                    </li>
                    <li>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-paper/60">
                        Hours
                      </span>
                      Mon–Sat, 8:00–17:00 (EAT)
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-paper-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="grid size-8 place-items-center rounded-md bg-ink font-display font-semibold text-paper">
              K
            </div>
            <span className="font-display font-semibold">Karibu Mfao</span>
          </div>
          <p className="text-xs text-ink-soft">
            Handcrafted in Dar es Salaam, Tanzania · Prices in TZS
          </p>
        </div>
      </footer>
    </div>
  );
}
