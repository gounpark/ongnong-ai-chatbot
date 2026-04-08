import { AppleDiseaseImage, StrawberryLeafImage } from "./DiagnosisResultCard";

interface ReferenceImageCardProps {
  type: "apple-ring-rot" | "strawberry-leaf";
  onViewOther?: () => void;
}

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

export function ReferenceImageCard({ type, onViewOther }: ReferenceImageCardProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <p style={{ ...P, fontWeight: 600, fontSize: 13, color: "#333", lineHeight: 1.5 }}>
        📷 아래 사진과 같은 증상이 보이나요?
      </p>
      {type === "apple-ring-rot" ? <AppleDiseaseImage showBoundingBox={false} /> : <StrawberryLeafImage />}
      <button
        onClick={onViewOther}
        className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] border border-[#ddd] bg-white hover:bg-[#f5f5f5] transition-colors w-fit"
      >
        <p style={{ ...P, fontWeight: 500, fontSize: 12, color: "#454545", lineHeight: 1.5 }}>
          다른 이미지 확인하기
        </p>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2L10 7L5 12" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
