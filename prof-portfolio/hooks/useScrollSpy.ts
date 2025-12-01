"use client";

import { useState, useEffect, useRef } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSpy({
  sectionIds,
  threshold = 0.45,
  rootMargin = "-20% 0px -20% 0px",
}: UseScrollSpyOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastActiveRef = useRef<string | null>(null);
  const exitThresholdRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observers: IntersectionObserver[] = [];
    const sectionElements: Map<string, Element> = new Map();
    const sectionRatios = new Map<string, number>();

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      // Find all section elements
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          sectionElements.set(id, element);
        }
      });

      if (sectionElements.size === 0) return;

      // Create intersection observers with multiple thresholds
      sectionElements.forEach((element, id) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const ratio = entry.intersectionRatio;
              sectionRatios.set(id, ratio);

              // Update exit threshold tracking with hysteresis
              if (entry.isIntersecting && ratio >= threshold) {
                // Section is entering/active - set exit threshold to 0.3 (30%)
                exitThresholdRef.current.set(id, 0.3);
              } else if (!entry.isIntersecting || ratio < (exitThresholdRef.current.get(id) || 0.3)) {
                // Section is exiting - track when it drops below 30%
                if (ratio < 0.3) {
                  exitThresholdRef.current.set(id, ratio);
                }
              }

              // Determine active section with hysteresis (40-50% entry, 30% exit)
              const activeSections = Array.from(sectionRatios.entries())
                .filter(([_, ratio]) => ratio >= threshold)
                .sort((a, b) => {
                  // Sort by position in DOM (order in sectionIds array)
                  const aIndex = sectionIds.indexOf(a[0]);
                  const bIndex = sectionIds.indexOf(b[0]);
                  return aIndex - bIndex;
                });

              if (activeSections.length > 0) {
                // Get the section that's most centered in viewport
                const viewportCenter = window.innerHeight / 2;
                let bestSection = activeSections[0][0];
                let minDistance = Infinity;

                activeSections.forEach(([id]) => {
                  const element = document.getElementById(id);
                  if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportCenter - sectionCenter);
                    if (distance < minDistance) {
                      minDistance = distance;
                      bestSection = id;
                    }
                  }
                });

                // Apply hysteresis: only switch if current section exits below 30%
                const currentRatio = sectionRatios.get(bestSection) || 0;
                const lastActive = lastActiveRef.current;

                if (
                  !lastActive ||
                  bestSection === lastActive ||
                  (lastActive && (sectionRatios.get(lastActive) || 0) < 0.3)
                ) {
                  // Only activate if section is at least 40-50% visible
                  if (currentRatio >= threshold) {
                    setActiveSection(bestSection);
                    lastActiveRef.current = bestSection;
                  }
                }
              } else {
                // No sections meet threshold - check if we're at top
                if (window.scrollY < 100) {
                  setActiveSection(sectionIds[0]);
                  lastActiveRef.current = sectionIds[0];
                } else if (lastActiveRef.current) {
                  // Keep last active until new one is found
                  const lastElement = document.getElementById(lastActiveRef.current);
                  if (lastElement) {
                    const rect = lastElement.getBoundingClientRect();
                    if (rect.bottom > 0) {
                      // Still keep it active
                      return;
                    }
                  }
                }
              }
            });
          },
          {
            threshold: [0.0, 0.25, 0.5, 0.75, 1],
            rootMargin,
          }
        );

        observer.observe(element);
        observers.push(observer);
      });

      // Set initial active section
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0]);
        lastActiveRef.current = sectionIds[0];
      }
    }, 150);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}
