import appleDiseaseImg from "../../../assets/apple-disease.png";
import appleHandImg from "../../../assets/apple-hand.png";
import strawberryFruitImg from "../../../assets/strawberry-fruit.png";
import strawberryLeafImg from "../../../assets/strawberry-leaf.png";

interface DiagnosisResultCardProps {
  crop: string;
  disease: string;
  confidence: number;
  showAnnotatedImage?: boolean;
  imageType?: "apple" | "strawberry-fruit" | "strawberry-leaf";
}

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

export function AppleDiseaseImage({ showBoundingBox }: { showBoundingBox: boolean }) {
  return (
    <div className="relative w-full rounded-[10px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
      <img src={appleDiseaseImg} alt="사과 병해" className="w-full h-full object-cover" />
      {showBoundingBox && (
        <div className="absolute" style={{
          top: "8%", left: "20%", width: "52%", height: "62%",
          border: "2.5px solid #e53e3e",
          borderRadius: "4px",
          boxShadow: "0 0 0 1px rgba(229,62,62,0.3)"
        }}>
          <div className="absolute -top-[18px] left-0 bg-[#e53e3e] text-white text-[10px] px-[6px] py-[2px] rounded-[3px]"
            style={{ ...P, fontWeight: 600 }}>
            탄저병 92%
          </div>
        </div>
      )}
    </div>
  );
}

export function AppleHandImage({ showBoundingBox = false }: { showBoundingBox?: boolean }) {
  return (
    <div className="relative w-full rounded-[10px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
      <img src={appleHandImg} alt="사과" className="w-full h-full object-cover" />
      {showBoundingBox && (
        <div className="absolute" style={{
          top: "12%", left: "18%", width: "58%", height: "58%",
          border: "2.5px solid #e53e3e",
          borderRadius: "4px",
          boxShadow: "0 0 0 1px rgba(229,62,62,0.3)"
        }}>
          <div className="absolute -top-[18px] left-0 bg-[#e53e3e] text-white text-[10px] px-[6px] py-[2px] rounded-[3px]"
            style={{ ...P, fontWeight: 600 }}>
            탄저병 92%
          </div>
        </div>
      )}
    </div>
  );
}

export function StrawberryFruitImage() {
  return (
    <div className="relative w-full rounded-[10px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
      <img src={strawberryFruitImg} alt="딸기" className="w-full h-full object-cover" />
    </div>
  );
}

export function StrawberryLeafImage() {
  return (
    <div className="relative w-full rounded-[10px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
      <img src={strawberryLeafImg} alt="딸기 잎" className="w-full h-full object-cover" />
    </div>
  );
}

export function DiagnosisResultCard({
  crop, disease, confidence, showAnnotatedImage = true, imageType = "apple"
}: DiagnosisResultCardProps) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className="flex flex-col gap-[4px]">
        <p style={{ ...P, fontWeight: 700, fontSize: 15, color: "#222", lineHeight: 1.5 }}>
          🍎 진단결과 : {disease}
        </p>
        <p style={{ ...P, fontWeight: 400, fontSize: 14, color: "#454545", lineHeight: 1.6 }}>
          전송해주신 이미지를 분석한 결과,{" "}
          <span style={{ ...P, fontWeight: 600, color: "#222" }}>'{disease}'</span>
          으로 의심됩니다. (정확도 {confidence}%)
        </p>
      </div>

      {showAnnotatedImage && (
        imageType === "apple"
          ? <AppleHandImage showBoundingBox={true} />
          : imageType === "strawberry-fruit"
          ? <StrawberryFruitImage />
          : <StrawberryLeafImage />
      )}
    </div>
  );
}
