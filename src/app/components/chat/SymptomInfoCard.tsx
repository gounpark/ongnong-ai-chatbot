interface SymptomSection {
  icon: string;
  title: string;
  items: { name?: string; desc: string }[];
}

interface SymptomInfoCardProps {
  sections: SymptomSection[];
}

export function SymptomInfoCard({ sections }: SymptomInfoCardProps) {
  return (
    <div className="w-full rounded-[10px] border border-[#e8e8e8] bg-white overflow-hidden">
      {/* Card header */}
      <div className="px-[14px] pt-[14px] pb-[10px] border-b border-[#f0f0f0]">
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#222] leading-[1.5]">
          발생환경 및 증상
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-[12px] px-[14px] py-[12px]">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-[6px]">
            {/* Section title */}
            <div className="flex items-center gap-[6px]">
              <span className="text-[13px]">{section.icon}</span>
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#222] leading-[1.5]">
                {section.title}
              </p>
            </div>
            {/* Items */}
            <div className="flex flex-col gap-[4px] pl-[4px]">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[6px]">
                  <span className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#666] leading-[1.5] flex-shrink-0 mt-[1px]">•</span>
                  <div className="flex flex-col">
                    {item.name && (
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#333] leading-[1.5]">
                        {item.name}
                      </p>
                    )}
                    <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#555] leading-[1.5]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
