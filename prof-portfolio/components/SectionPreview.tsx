"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionPreviewProps<T> {
  title: string;
  items: T[];
  limit?: number;
  linkTo: string;
  linkText?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export default function SectionPreview<T extends { id: number }>({
  title,
  items,
  limit = 3,
  linkTo,
  linkText = "See More",
  renderItem,
  className = "",
}: SectionPreviewProps<T>) {
  const displayItems = items.slice(0, limit);
  const hasMore = items.length > limit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h2>
          {hasMore && (
            <Link
              href={linkTo}
              className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 font-sans text-sm font-medium transition-colors"
            >
              {linkText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="space-y-4">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

