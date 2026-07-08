import { CertificateIcon, MapPinIcon, ShieldIcon, StarIcon } from "./Icons";

const BADGES = [
  { icon: ShieldIcon, label: "Licensed Electrician" },
  { icon: CertificateIcon, label: "Bonded & Insured" },
  { icon: MapPinIcon, label: "Burnaby & Lower Mainland" },
  { icon: StarIcon, label: "4.7★ Google Rating" },
];

export default function TrustBadgeStrip() {
  return (
    <div className="border-b border-border bg-background-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-6 sm:px-6 md:grid-cols-4 md:gap-8 md:py-7">
        {BADGES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-navy">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-navy sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
