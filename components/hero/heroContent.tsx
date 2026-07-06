"use client";
import { motion } from "framer-motion";
import HeroButtons from "./heroButton";
import HeroStats from "./herostats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
      }}
      className="space-y-8"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
        ⭐ Trusted by Chess Communities
      </div>

      {/* Heading */}

      <div className="space-y-4">
        <h1 className="text-5xl font-black leading-tight md:text-6xl xl:text-7xl">
          Build the Future of{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Chess
          </span>
          <br />
          Communities
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-300">
          Create tournaments, teach students, manage clubs, host events,
          and grow your chess community with one modern platform.
        </p>
      </div>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}