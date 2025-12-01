"use client";

import Link from "next/link";
import { contactInfo } from "../data/professor";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-sans text-sm text-foreground/70 mb-1">
              {contactInfo.email}
            </p>
            <p className="font-sans text-xs text-foreground/60">
              {contactInfo.officialAddress}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-sans text-xs text-foreground/60">
              © {currentYear} Dr. Mehraj Ahmad Lone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

