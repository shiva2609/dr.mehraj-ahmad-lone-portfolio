"use client";

import { motion } from "framer-motion";
import { contactInfo } from "../data/professor";
import { Mail, Phone, MapPin, Home } from "lucide-react";

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

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center relative inline-block"
        >
          Contact Details
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500/80 to-blue-500/40"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ bottom: "-8px" }}
          />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {/* Email */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 border border-foreground/10">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-foreground/60 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <label className="font-sans text-sm text-foreground/60 mb-2 block">
                    Email
                  </label>
                  <p className="font-sans text-base md:text-lg text-foreground font-medium">
                    {contactInfo.email}
                  </p>
                </div>
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
                    <p className="font-sans text-base md:text-lg text-foreground font-medium">
                      {mobile}
                    </p>
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

          {/* Residential Address */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-foreground/10 rounded-2xl p-6 md:p-8 border border-foreground/10">
              <div className="flex items-start gap-4">
                <Home className="w-6 h-6 text-foreground/60 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <label className="font-sans text-sm text-foreground/60 mb-2 block">
                    Residential Address
                  </label>
                  <p className="font-sans text-base md:text-lg text-foreground font-medium leading-relaxed">
                    {contactInfo.residentialAddress}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

