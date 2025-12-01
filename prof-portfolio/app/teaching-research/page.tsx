"use client";

import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { teachingExperience } from "../data/professor";

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

export default function TeachingResearchPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center relative inline-block w-full"
            >
              Teaching & Research Experience
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500/80 to-blue-500/40"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ bottom: "-8px" }}
              />
            </motion.h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {teachingExperience.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="glass-card glass-card-hover p-6 md:p-8"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {item.position}
                  </h3>
                  <p className="font-sans text-base text-foreground/80 mb-2 font-medium">
                    {item.institution}
                  </p>
                  <p className="font-sans text-sm text-foreground/60 mb-3">
                    {item.location} • {item.period}
                  </p>
                  {item.description && (
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

