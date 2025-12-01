"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { researchProjects } from "@/app/data/professor";

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

export default function ResearchProjectsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <PageHeader
              title="Research Projects"
              breadcrumbItems={[{ label: "Research Projects" }]}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {researchProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                  }}
                  className="glass-card p-6 md:p-8 transition-all duration-300 border border-foreground/10 hover:border-blue-500/30"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  {project.year && (
                    <p className="font-sans text-sm text-foreground/60 mb-3">
                      {project.year}
                    </p>
                  )}
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

