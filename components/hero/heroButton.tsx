"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500"
      >
        Get Started
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10"
      >
        Watch Demo
      </motion.button>
    </div>
  );
}