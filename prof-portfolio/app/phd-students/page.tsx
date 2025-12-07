"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { phdStudents } from "@/app/data/professor";

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

export default function PhDStudentsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="PhD Students"
              subtitle={`Total: ${phdStudents.length} students`}
              breadcrumbItems={[{ label: "PhD Students" }]}
            />

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {phdStudents.map((student, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-foreground/40 mt-1">
                      {index + 1}.
                    </span>
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                        {student.name}
                      </h3>
                      <span
                        className={`font-sans text-sm font-medium px-3 py-1 rounded-full ${
                          student.status === "Completed"
                            ? "text-green-400 bg-green-400/10 border border-green-400/20"
                            : "text-foreground/80 bg-foreground/5 border border-foreground/10"
                        }`}
                      >
                        {student.status}
                      </span>
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
