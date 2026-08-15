"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can join the experience?",
    answer:
      "The experience is designed for foreign travelers and digital nomads who want to spend more time experiencing everyday life in Jaipur.",
  },
  {
    question: "How long is the experience?",
    answer:
      "The current plan is a 2–3 week experience in Jaipur.",
  },
  {
    question: "Where will I stay?",
    answer:
      "Participants stay in a local homestay and experience everyday life in a welcoming local environment.",
  },
  {
    question: "What is included?",
    answer:
      "The experience currently includes a homestay, Hindi learning, yoga, a village experience and local food.",
  },
  {
    question: "Can I book directly?",
    answer:
      "At this stage, Livelocal works through enquiries. Send us your details and we'll get back to you with the next steps.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="px-5 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] sm:text-sm">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:mt-5 md:text-6xl">
            Questions,
            <br />
            answered.
          </h2>
        </div>

        {/* Questions */}
        <div className="mt-12 border-t border-black/10 sm:mt-14 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex min-h-[72px] w-full items-center justify-between gap-5 py-5 text-left sm:min-h-[80px] sm:py-7"
                >
                  <span className="max-w-[85%] text-base font-medium leading-snug sm:text-lg md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-xl font-light leading-none transition-transform duration-300"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="pb-6 pr-4 text-sm leading-relaxed text-black/60 sm:pb-7 sm:pr-10 sm:text-base md:text-lg"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}