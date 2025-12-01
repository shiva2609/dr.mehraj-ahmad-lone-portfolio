"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { teachingExperience } from "../data/professor";

export default function TeachingExperiencePage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Teaching & Research Experience"
              breadcrumbItems={[{ label: "Teaching & Research Experience" }]}
            />

            <div className="space-y-6">
              {teachingExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <p className="font-sans text-base text-foreground/80 mb-2">
                    {exp.institution}
                  </p>
                  <p className="font-sans text-sm text-foreground/60 mb-2">
                    {exp.location}
                  </p>
                  <p className="font-sans text-sm text-foreground/70 font-medium">
                    {exp.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

