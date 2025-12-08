"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// Section IDs for homepage scrollspy (EXACT ORDER)
const homepageSections = [
  "hero",
  "academic-details",
  "teaching",
  "administrative",
  "courses",
  "phd-thesis",
  "fields-of-interest",
  "research-projects",
  "publications",
  "workshops-organised",
  "workshops-attended",
  "phd-students",
  "technical-skills",
  "contact",
];

// Navbar items with their corresponding section IDs
const navItems = [
  { label: "About", href: "/", sectionId: "hero" },
  { label: "Academic Details", href: "/academic-details", sectionId: "academic-details" },
  { label: "Teaching", href: "/teaching-experience", sectionId: "teaching" },
  { label: "Administrative", href: "/administrative-experience", sectionId: "administrative" },
  { label: "Research", href: "/research-projects", sectionId: "research-projects" },
  { label: "Publications", href: "/publications", sectionId: "publications" },
  { label: "PhD Students", href: "/phd-students", sectionId: "phd-students" },
];

const workshopsSubmenu = [
  { label: "Organised", href: "/workshops-organised", sectionId: "workshops-organised" },
  { label: "Attended", href: "/workshops-attended", sectionId: "workshops-attended" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Use scrollspy only on homepage
  const activeSection = useScrollSpy({
    sectionIds: isHomepage ? homepageSections : [],
    threshold: 0.45,
    rootMargin: "-20% 0px -20% 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, sectionId?: string) => {
    if (isHomepage && sectionId) {
      return activeSection === sectionId;
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    if (isHomepage && sectionId && href === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="glass-card px-6 md:px-8 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                className="font-serif text-xl md:text-2xl font-bold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Dr. M. A. Lone
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => {
                const active = isActive(item.href, item.sectionId);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.sectionId)}
                  >
                    <motion.div
                      className="relative font-sans text-sm text-foreground/80 hover:text-foreground transition-colors"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className={active ? "text-foreground" : ""}>
                        {item.label}
                      </span>
                      {active && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                          layoutId="navbar-indicator"
                          transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.4,
                          }}
                        />
                      )}
                      {!active && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}

              {/* Workshops Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setWorkshopsOpen(true)}
                onMouseLeave={() => setWorkshopsOpen(false)}
              >
                <motion.div
                  className="relative font-sans text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <span
                    className={
                      pathname?.startsWith("/workshops") ||
                      (isHomepage &&
                        (activeSection === "workshops-organised" ||
                          activeSection === "workshops-attended"))
                        ? "text-foreground"
                        : ""
                    }
                  >
                    Workshops
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      workshopsOpen ? "rotate-180" : ""
                    }`}
                  />
                  {(pathname?.startsWith("/workshops") ||
                    (isHomepage &&
                      (activeSection === "workshops-organised" ||
                        activeSection === "workshops-attended"))) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      layoutId="navbar-workshops-indicator"
                      transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.4,
                      }}
                    />
                  )}
                </motion.div>

                <AnimatePresence>
                  {workshopsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 glass-card p-2 min-w-[180px]"
                    >
                      {workshopsSubmenu.map((subItem) => {
                        const subActive = isActive(subItem.href, subItem.sectionId);
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href, subItem.sectionId)}
                          >
                            <motion.div
                              whileHover={{ x: 5 }}
                              className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                                subActive
                                  ? "bg-foreground/10 text-foreground"
                                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                              }`}
                            >
                              {subItem.label}
                            </motion.div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-medium rounded-full transition-all"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 2) * 0.05 }}
                >
                  Contact
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pt-4 border-t border-foreground/10"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const active = isActive(item.href, item.sectionId);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href, item.sectionId);
                          setMobileMenuOpen(false);
                        }}
                        className={`font-sans text-base ${
                          active ? "text-foreground font-medium" : "text-foreground/80"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/workshops-organised"
                    onClick={(e) => {
                      handleNavClick(e, "/workshops-organised", "workshops-organised");
                      setMobileMenuOpen(false);
                    }}
                    className="font-sans text-base text-foreground/80"
                  >
                    Workshops Organised
                  </Link>
                  <Link
                    href="/workshops-attended"
                    onClick={(e) => {
                      handleNavClick(e, "/workshops-attended", "workshops-attended");
                      setMobileMenuOpen(false);
                    }}
                    className="font-sans text-base text-foreground/80"
                  >
                    Workshops Attended
                  </Link>
                  <Link
                    href="/phd-students"
                    onClick={(e) => {
                      handleNavClick(e, "/phd-students", "phd-students");
                      setMobileMenuOpen(false);
                    }}
                    className="font-sans text-base text-foreground/80"
                  >
                    PhD Students
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-base text-blue-500 font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
