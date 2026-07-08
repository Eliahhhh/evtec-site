import { BoltIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BoltIcon className="h-4 w-4" />
          </span>
          <span className="font-heading text-base font-semibold tracking-wide text-white">
            EV TEC <span className="text-accent">BC PROS</span>
          </span>
        </div>

        <p className="text-sm text-white/60">
          6540 Hastings St #722, Burnaby, BC V5B 4Z5
        </p>
        <a
          href="tel:7788914005"
          className="text-sm text-white/60 transition-colors hover:text-accent"
        >
          (778) 891-4005
        </a>

        <p className="mt-4 text-xs text-white/35">
          &copy; {new Date().getFullYear()} EV TEC BC Pros. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
