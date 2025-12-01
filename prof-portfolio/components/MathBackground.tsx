"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingSymbol {
  id: number;
  symbol: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
  opacity: number;
  driftX: number;
  driftY: number;
}

export default function MathBackground() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const mathSymbols = ["∫", "∑", "∇", "π", "θ", "λ", "∂", "∞", "Ω", "α", "β", "γ"];
    const generated: FloatingSymbol[] = Array.from({ length: 20 }, (_, index) => {
      // Random size between 2.5rem (40px) and 4.5rem (72px)
      const sizeInPx = 40 + Math.random() * 32;
      // Random opacity between 0.03 and 0.06
      const opacity = 0.03 + Math.random() * 0.03;
      // Random drift distance between 40px and 70px
      const driftX = 40 + Math.random() * 30;
      const driftY = 40 + Math.random() * 30;
      // Random speed between 12s and 24s
      const duration = 12 + Math.random() * 12;
      
      return {
        id: index,
        symbol: mathSymbols[index % mathSymbols.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration,
        delay: Math.random() * 5,
        size: sizeInPx,
        rotation: (Math.random() - 0.5) * 20,
        opacity,
        driftX,
        driftY,
      };
    });
    setSymbols(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {symbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-serif select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            willChange: "transform",
          }}
          animate={{
            y: [0, -item.driftY, item.driftY * 0.6, -item.driftY * 0.4, 0],
            x: [0, item.driftX * 0.7, -item.driftX * 0.5, item.driftX * 0.3, 0],
            rotate: [
              item.rotation,
              item.rotation + 15,
              item.rotation - 12,
              item.rotation + 8,
              item.rotation,
            ],
            scale: [1, 1.05, 0.98, 1.02, 1], // Subtle breathing effect
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
