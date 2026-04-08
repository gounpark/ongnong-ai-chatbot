import svgPaths from "../../imports/svg-rv1bmyf9dl";

function RefreshIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="material-symbols-light:refresh">
          <path d={svgPaths.p1664e180} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QuestionIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="FAQ item icon">
          <path d={svgPaths.p2e110b00} fill="var(--fill-0, #C2D1DF)" id="Vector" />
          <path d={svgPaths.pb0f8e00} fill="var(--fill-0, #C2D1DF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function QuestionItem({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#f0f5f9] transition-colors" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#f0f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <QuestionIcon />
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SuggestedQuestions({ onQuestionClick }: { onQuestionClick: (question: string) => void }) {
  const questions = [
    "오늘 내 농작업 일정 뭐 있지?",
    "최근 등록한 작업일지 요약해줘",
    "비 온 다음 날 바로 농약 살포해도 되나요?",
    "작물 수확 시기는 어떻게 판단하나요?"
  ];

  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-end left-1/2 top-[292px]">
      {/* Header */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
            다른 농업인들이
            <br aria-hidden="true" />
            {`최근에 물어본 질문은? `}
          </p>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <RefreshIcon />
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full">
        {questions.map((question, index) => (
          <QuestionItem key={index} text={question} onClick={() => onQuestionClick(question)} />
        ))}
      </div>
    </div>
  );
}
