"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about Accredian Enterprise.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}