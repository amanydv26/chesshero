"use client";

export default function ChessBoard() {
  const thickness = 24; // Physical thickness of the glass in pixels

  return (
    <div
      style={{ perspective: "1500px" }}
      className="flex h-[650px] w-full items-center justify-center "
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(68deg) rotateZ(-25deg)",
        }}
        className="relative h-[420px] w-[420px]"
      >
        {/* Ambient Glow underneath the entire thickness */}
        <div 
          style={{ transform: `translateZ(-${thickness + 25}px)` }}
          className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 opacity-40 blur-3xl pointer-events-none" 
        />

        {/* ================= PERFECTLY ALIGNED 3D SIDE WALLS ================= */}
        
        {/* BACK WALL (Top Edge) - Folds straight down */}
        <div
          style={{
            width: "420px",
            height: `${thickness}px`,
            transform: "rotateX(-90deg)",
            transformOrigin: "top left",
          }}
          className="absolute top-0 left-0 border-x border-b border-white/10 bg-white/5 backdrop-blur-2xl pointer-events-none"
        />

        {/* FRONT WALL (Bottom Edge) - Positioned at y=420px and folds straight down */}
        <div
          style={{
            width: "420px",
            height: `${thickness}px`,
            transform: "translateY(420px) rotateX(-90deg)",
            transformOrigin: "top left",
          }}
          className="absolute top-0 left-0 border-x border-b border-white/20 bg-white/15 backdrop-blur-2xl pointer-events-none"
        />

        {/* LEFT WALL (Left Edge) - Folds straight down */}
        <div
          style={{
            width: `${thickness}px`,
            height: "420px",
            transform: "rotateY(90deg)",
            transformOrigin: "top left",
          }}
          className="absolute top-0 left-0 border-y border-r border-white/20 bg-white/15 backdrop-blur-2xl pointer-events-none"
        />

        {/* RIGHT WALL (Right Edge) - Positioned at x=420px and folds straight down */}
        <div
          style={{
            width: `${thickness}px`,
            height: "420px",
            transform: "translateX(420px) rotateY(90deg)",
            transformOrigin: "top left",
          }}
          className="absolute top-0 left-0 border-y border-r border-white/10 bg-white/5 backdrop-blur-2xl pointer-events-none"
        />

        {/* BOTTOM BASE CAP - Closes the 3D block perfectly at the bottom */}
        <div
          style={{ 
            transform: `translateZ(-${thickness}px)`,
          }}
          className="absolute inset-0 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md shadow-2xl"
        />

        {/* ================= GLASS BOARD TOP SURFACE ================= */}
        <div 
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 overflow-hidden  border border-cyan-300/30 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,.25)]"
        >
          {/* Grid Layer */}
          <div className="grid h-full w-full grid-cols-8">
            {Array.from({ length: 64 }).map((_, index) => (
              <div
                key={index}
                className={`${
                  (Math.floor(index / 8) + index) % 2 === 0
                    ? "bg-[#17172a]/75" 
                    : "bg-[#5b4fd4]/75"
                } border border-white/5`}
              />
            ))}
          </div>

          {/* Fixed Glass Specular Gloss Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none z-20" />
        </div>

      </div>
    </div>
  );
}