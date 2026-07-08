import { MapPinIcon, ShieldIcon, StarIcon, TagIcon } from "./Icons";

const POINTS = [
  {
    icon: StarIcon,
    title: "4.7 Stars on Google",
    description: "Rated 4.7/5 from 26 verified customer reviews.",
  },
  {
    icon: ShieldIcon,
    title: "Licensed & Insured",
    description: "Fully licensed electricians backed by full insurance coverage.",
  },
  {
    icon: MapPinIcon,
    title: "Serving Burnaby & Lower Mainland",
    description: "Local installers who know the region and its permitting.",
  },
  {
    icon: TagIcon,
    title: "Competitive Pricing",
    description: "Transparent, fair quotes with no hidden fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-2">
            Why EV TEC BC Pros
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-navy sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-muted">
            Trusted by homeowners and businesses across the Lower Mainland.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-navy sm:text-base">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
