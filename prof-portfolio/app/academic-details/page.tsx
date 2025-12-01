"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { academicDetails } from "../data/professor";

export default function AcademicDetailsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Academic Details"
              breadcrumbItems={[{ label: "Academic Details" }]}
            />

            <div className="space-y-6">
              {academicDetails.map((detail, index) => (
                <motion.div
                  key={detail.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {detail.degree}
                      </h3>
                      <p className="font-sans text-base text-foreground/80">
                        {detail.university}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-sans text-sm text-foreground/70 mb-1">
                        Specialization: {detail.specialization}
                      </p>
                      <p className="font-sans text-sm text-foreground/60">
                        Year: {detail.year}
                      </p>
                    </div>
                    <div className="md:col-span-1 text-right">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        {detail.division}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

