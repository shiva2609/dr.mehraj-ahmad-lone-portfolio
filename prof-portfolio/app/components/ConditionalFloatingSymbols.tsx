"use client";

import { usePathname } from "next/navigation";
import MathBackground from "./MathBackground";

export default function ConditionalFloatingSymbols() {
  const pathname = usePathname();
  
  // Only show floating symbols on homepage
  if (pathname === "/") {
    return <MathBackground />;
  }
  
  return null;
}

