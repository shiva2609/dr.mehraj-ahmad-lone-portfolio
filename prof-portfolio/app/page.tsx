"use client";

import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import SectionPreview from "@/components/SectionPreview";
import { motion } from "framer-motion";
import {
  academicDetails,
  teachingExperience,
  administrativeExperience,
  coursesTaught,
  phdThesis,
  fieldsOfInterest,
  researchProjects,
  publications,
  workshopsOrganised,
  workshopsAttended,
  technicalSkills,
  phdStudents,
} from "@/app/data/professor";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <main className="pt-20">
        <Hero />

        {/* Academic Details Preview */}
        <section id="academic-details" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Academic Details
              </h2>
              <Link
                href="/academic-details"
                className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
              >
                See All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicDetails.map((detail, index) => (
                <motion.div
                  key={detail.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {detail.degree}
                  </h3>
                  <p className="font-sans text-sm text-foreground/70">
                    {detail.university}
                  </p>
                  <p className="font-sans text-xs text-foreground/60 mt-1">
                    {detail.year} • {detail.division}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Experience Preview */}
        <section id="teaching" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Teaching & Research Experience"
            items={teachingExperience}
            limit={3}
            linkTo="/teaching-experience"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.position}
              </h3>
              <p className="font-sans text-base text-foreground/80 mb-1">
                {item.institution}
              </p>
              <p className="font-sans text-sm text-foreground/60">
                {item.period}
              </p>
            </div>
          )}
          />
        </section>

        {/* Administrative Experience Preview */}
        <section id="administrative" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Administrative Experience"
            items={administrativeExperience}
            limit={3}
            linkTo="/administrative-experience"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.position}
              </h3>
              <p className="font-sans text-base text-foreground/80 mb-1">
                {item.institution}
              </p>
              <p className="font-sans text-sm text-foreground/60">
                {item.period}
              </p>
            </div>
          )}
          />
        </section>

        {/* Courses Taught - Full List */}
        <section id="courses" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Courses Taught
              </h2>
              <Link
                href="/courses"
                className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coursesTaught.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <p className="font-serif text-base font-semibold text-foreground">
                    {course.name}
                  </p>
                  <p className="font-sans text-xs text-foreground/60 mt-1">
                    {course.level}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PhD Thesis - Full */}
        <section id="phd-thesis" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                PhD Thesis
              </h2>
              <Link
                href="/phd-thesis"
                className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                {phdThesis.title}
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Fields of Interest - Full */}
        <section id="fields-of-interest" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Fields of Interest
              </h2>
              <Link
                href="/fields-of-interest"
                className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              {fieldsOfInterest.map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card px-6 py-4"
                >
                  <p className="font-serif text-lg font-semibold text-foreground">
                    {field}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Projects Preview */}
        <section id="research-projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Research Projects"
            items={researchProjects}
            limit={3}
            linkTo="/research-projects"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              {item.description && (
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          )}
          />
        </section>

        {/* Publications Preview */}
        <section id="publications" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Research Publications"
            items={publications}
            limit={3}
            linkTo="/publications"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-2 mb-2">
                <span className="font-serif text-sm text-foreground/50 mt-1">
                  {item.id}.
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground flex-1">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-foreground/80 mb-1">
                {item.journal}
              </p>
              <p className="font-sans text-xs text-foreground/60">
                {item.year}, {item.pages}
              </p>
            </div>
          )}
          />
        </section>

        {/* PhD Students Preview */}
        <section id="phd-students" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="PhD Students"
            items={phdStudents.map((student, index) => ({ id: index + 1, ...student }))}
            limit={3}
            linkTo="/phd-students"
            linkText="View Details"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.name}
                </h3>
                <span
                  className={`font-sans text-sm font-medium px-3 py-1 rounded-full ${
                    item.status === "Completed"
                      ? "text-green-400 bg-green-400/10 border border-green-400/20"
                      : "text-foreground/80 bg-foreground/5 border border-foreground/10"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          )}
          />
        </section>

        {/* Workshops Organised Preview */}
        <section id="workshops-organised" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Workshops & Conferences Organised"
            items={workshopsOrganised}
            limit={1}
            linkTo="/workshops-organised"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              {item.duration && (
                <p className="font-sans text-base text-foreground/70 mb-1">
                  {item.duration}
                </p>
              )}
              {item.date && (
                <p className="font-sans text-sm text-foreground/60">
                  {item.date}
                </p>
              )}
            </div>
          )}
          />
        </section>

        {/* Workshops Attended Preview */}
        <section id="workshops-attended" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <SectionPreview
            title="Workshops & Conferences Attended"
            items={workshopsAttended}
            limit={3}
            linkTo="/workshops-attended"
            renderItem={(item) => (
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg text-foreground/40 mt-1">
                  {item.id}.
                </span>
                <div className="flex-1">
                  {item.paperTitle ? (
                    <p className="font-sans text-sm text-foreground/60 mb-2 italic">
                      Presented: "{item.paperTitle}"
                    </p>
                  ) : null}
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="font-sans text-sm text-foreground/70 mb-1">
                      {item.location}
                    </p>
                  )}
                  {item.date && (
                    <p className="font-sans text-xs text-foreground/60">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          />
        </section>

        

        

        {/* Technical Skills - Full */}
        <section id="technical-skills" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Technical Skills
              </h2>
              <Link
                href="/technical-skills"
                className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
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

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans text-base font-medium rounded-full transition-all shadow-lg shadow-blue-600/20"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
