"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, Mail } from "lucide-react";
import { personalInfo } from "@/app/data/professor";

export default function Hero() {
  const heroEmail = "mehrajlone@nitsri.ac.in";
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16 z-10">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-foreground/20"
          >
            {!imageError ? (
              <Image
                src="/Profile-photo.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center text-4xl font-serif text-foreground/30">
                ML
              </div>
            )}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Designation & Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-foreground/70 mb-4 font-light"
          >
            {personalInfo.designation}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-base md:text-lg text-foreground/60 mb-8"
          >
            {personalInfo.department}, {personalInfo.institution}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-2 mb-12"
          >
            <a
              href={`mailto:${heroEmail}`}
              className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {heroEmail}
            </a>
            <p className="font-sans text-sm text-foreground/60">
              {personalInfo.mobile[0]}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/Mehraj_CV_1686894031.pdf" target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground font-sans text-base font-medium rounded-full transition-all border border-foreground/20"
              >
                <Eye className="w-5 h-5" />
                View CV
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans text-base font-medium rounded-full transition-all shadow-lg shadow-blue-600/20"
              >
                <Mail className="w-5 h-5" />
                Contact
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

