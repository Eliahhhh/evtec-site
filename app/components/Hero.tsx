import { PhoneIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-2/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
          Burnaby &amp; Lower Mainland
        </span>

        <h1 className="max-w-3xl font-heading text-4xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Vancouver&rsquo;s EV Charger Experts
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Professional EV charger installation for homes and businesses in
          Burnaby and the Lower Mainland.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            href="tel:7788914005"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-navy shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
          >
            <PhoneIcon className="h-4 w-4" />
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
          >
            See Our Services
          </a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-14 origin-bottom-right bg-background sm:h-20 md:h-24"
        style={{ transform: "skewY(-2.5deg) translateY(50%)" }}
        aria-hidden
      />
    </section>
  );
}
