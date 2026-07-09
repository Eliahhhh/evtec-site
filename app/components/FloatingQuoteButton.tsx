export default function FloatingQuoteButton() {
  return (
    <a
      href="#quote-estimator"
      aria-label="Get a quote estimate"
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-sm border-l border-navy bg-accent py-2.5 pl-1 pr-0.5 text-[8px] font-bold uppercase leading-none tracking-wide text-navy shadow-xl transition-transform hover:-translate-x-1 sm:rounded-l-md sm:border-2 sm:border-r-0 sm:px-2 sm:py-4 sm:text-[11px]"
      style={{ writingMode: "vertical-rl" }}
    >
      Get a Quote Estimate
    </a>
  );
}
