"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { contactInfo } from "@/app/data/professor";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Contact"
              breadcrumbItems={[{ label: "Contact" }]}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 border border-foreground/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <Mail className="w-6 h-6 text-foreground/60 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <label className="font-sans text-sm text-foreground/60 mb-2 block">
                          Email
                        </label>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="font-sans text-base md:text-lg text-foreground font-medium hover:text-blue-400 transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyEmail}
                      className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-foreground/60" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Numbers */}
              {contactInfo.mobile.map((mobile, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 border border-foreground/10">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-foreground/60 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <label className="font-sans text-sm text-foreground/60 mb-2 block">
                          Mobile {contactInfo.mobile.length > 1 ? `${index + 1}` : ""}
                        </label>
                        <a
                          href={`tel:${mobile}`}
                          className="font-sans text-base md:text-lg text-foreground font-medium hover:text-blue-400 transition-colors"
                        >
                          {mobile}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Official Address */}
              <motion.div variants={itemVariants} className="relative">
                <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 border border-foreground/10">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-foreground/60 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <label className="font-sans text-sm text-foreground/60 mb-2 block">
                        Official Address
                      </label>
                      <p className="font-sans text-base md:text-lg text-foreground font-medium leading-relaxed">
                        {contactInfo.officialAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
