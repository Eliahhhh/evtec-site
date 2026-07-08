import {
  ClockIcon,
  OutletIcon,
  PanelIcon,
  PlugIcon,
  RebateIcon,
  WallConnectorIcon,
} from "./Icons";

const SERVICES = [
  {
    icon: PlugIcon,
    title: "Level 2 EV Charger Installation",
    description:
      "Fast, safe installation of Level 2 chargers so you can charge overnight and leave home full every day.",
  },
  {
    icon: OutletIcon,
    title: "NEMA 14-50 Outlet Installation",
    description:
      "Code-compliant 240V outlets installed for flexible charging with any EVSE or portable charger.",
  },
  {
    icon: WallConnectorIcon,
    title: "Tesla Wall Connector Installation",
    description:
      "Certified installs of the Tesla Wall Connector for the fastest home charging speeds available.",
  },
  {
    icon: PanelIcon,
    title: "Panel Upgrade for EV",
    description:
      "Electrical panel upgrades to safely support your new charger and future home electrical needs.",
  },
  {
    icon: ClockIcon,
    title: "Same-Day Quote & Install",
    description:
      "Need it fast? We offer same-day quotes and installs across Burnaby and the Lower Mainland.",
  },
  {
    icon: RebateIcon,
    title: "BC Hydro Rebate Assistance",
    description:
      "We help you navigate and apply for BC Hydro EV charger rebates to maximize your savings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-2">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-navy sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted">
            Full-service EV charger installation, from planning to permit to
            power-on.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center gap-6 py-8 text-center sm:flex-row sm:text-left ${
                index % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background-alt text-navy">
                <Icon className="h-9 w-9" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
