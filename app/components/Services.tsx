import type { ComponentType } from "react";
import {
  BoltIcon,
  FanIcon,
  GroundWireIcon,
  LightbulbIcon,
  OutletIcon,
  PanelIcon,
  PlugIcon,
  RebateIcon,
  SpotlightIcon,
  WallConnectorIcon,
} from "./Icons";

const EV_SERVICES = [
  {
    icon: WallConnectorIcon,
    title: "EV Charger Installation",
    description:
      "Level 2, NEMA 14-50, and Tesla Wall Connector installs for fast, safe home charging.",
  },
  {
    icon: PlugIcon,
    title: "Electric Vehicle Infrastructure",
    description:
      "Full EV charging infrastructure planning and installation for homes and businesses.",
  },
  {
    icon: RebateIcon,
    title: "BCHydro Rebate Assistance",
    description:
      "We help you navigate government rebates to maximize your savings on a new charger.",
  },
];

const ELECTRICAL_SERVICES = [
  {
    icon: PanelIcon,
    title: "Electrical Panel Repair & Upgrade",
    description: "Panel replacements, upgrades, and repairs done to code.",
  },
  {
    icon: OutletIcon,
    title: "Outlet & Switch Installation",
    description: "New outlets, switches, and relocations for any room.",
  },
  {
    icon: LightbulbIcon,
    title: "Light Fixture Installation",
    description: "Indoor and outdoor lighting installs, done right the first time.",
  },
  {
    icon: FanIcon,
    title: "Fan Installation & Repair",
    description: "Ceiling fans and ventilation, installed or repaired.",
  },
  {
    icon: GroundWireIcon,
    title: "Ground Wire Installation",
    description: "Safety grounding to protect your home's electrical system.",
  },
  {
    icon: SpotlightIcon,
    title: "Outdoor Lighting",
    description: "Exterior and security lighting installation.",
  },
  {
    icon: BoltIcon,
    title: "Electrical Power Restoration",
    description: "Fast response for power outages and electrical failures.",
  },
];

function ServiceList({
  services,
}: {
  services: { icon: ComponentType<{ className?: string }>; title: string; description: string }[];
}) {
  return (
    <div className="mt-8 divide-y divide-border">
      {services.map(({ icon: Icon, title, description }, index) => (
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
  );
}

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
            A full-service electrical contractor for Burnaby and the Lower
            Mainland &mdash; from EV charger installs to everyday electrical
            work.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-center font-heading text-lg font-bold uppercase tracking-wide text-accent-2 sm:text-left">
            EV Charger Services
          </h3>
          <ServiceList services={EV_SERVICES} />
        </div>

        <div className="mt-16">
          <h3 className="text-center font-heading text-lg font-bold uppercase tracking-wide text-accent-2 sm:text-left">
            Electrical Services
          </h3>
          <ServiceList services={ELECTRICAL_SERVICES} />
        </div>
      </div>
    </section>
  );
}
