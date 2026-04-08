import { useEffect, useState } from "react";
import sparkleImg from "../../../assets/sparkle-loading.png";

export function LoadingIndicator() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setDots(d => (d + 1) % 4), 400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex items-center gap-[10px] py-[4px]">
      <img
        src={sparkleImg}
        alt=""
        className="w-[28px] h-[28px] shrink-0 animate-pulse"
        style={{ animationDuration: "1.2s" }}
      />
      <p style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 400, fontSize: 13, color: "#888" }}>
        이 답변을 확인하고 있어요{".".repeat(dots)}
      </p>
    </div>
  );
}
