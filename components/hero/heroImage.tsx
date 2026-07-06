"use client";

import ChessBoard from "./chessboard";
import FloatingKing from "./floatingKing";
import GlassCard from "./glassCard";

export default function HeroScene() {
  return (
    <div className="relative flex items-center justify-center h-[700px]">

      <FloatingKing />

      <ChessBoard />

      <div className="absolute top-16 left-0">
        <GlassCard
          title="Players Online"
          value="10,284"
        />
      </div>

      <div className="absolute bottom-20 right-0">
        <GlassCard
          title="AI Analysis"
          value="98.7%"
        />
      </div>

      <div className="absolute bottom-0 left-10">
        <GlassCard
          title="Live Tournament"
          value="Blitz Finals"
        />
      </div>

    </div>
  );
}