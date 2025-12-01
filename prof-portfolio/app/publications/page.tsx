"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { publications } from "../data/professor";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PublicationsPage() {
  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <PageHeader
              title="Research Publications"
              subtitle={`Total: ${publications.length} publications`}
              breadcrumbItems={[{ label: "Publications" }]}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {publications.map((pub) => (
                <motion.div
                  key={pub.id}
                  variants={itemVariants}
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
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

