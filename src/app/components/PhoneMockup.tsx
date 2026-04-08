export function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        width: 399,
        background: "#1c1c1e",
        borderRadius: 54,
        padding: "14px 12px 14px",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.45), inset 0 0 0 1.5px #3a3a3c, inset 0 0 0 3px #2c2c2e",
        flexShrink: 0,
      }}
    >
      {/* Side buttons (decorative) */}
      <div style={{ position: "absolute", left: -3, top: 120, width: 3, height: 36, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: 168, width: 3, height: 64, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: 244, width: 3, height: 64, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", right: -3, top: 180, width: 3, height: 80, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />

      {/* Screen */}
      <div
        style={{
          width: 375,
          height: 812,
          background: "white",
          borderRadius: 44,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 34,
            background: "#1c1c1e",
            borderRadius: 20,
            zIndex: 100,
          }}
        />
        {children}
      </div>
    </div>
  );
}
