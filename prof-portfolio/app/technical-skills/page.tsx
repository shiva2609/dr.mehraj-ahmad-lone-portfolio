"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { technicalSkills } from "../data/professor";

export default function TechnicalSkillsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Technical Skills"
              breadcrumbItems={[{ label: "Technical Skills" }]}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 text-center"
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

