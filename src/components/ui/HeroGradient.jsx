function HeroGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,255,255,0.12),transparent_60%)]" />
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-[-22vh] sm:bottom-[-18vh] md:bottom-[-16vh]
          w-[1400px] sm:w-[1600px] md:w-[2000px]
          h-[620px] sm:h-[680px] md:h-[760px]
          opacity-[0.95]
          blur-[28px] sm:blur-[32px] md:blur-[36px]
        "
        style={{
          background: `
            radial-gradient(60% 80% at 50% 50%,
              rgba(255, 180, 58, 0.42) 0%,
              rgba(255, 77, 216, 0.40) 28%,
              rgba(108, 123, 255, 0.42) 56%,
              rgba(51, 214, 255, 0.34) 78%,
              rgba(0, 0, 0, 0) 100%
            )
          `,
          borderRadius: "999px",
          transform: "translateX(-50%) rotate(-6deg)",
        }}
      />
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-[-24vh] sm:bottom-[-20vh] md:bottom-[-18vh]
          w-[1200px] sm:w-[1450px] md:w-[1750px]
          h-[520px] sm:h-[560px] md:h-[620px]
          opacity-[0.7]
          blur-[44px] sm:blur-[48px]
        "
        style={{
          background: `
            conic-gradient(from 215deg at 50% 55%,
              rgba(255, 180, 58, 0.00) 0deg,
              rgba(255, 180, 58, 0.40) 32deg,
              rgba(255, 77, 216, 0.46) 92deg,
              rgba(108, 123, 255, 0.44) 160deg,
              rgba(51, 214, 255, 0.34) 210deg,
              rgba(255, 180, 58, 0.00) 360deg
            )
          `,
          borderRadius: "999px",
        }}
      />

      {/* White */}
      <div
        className="
          absolute left-0 right-0 bottom-0 h-40 sm:h-48 md:h-56
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, hsl(210 20% 98% / 1) 72%, hsl(210 20% 98% / 1) 100%)",
        }}
      />

      {/* Edge Softener */}
      <div
        className="absolute left-0 right-0 bottom-0 h-24"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.00) 70%)",
        }}
      />
    </div>
  );
}

export default HeroGradient;