"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#040817]" />

      {/* Left Purple Glow */}
      <div className="absolute left-[-200px] top-1/2 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[140px]" />

      {/* Right Blue Glow */}
      <div className="absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[180px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 70 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-300"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 5,
          }}
        />
      ))}
    </>
  );
}