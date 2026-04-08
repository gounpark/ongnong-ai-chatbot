interface FAQResponseCardProps {
  onQuestionClick?: (q: string) => void;
  onRefresh?: () => void;
}

const FAQ_QUESTIONS = [
  "오늘 내 농작업 일정 뭐 있지?",
  "최근 등록한 작업일지 요약해줘",
  "비 온 다음 날 바로 농약 살포해도 되나요?",
  "작물 수확 시기는 어떻게 판단하나요?",
];

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M7 1L8.2 5.8L13 7L8.2 8.2L7 13L5.8 8.2L1 7L5.8 5.8L7 1Z" fill="#C2D1DF" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M15.5 9A6.5 6.5 0 0 1 4.2 13.4M2.5 9A6.5 6.5 0 0 1 13.8 4.6M4.2 13.4L2 15M13.8 4.6L16 3" stroke="#757575" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FAQResponseCard({ onQuestionClick, onRefresh }: FAQResponseCardProps) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#222] leading-[1.5]">
          자주 묻는 질문을 쉽게 찾아보세요!
        </p>
        <button
          onClick={onRefresh}
          className="flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full border border-[#ddd] shrink-0 hover:bg-[#f5f5f5] transition-colors"
        >
          <RefreshIcon />
        </button>
      </div>

      {/* FAQ list */}
      <div className="flex flex-col gap-[10px] w-full">
        {FAQ_QUESTIONS.map((q, i) => (
          <button
            key={i}
            onClick={() => onQuestionClick?.(q)}
            className="w-full bg-[#f8fafc] border border-[#f0f5f9] rounded-[8px] px-[10px] py-[12px] flex items-center gap-[8px] text-left hover:bg-[#eef3f9] transition-colors"
          >
            <SparkleIcon />
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#222] leading-[1.5]">
              {q}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
