"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { publications } from "../data/professor";
import { ChevronDown } from "lucide-react";

const INITIAL_COUNT = 5;
const TOTAL_COUNT = publications.length;

export default function Publications() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedPublications = isExpanded
    ? publications
    : publications.slice(0, INITIAL_COUNT);

  return (
    <section id="publications" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center relative inline-block"
        >
          Research Publications
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500/80 to-blue-500/40"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ bottom: "-8px" }}
          />
        </motion.h2>

        <div className="space-y-4">
          <AnimatePresence>
            {displayedPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="font-serif text-sm text-foreground/50 mt-1">
                        {pub.id}.
                      </span>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground flex-1">
                        {pub.title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-foreground/80 mb-1">
                      {pub.journal}
                    </p>
                    <p className="font-sans text-sm text-foreground/70 mb-1">
                      {pub.year}, {pub.pages}
                    </p>
                    {pub.coAuthors && (
                      <p className="font-sans text-sm text-foreground/60 mb-2">
                        (with {pub.coAuthors})
                      </p>
                    )}
                    {pub.indexing && (
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded">
                        {pub.indexing}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans text-base font-medium rounded-full transition-all duration-300"
            >
              View more ({TOTAL_COUNT - INITIAL_COUNT}+)
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.button>
          </motion.div>
        )}

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(false)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground font-sans text-base font-medium rounded-full transition-all duration-300 border border-foreground/20"
            >
              Show less
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 rotate-180" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

