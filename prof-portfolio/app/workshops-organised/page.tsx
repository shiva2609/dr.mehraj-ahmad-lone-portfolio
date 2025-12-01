"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { workshopsOrganised } from "../data/professor";

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

export default function WorkshopsOrganisedPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Workshops and Conferences Organised"
              breadcrumbItems={[{ label: "Workshops Organised" }]}
            />

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {workshopsOrganised.map((workshop) => (
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
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                        {workshop.title}
                      </h3>
                      {workshop.duration && (
                        <p className="font-sans text-base text-foreground/70 mb-1">
                          Duration: {workshop.duration}
                        </p>
                      )}
                      {workshop.location && (
                        <p className="font-sans text-sm text-foreground/60 mb-1">
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
      </main>
    </PageTransition>
  );
}

