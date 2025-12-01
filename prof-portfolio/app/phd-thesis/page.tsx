"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { phdThesis } from "../data/professor";

export default function PhDThesisPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="PhD Thesis"
              breadcrumbItems={[{ label: "PhD Thesis" }]}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
                {phdThesis.title}
              </h2>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

