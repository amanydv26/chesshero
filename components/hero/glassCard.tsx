"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

export default function GlassCard({ title, value }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      shadow-2xl
      min-w-[170px]
      "
    >
      <h4 className="text-sm text-gray-400">
        {title}
      </h4>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </motion.div>
  );
}