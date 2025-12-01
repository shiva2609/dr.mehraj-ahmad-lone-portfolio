"use client";

import { motion } from "framer-motion";
import { workshopsAttended } from "../data/professor";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function WorkshopsAttended() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center relative inline-block"
        >
          Workshops and Conferences Attended
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500/80 to-blue-500/40"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ bottom: "-8px" }}
          />
        </motion.h2>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {workshopsAttended.map((workshop) => (
            <motion.li
              key={workshop.id}
              variants={itemVariants}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-foreground/40 mt-1">
                  {workshop.id}.
                </span>
                <div className="flex-1">
                  {workshop.paperTitle ? (
                    <>
                      <p className="font-sans text-sm text-foreground/60 mb-2 italic">
                        Presented a paper entitled "{workshop.paperTitle}"
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                        {workshop.title}
                      </h3>
                    </>
                  ) : (
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                      Attended {workshop.title}
                    </h3>
                  )}
                  {workshop.location && (
                    <p className="font-sans text-base text-foreground/70 mb-1">
                      {workshop.location}
                    </p>
                  )}
                  {workshop.date && (
                    <p className="font-sans text-sm text-foreground/60">
                      {workshop.date}
                    </p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

