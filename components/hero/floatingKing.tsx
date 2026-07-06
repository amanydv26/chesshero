"use client";

import Image from "next/image";
import pawn from "@/public/black-king.png";

export default function FloatingPawn() {
  return (
    <div
      className="
        absolute
        top-24
        left-1/2
        -translate-x-1/2
        z-30
      "
    >
      {/* Glow Behind Pawn */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl scale-125" />

      {/* Pawn */}
      <Image
        src={pawn}
        alt="White Pawn"
        width={260}
        height={260}
        priority
        className="relative translate-y-12 rotate-x-10 rotate-z-10 drop-shadow-[0_0_60px_rgba(59,130,246,.8)]"
      />
    </div>
  );
}