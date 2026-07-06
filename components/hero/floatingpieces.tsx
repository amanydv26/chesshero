"use client";

import { motion } from "framer-motion";

const pieces = [
  {
    id: 1,
    piece: "♔",
    top: "8%",
    left: "6%",
    size: "90px",
    duration: 18,
    blur: "blur-sm",
    opacity: "opacity-30",
  },
  {
    id: 2,
    piece: "♞",
    top: "12%",
    right: "14%",
    size: "80px",
    duration: 22,
    blur: "",
    opacity: "opacity-50",
  },
  {
    id: 3,
    piece: "♛",
    top: "65%",
    left: "2%",
    size: "110px",
    duration: 25,
    blur: "blur-md",
    opacity: "opacity-20",
  },
  {
    id: 4,
    piece: "♜",
    bottom: "10%",
    right: "5%",
    size: "100px",
    duration: 20,
    blur: "blur-sm",
    opacity: "opacity-25",
  },
  {
    id: 5,
    piece: "♝",
    top: "35%",
    right: "42%",
    size: "70px",
    duration: 15,
    blur: "",
    opacity: "opacity-40",
  },
  {
    id: 6,
    piece: "♟",
    bottom: "22%",
    left: "40%",
    size: "60px",
    duration: 12,
    blur: "",
    opacity: "opacity-30",
  },
];

export default function FloatingPieces() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          animate={{
            y: [-25, 25, -25],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: piece.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${piece.blur} ${piece.opacity} select-none text-purple-400`}
          style={{
            top: piece.top,
            left: piece.left,
            right: piece.right,
            bottom: piece.bottom,
            fontSize: piece.size,
          }}
        >
          {piece.piece}
        </motion.div>
      ))}
    </div>
  );
}