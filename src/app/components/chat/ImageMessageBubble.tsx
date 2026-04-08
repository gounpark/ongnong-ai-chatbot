import { AppleHandImage, StrawberryFruitImage, StrawberryLeafImage } from "./DiagnosisResultCard";

interface ImageMessageBubbleProps {
  text?: string;
  timestamp: string;
  imageType: "apple" | "strawberry-fruit" | "strawberry-leaf";
}

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

export function ImageMessageBubble({ text, timestamp, imageType }: ImageMessageBubbleProps) {
  return (
    <div className="flex flex-col gap-[6px] items-end max-w-[260px]">
      <div className="w-full rounded-[12px] overflow-hidden shadow-sm">
        {imageType === "apple" && <AppleHandImage />}
        {imageType === "strawberry-fruit" && <StrawberryFruitImage />}
        {imageType === "strawberry-leaf" && <StrawberryLeafImage />}
      </div>
      {text && (
        <div className="bg-[#c9e331] px-[12px] py-[8px] rounded-[8px] max-w-full">
          <p style={{ ...P, fontWeight: 500, fontSize: 14, color: "#222", lineHeight: 1.5 }}>
            {text}
          </p>
        </div>
      )}
      <p style={{ ...P, fontWeight: 400, fontSize: 11, color: "#888", lineHeight: 1.5 }}>
        {timestamp}
      </p>
    </div>
  );
}
