import ncpmsFavicon from "../../../assets/favicon-ncpms.png";
import rdaFavicon from "../../../assets/favicon-rda.png";
import nongsaroFavicon from "../../../assets/favicon-nongsaro.png";

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

interface SourceBadgeProps {
  onOpen?: () => void;
  type?: "disease" | "subsidy";
  highlighted?: boolean;
}

export function SourceBadge({ onOpen, type = "disease", highlighted = false }: SourceBadgeProps) {
  const favicons = type === "subsidy"
    ? [rdaFavicon, nongsaroFavicon]
    : [rdaFavicon, ncpmsFavicon, nongsaroFavicon];

  return (
    <button
      onClick={onOpen}
      className={`flex items-center gap-[6px] px-[10px] py-[6px] rounded-full border w-fit transition-all duration-200 ${
        highlighted
          ? "bg-[#dce8ff] border-[#3170e2] scale-95 shadow-sm"
          : "bg-white border-[#e8e8e8] hover:bg-[#f5f5f5]"
      }`}
    >
      <div className="flex items-center">
        {favicons.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-[16px] h-[16px] rounded-[3px] object-contain"
            style={{ marginLeft: i === 0 ? 0 : -4, boxShadow: "0 0 0 1px white" }}
          />
        ))}
      </div>
      <p style={{ ...P, fontWeight: 400, fontSize: 12, color: "#666" }}>답변 출처</p>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M3.5 2L6.5 5L3.5 8" stroke="#bbb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
