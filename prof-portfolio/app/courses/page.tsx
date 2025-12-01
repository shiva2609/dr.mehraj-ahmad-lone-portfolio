"use client";

import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { coursesTaught } from "../data/professor";

export default function CoursesPage() {
  const ugCourses = coursesTaught.filter((c) => c.level === "UG");
  const pgCourses = coursesTaught.filter((c) => c.level === "PG");

  return (
    <PageTransition>
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <PageHeader
              title="Courses Taught"
              subtitle="Undergraduate and Postgraduate Level"
              breadcrumbItems={[{ label: "Courses Taught" }]}
            />

            <div className="space-y-8">
              {ugCourses.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Undergraduate (UG)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ugCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-card p-6"
                      >
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {course.name}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {pgCourses.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Postgraduate (PG)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pgCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-card p-6"
                      >
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {course.name}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

