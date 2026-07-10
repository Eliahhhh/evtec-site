import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

const HOURS = [{ days: "Monday – Sunday", time: "8:00 AM – 8:00 PM" }];

export default function HoursContact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-2">
            Get In Touch
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-navy sm:text-4xl">
            Hours &amp; Contact
          </h2>
          <p className="mt-4 text-muted">
            Reach out any day of the week — we&rsquo;re here to help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-background-alt p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-navy">
                  Hours
                </h3>
                <dl className="mt-2 space-y-1 text-sm text-muted">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex gap-2">
                      <dt className="font-medium text-navy">{h.days}:</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-navy">
                  Address
                </h3>
                <p className="mt-2 text-sm text-muted">
                  6540 Hastings St #722
                  <br />
                  Burnaby, BC V5B 4Z5
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-navy">
                  Phone
                </h3>
                <a
                  href="tel:7788914005"
                  className="mt-2 inline-block text-sm text-muted transition-colors hover:text-accent-2"
                >
                  (778) 891-4005
                </a>
              </div>
            </div>

            <a
              href="tel:7788914005"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy shadow-sm transition-transform hover:scale-105"
            >
              <PhoneIcon className="h-4 w-4" />
              Call for a Free Quote
            </a>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="EV TEC BC Pros location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5!2d-122.9991!3d49.2827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6540+Hastings+St+%23722%2C+Burnaby%2C+BC+V5B+4Z5!5e0!3m2!1sen!2sca!4v1"
              className="h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
