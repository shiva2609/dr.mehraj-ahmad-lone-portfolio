"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { collaborators } from "@/app/data/professor";
import { MapPin } from "lucide-react";

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

export default function CollaboratorsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          {/* Subtle World Map Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path
                d="M 100 200 Q 150 180 200 200 T 300 200 Q 350 190 400 200 T 500 200 Q 550 210 600 200 T 700 200 Q 750 190 800 200 T 900 200"
                stroke="currentColor"
                fill="none"
              />
              <path
                d="M 150 250 Q 200 240 250 250 T 350 250 Q 400 260 450 250 T 550 250 Q 600 240 650 250 T 750 250"
                stroke="currentColor"
                fill="none"
              />
              <path
                d="M 200 300 Q 250 290 300 300 T 400 300 Q 450 310 500 300 T 600 300 Q 650 290 700 300 T 800 300"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <PageHeader
              title="Foreign Collaborators"
              breadcrumbItems={[{ label: "Collaborators" }]}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {collaborators.map((collaborator) => (
                <motion.div
                  key={collaborator.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  className="glass-card p-6 md:p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 group"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                    {collaborator.name}
                  </h3>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-foreground/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-base text-foreground/80 font-medium">
                        {collaborator.university}
                      </p>
                      <p className="font-sans text-sm text-foreground/60 mt-1">
                        {collaborator.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

