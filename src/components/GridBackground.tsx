// Simple grid background with CSS animation - no heavy dependencies
export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated glow spots */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] animate-pulse-slow"
        style={{ background: "rgba(0, 212, 255, 0.1)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px] animate-pulse-slow"
        style={{ background: "rgba(139, 92, 246, 0.1)", animationDelay: "2s" }}
      />
    </div>
  );
}
