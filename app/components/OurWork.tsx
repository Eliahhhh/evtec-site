import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    alt: "EV charger plugged into a vehicle",
  },
  {
    src: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80",
    alt: "Close-up of an EV charging cable plugged into a car",
  },
  {
    src: "https://images.unsplash.com/photo-1639302610362-4c86747e8680?w=800&q=80",
    alt: "Electric vehicle charging in a home garage",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Electrician installing wiring",
  },
  {
    src: "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=800&q=80",
    alt: "Electrician testing an electrical panel with a multimeter",
  },
  {
    src: "https://images.unsplash.com/photo-1635335874521-7987db781153?w=800&q=80",
    alt: "Close-up of an electrical panel and wiring",
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-2">
            Recent Projects
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-navy sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-muted">
            A look at some of our recent EV charger installations across
            Burnaby and the Lower Mainland.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map(({ src, alt }) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
