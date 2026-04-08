import { useEffect, useState } from "react";
import rdaFavicon from "../../../assets/favicon-rda.png";
import ncpmsFavicon from "../../../assets/favicon-ncpms.png";
import nongsaroFavicon from "../../../assets/favicon-nongsaro.png";

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

interface Source {
  favicon: string;
  name: string;
  url: string;
  desc: string;
}

const SOURCES_DISEASE: Source[] = [
  {
    favicon: rdaFavicon,
    name: "농촌진흥청",
    url: "nongsaro.go.kr",
    desc: "딸기 생리장해·병해충 진단 정보 · 과실 갈변, 부패, 생육 이상 원인 분석...",
  },
  {
    favicon: ncpmsFavicon,
    name: "국가농작물병해충관리시스템 (NCPMS)",
    url: "ncpms.rda.go.kr",
    desc: "딸기 병해충 도감 · 잿빛곰팡이병, 탄저병, 응애 피해 증상 비교...",
  },
  {
    favicon: nongsaroFavicon,
    name: "농사로",
    url: "nongsaro.go.kr",
    desc: "딸기 재배기술 정보 · 시설 환경관리 및 병해충 예방 가이드...",
  },
  {
    favicon: rdaFavicon,
    name: "농업기술센터 작물 병해충 상담자료",
    url: "rda.go.kr",
    desc: "딸기 재배 현장 병해 진단 사례 · 병해 발생 원인 분석 및 관리방법 안내...",
  },
];

const SOURCES_SUBSIDY: Source[] = [
  {
    favicon: rdaFavicon,
    name: "농림축산식품부",
    url: "mafra.go.kr",
    desc: "2026 스마트팜 지원사업 공고 · 신청 자격, 지원 금액, 마감일 안내...",
  },
  {
    favicon: nongsaroFavicon,
    name: "농사로",
    url: "nongsaro.go.kr",
    desc: "농업 보조금 및 지원사업 정보 · 지역별 맞춤 보조금 검색...",
  },
];

interface SourceSheetProps {
  onClose: () => void;
  type?: "disease" | "subsidy";
}

export function SourceSheet({ onClose, type = "disease" }: SourceSheetProps) {
  const [visible, setVisible] = useState(false);
  const sources = type === "subsidy" ? SOURCES_SUBSIDY : SOURCES_DISEASE;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 280);
  }

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col justify-end"
      style={{ background: visible ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)", transition: "background 0.28s ease" }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-t-[20px] w-full overflow-hidden"
        style={{
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.28s ease",
          maxHeight: "70%",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-[12px] pb-[4px]">
          <div className="w-[36px] h-[4px] bg-[#e0e0e0] rounded-full" />
        </div>

        {/* Title */}
        <div className="px-[20px] py-[14px] border-b border-[#f0f0f0]">
          <p style={{ ...P, fontWeight: 600, fontSize: 16, color: "#111" }}>출처</p>
        </div>

        {/* Source list */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(70vh - 80px)" }}>
          {sources.map((src, i) => (
            <div key={i} className="flex flex-col gap-[6px] px-[20px] py-[16px] border-b border-[#f8f8f8]">
              <div className="flex items-center gap-[8px]">
                <img src={src.favicon} alt="" className="w-[20px] h-[20px] rounded-[4px] shrink-0 object-contain" />
                <div className="flex flex-col">
                  <p style={{ ...P, fontWeight: 600, fontSize: 13, color: "#111", lineHeight: 1.4 }}>{src.name}</p>
                  <p style={{ ...P, fontWeight: 400, fontSize: 11, color: "#999", lineHeight: 1.4 }}>{src.url}</p>
                </div>
              </div>
              <p style={{ ...P, fontWeight: 400, fontSize: 13, color: "#555", lineHeight: 1.6 }}>
                {src.desc}{" "}
                <span style={{ ...P, fontWeight: 500, fontSize: 13, color: "#3170e2" }}>더보기</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
