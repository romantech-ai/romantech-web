// Premium grid background with organic blob animations
export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(147, 102, 255, 0.12) 0%, transparent 50%)",
        }}
      />

      {/* Grid pattern - slightly more visible */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Organic blob - cyan */}
      <div
        className="blob absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[128px]"
        style={{
          background: "rgba(0, 200, 240, 0.1)",
        }}
      />

      {/* Organic blob - purple */}
      <div
        className="blob-delayed absolute bottom-1/4 right-1/4 w-[450px] h-[450px] blur-[128px]"
        style={{
          background: "rgba(147, 102, 255, 0.1)",
        }}
      />

      {/* Subtle accent blob - top right */}
      <div
        className="blob absolute -top-20 right-1/3 w-[300px] h-[300px] blur-[100px]"
        style={{
          background: "rgba(0, 200, 240, 0.05)",
          animationDuration: "12s",
        }}
      />
    </div>
  );
}
