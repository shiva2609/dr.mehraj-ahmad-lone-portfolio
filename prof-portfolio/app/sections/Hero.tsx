"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Main Content */}
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
                src="/profile-photo.jpg"
                alt="Dr. Mehraj Ahmad Lone"
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
            Dr. Mehraj Ahmad Lone
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 font-light"
          >
            Department of Mathematics, NIT Srinagar
          </motion.p>

          {/* Get in Touch Button */}
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans text-base md:text-lg font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
            >
              Get in touch
              <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

