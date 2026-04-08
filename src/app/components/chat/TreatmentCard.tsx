interface TreatmentCardProps {
  diseaseName: string;
  diseaseNameEn: string;
  diagnosisBasis: string[];
  treatments: string[];
  externalLinkLabel?: string;
  onExternalLink?: () => void;
}

export function TreatmentCard({
  diseaseName,
  diseaseNameEn,
  diagnosisBasis,
  treatments,
  externalLinkLabel,
  onExternalLink,
}: TreatmentCardProps) {
  return (
    <div className="w-full rounded-[10px] border border-[#e8e8e8] bg-white overflow-hidden">
      {/* Header */}
      <div className="px-[14px] pt-[14px] pb-[10px] border-b border-[#f0f0f0]">
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#222] leading-[1.5]">
          병명: {diseaseName}{" "}
          <span className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#666]">({diseaseNameEn})</span>
        </p>
      </div>

      <div className="flex flex-col gap-[12px] px-[14px] py-[12px]">
        {/* Diagnosis basis */}
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[6px]">
            <span className="text-[13px]">✓</span>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#222]">진단 근거</p>
          </div>
          <div className="flex flex-col gap-[4px] pl-[4px]">
            {diagnosisBasis.map((item, i) => (
              <div key={i} className="flex items-start gap-[6px]">
                <span className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#666] shrink-0 mt-[1px]">•</span>
                <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#555] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[6px]">
            <span className="text-[13px]">🍓</span>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#222]">처방제안</p>
          </div>
          <div className="flex flex-col gap-[4px] pl-[4px]">
            {treatments.map((item, i) => (
              <div key={i} className="flex items-start gap-[6px]">
                <span className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#666] shrink-0 mt-[1px]">•</span>
                <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#555] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* External link */}
        {externalLinkLabel && (
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#555] leading-[1.5]">
              더 자세한 정보는 농사로 사이트에서 확인하세요.
            </p>
            <button
              onClick={onExternalLink}
              className="flex items-center gap-[4px] px-[12px] py-[6px] rounded-[8px] border border-[#ddd] bg-white hover:bg-[#f5f5f5] transition-colors w-fit"
            >
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#454545] leading-[1.5]">
                {externalLinkLabel}
              </p>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.5 3.5L3.5 3.5M10.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" stroke="#454545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
