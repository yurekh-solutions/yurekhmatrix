import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Building2 } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"vendors" | "builders">("vendors");

  const vendorFAQs = [
    {
      question: "Why should we pay subscription fees when other platforms are free?",
      answer:
        "Our paid model ensures premium services including dedicated logistics management, secure escrow protection, and verified builder matching, while free platforms often lack these essential risk mitigation features.",
    },
    {
      question: "How do we know local builders are qualified and financially stable?",
      answer:
        "We implement comprehensive verification processes during builder onboarding, including documentation checks, creditworthiness assessment, and performance tracking to ensure only qualified builders access our platform.",
    },
    {
      question: "What if builders don't pay or there are payment disputes?",
      answer:
        "Our integrated escrow services protect every transaction, holding payments securely until delivery confirmation, eliminating payment risks that plague direct vendor-builder relationships.",
    },
    {
      question: "Why can't we just find builders through existing networks?",
      answer:
        "Our platform provides access to pre-qualified builders across multiple markets simultaneously, with detailed needs assessment and matching algorithms that traditional networking cannot scale.",
    },
  ];

  const builderFAQs = [
    {
      question: "Why pay for another platform when we have existing supplier relationships?",
      answer:
        "Our platform expands access to international suppliers with competitive pricing and specialized products unavailable through local networks, backed by secure transaction processing.",
    },
    {
      question: "How do we verify product quality from international vendors?",
      answer:
        "We implement vendor verification during onboarding, maintain performance tracking systems, and provide case studies and testimonials from similar construction projects.",
    },
    {
      question: "What if shipments are delayed or products don't meet specifications?",
      answer:
        "Our escrow services protect against delivery failures, and our logistics partnerships include real-time tracking and quality assurance protocols to minimize risks.",
    },
    {
      question: "How do we get approval from stakeholders for new vendor relationships?",
      answer:
        "We provide ROI calculators, case studies, and detailed vendor profiles that builders can share internally to demonstrate value and reduce procurement risks.",
    },
  ];

  const currentFAQs = activeTab === "vendors" ? vendorFAQs : builderFAQs;

  return (
    <section className="py-16 sm:py-20 bg-[#f7f5f2]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-[#5c2d23] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-[#5c2d23]/80 max-w-2xl mx-auto">
            Get answers to common questions from vendors and builders
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white/60 backdrop-blur-md rounded-xl shadow-md p-1">
            <button
              onClick={() => setActiveTab("vendors")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "vendors"
                  ? "bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white shadow-lg"
                  : "text-[#5c2d23]/70 hover:text-[#5c2d23]"
              }`}
            >
              <Building2 className="h-5 w-5" />
              For Vendors
            </button>
            <button
              onClick={() => setActiveTab("builders")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === "builders"
                  ? "bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white shadow-lg"
                  : "text-[#5c2d23]/70 hover:text-[#5c2d23]"
              }`}
            >
              <Users className="h-5 w-5" />
              For Builders
            </button>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {currentFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white/60 backdrop-blur-md border border-[#5c2d23]/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#5c2d23] pr-3">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#c15738]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-[#5c2d23]/10">
                      <p className="text-[#5c2d23]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
