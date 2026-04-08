import { useState } from "react";

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

interface SubsidyItem {
  title: string;
  condition: string;
  amount: string;
  deadline: string;
}

const SUBSIDIES: SubsidyItem[] = [
  { title: "2026 스마트팜 시설 지원사업", condition: "고흥군 거주 · 마늘 재배농가", amount: "최대 3,000만원", deadline: "2026년 3월 31일까지" },
  { title: "청년농업인 창업 지원사업", condition: "만 18~40세 귀농 희망자", amount: "최대 2,000만원", deadline: "2026년 4월 30일까지" },
  { title: "친환경 농업 전환 보조금", condition: "유기농 인증 희망 농가", amount: "최대 500만원", deadline: "2026년 5월 15일까지" },
  { title: "농촌 ICT 장비 지원사업", condition: "스마트팜 도입 희망 농가", amount: "최대 1,500만원", deadline: "2026년 6월 30일까지" },
  { title: "농업 경영체 등록 지원금", condition: "신규 등록 농업 경영체", amount: "최대 300만원", deadline: "2026년 12월 31일까지" },
];

export function SubsidyCard() {
  const [current, setCurrent] = useState(0);
  const item = SUBSIDIES[current];

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full rounded-[12px] border border-[#e8e8e8] bg-white overflow-hidden">
        <div className="px-[16px] pt-[16px] pb-[14px] flex flex-col gap-[10px]">
          <p style={{ ...P, fontWeight: 700, fontSize: 15, color: "#111", lineHeight: 1.4 }}>{item.title}</p>
          <div className="flex items-center gap-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5C4 1.5 1.5 4 1.5 7C1.5 10 4 12.5 7 12.5C10 12.5 12.5 10 12.5 7C12.5 4 10 1.5 7 1.5Z" stroke="#3170e2" strokeWidth="1.2"/>
              <path d="M5 7L6.5 8.5L9.5 5.5" stroke="#3170e2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ ...P, fontWeight: 400, fontSize: 12, color: "#555", lineHeight: 1.4 }}>{item.condition}</p>
          </div>
          <div className="bg-[#f5f8ff] rounded-[8px] px-[12px] py-[10px] flex flex-col gap-[4px]">
            <p style={{ ...P, fontWeight: 400, fontSize: 11, color: "#888" }}>지원 금액</p>
            <p style={{ ...P, fontWeight: 700, fontSize: 20, color: "#3170e2", lineHeight: 1.3 }}>{item.amount}</p>
          </div>
          <p style={{ ...P, fontWeight: 400, fontSize: 12, color: "#888" }}>신청 마감: {item.deadline}</p>
        </div>
        <button className="w-full bg-[#3170e2] py-[12px] flex items-center justify-center">
          <p style={{ ...P, fontWeight: 600, fontSize: 14, color: "white" }}>자세히 보러가기</p>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-[5px]">
        {SUBSIDIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-200"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? "#3170e2" : "#ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface ChipGroupProps {
  chips: string[];
  selected?: string;
  onSelect?: (chip: string) => void;
}

export function ChipGroup({ chips, selected, onSelect }: ChipGroupProps) {
  return (
    <div className="flex flex-wrap gap-[6px]">
      {chips.map(chip => (
        <button
          key={chip}
          onClick={() => onSelect?.(chip)}
          className="px-[12px] py-[7px] rounded-full border transition-all duration-150"
          style={{
            borderColor: selected === chip ? "#3170e2" : "#ddd",
            background: selected === chip ? "#ebf1ff" : "white",
          }}
        >
          <p style={{ ...P, fontWeight: selected === chip ? 600 : 400, fontSize: 13, color: selected === chip ? "#3170e2" : "#444", lineHeight: 1 }}>
            {chip}
          </p>
        </button>
      ))}
    </div>
  );
}
