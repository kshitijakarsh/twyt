"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Twyt learn my voice?",
    answer:
      "Twyt uses AI to analyze your past tweets, tone, and style to craft tweets that sound like you.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. All data processing happens locally, and no tweets or credentials are stored.",
  },
  {
    question: "Can I schedule tweets for later?",
    answer:
      "Yes! Twyt supports automated scheduling with calendar integration.",
  },
];

export default function FooterFAQ() {
  return (
    <div className="text-white px-6 py-10 md:px-12">
      <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="border border-gray-700 rounded-lg p-4">
                <Disclosure.Button className="flex justify-between w-full text-left text-white font-medium">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white transition-transform`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 text-sm text-gray-300">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
