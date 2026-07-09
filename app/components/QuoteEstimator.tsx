"use client";

import { useState } from "react";
import { OutletIcon, PhoneIcon, PlugIcon, WallConnectorIcon } from "./Icons";

type AnswerKey = "charger" | "property" | "panelLocation" | "upgrade";

type Answers = Record<AnswerKey, string | null>;

type Option = {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type Question = {
  key: AnswerKey;
  question: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    key: "charger",
    question: "What type of charger do you need?",
    options: [
      { value: "level2", label: "Level 2 Charger", icon: PlugIcon },
      { value: "nema", label: "NEMA 14-50 Outlet", icon: OutletIcon },
      { value: "tesla", label: "Tesla Wall Connector", icon: WallConnectorIcon },
    ],
  },
  {
    key: "property",
    question: "What's your property type?",
    options: [
      { value: "house", label: "Detached House" },
      { value: "townhouse", label: "Townhouse" },
      { value: "condo", label: "Condo / Apartment" },
    ],
  },
  {
    key: "panelLocation",
    question: "Where is your electrical panel?",
    options: [
      { value: "garage", label: "Inside garage" },
      { value: "indoors", label: "Inside house" },
      { value: "outside", label: "Outside / utility room" },
    ],
  },
  {
    key: "upgrade",
    question: "Do you need a panel upgrade?",
    options: [
      { value: "unsure", label: "Not sure" },
      { value: "yes", label: "Probably yes" },
      { value: "no", label: "No, my panel is fine" },
    ],
  },
];

const INITIAL_ANSWERS: Answers = {
  charger: null,
  property: null,
  panelLocation: null,
  upgrade: null,
};

function getEstimate(answers: Answers) {
  const isComplex = answers.property === "condo" || answers.upgrade !== "no";
  if (isComplex) {
    return {
      tier: "Complex Install",
      range: "$1,200 – $1,800+",
      description:
        "Your project likely involves extra work, such as condo/strata coordination or an electrical panel upgrade.",
    };
  }

  const isBasic = answers.charger === "nema" && answers.panelLocation === "garage";
  if (isBasic) {
    return {
      tier: "Basic Install",
      range: "$400 – $600",
      description:
        "A straightforward NEMA outlet install with easy access to your electrical panel.",
    };
  }

  return {
    tier: "Standard Install",
    range: "$700 – $1,000",
    description:
      "A standard charger install with normal access to your electrical panel.",
  };
}

export default function QuoteEstimator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);

  const isResult = step >= QUESTIONS.length;

  function handleSelect(key: AnswerKey, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 250);
  }

  function resetQuiz() {
    setAnswers(INITIAL_ANSWERS);
    setStep(0);
  }

  const estimate = isResult ? getEstimate(answers) : null;

  return (
    <section id="quote-estimator" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-2">
            Free &amp; No Sign-Up Required
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-navy sm:text-4xl">
            Instant Quote Estimator
          </h2>
          <p className="mt-4 text-muted">
            Answer four quick questions to get a ballpark price for your EV
            charger installation. No AI, no guesswork — just straightforward
            pricing logic.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-background-alt p-6 shadow-sm sm:p-10">
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted">
              <span>
                {isResult ? "Your Estimate" : `Step ${step + 1} of ${QUESTIONS.length}`}
              </span>
              <span>{Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="flex gap-1.5">
              {QUESTIONS.map((q, i) => (
                <div
                  key={q.key}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i < step || isResult
                      ? "bg-accent"
                      : i === step
                        ? "bg-accent/40"
                        : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          {!isResult ? (
            <div>
              <h3 className="text-center font-heading text-xl font-semibold uppercase tracking-tight text-navy sm:text-2xl">
                {QUESTIONS[step].question}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {QUESTIONS[step].options.map((opt) => {
                  const Icon = opt.icon;
                  const selected = answers[QUESTIONS[step].key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelect(QUESTIONS[step].key, opt.value)}
                      className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 text-center text-sm font-semibold transition-colors ${
                        selected
                          ? "border-accent bg-accent text-navy"
                          : "border-border bg-background text-navy hover:border-accent/60"
                      }`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent-2"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                {estimate!.tier}
              </span>
              <p className="mt-5 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                {estimate!.range}
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
                {estimate!.description}
              </p>

              <a
                href="tel:7788914005"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-navy shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-105"
              >
                <PhoneIcon className="h-4 w-4" />
                Get Your Exact Quote
              </a>

              <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-muted">
                Final price depends on site inspection. Call Naser for a free
                on-site quote.
              </p>

              <button
                type="button"
                onClick={resetQuiz}
                className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent-2"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
