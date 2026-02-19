import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
  question: "How do I add items to my collection?",
  answer:
    "Navigate to the Database, find your item, and click the \"Add to Collection\" button. You'll need to be logged in."
},
  {
    question: "Can I make my collection private?",
    answer:
      "Yes! In your Profile settings, you can adjust your privacy settings to control who can see your collection."
  },
  {
    question: "How do I upgrade my subscription?",
    answer:
      "Visit your Profile page and look for the subscription section to view available plans and upgrade options."
  },
  {
    question: "Can I suggest new toy lines?",
    answer:
      "Absolutely! Use this contact form to suggest new toy lines or items you'd like to see added to our database."
  },
  {
    question: "When will the Privacy Policy be available?",
    answer:
      "A full Privacy Policy is currently being finalised and will be published shortly. In the meantime, we remain committed to protecting user data and respecting privacy settings."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange font-semibold tracking-[0.25em] uppercase sm:text-xl text-sm">
            Support
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown leading-tight">
            Frequently Asked
            <span className="block text-brand-orange mt-2">
              Questions
            </span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-brand-brown/70 max-w-2xl mx-auto">
            Everything you need to know about images, ownership, and platform policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-brown/10 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left p-6 sm:p-8 hover:bg-brand-beige/40 transition cursor-pointer"
              >
                <span className="font-semibold text-brand-brown text-base sm:text-lg">
                  {faq.question}
                </span>

                <span className="ml-6 text-brand-orange">
                  {active === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-brand-brown/70 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
