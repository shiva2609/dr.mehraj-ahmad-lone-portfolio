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
}

export default function FloatingSymbols() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const mathSymbols = ["∫", "∑", "∇", "π", "θ", "λ"];
    const generated: FloatingSymbol[] = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      symbol: mathSymbols[index % mathSymbols.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 10,
      size: 80 + Math.random() * 80,
    }));
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
            opacity: 0.04,
          }}
          animate={{
            y: [0, -40, 20, -30, 0],
            x: [0, 20, -15, 25, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            willChange: "transform",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}

