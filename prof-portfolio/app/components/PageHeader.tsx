"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbItems,
}: PageHeaderProps) {
  return (
    <div className="mb-12">
      <Breadcrumb items={breadcrumbItems} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-lg text-foreground/70 mb-6">{subtitle}</p>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

