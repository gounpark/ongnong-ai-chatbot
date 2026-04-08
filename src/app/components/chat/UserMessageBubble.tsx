interface UserMessageBubbleProps {
  message: string;
  timestamp: string;
}

export function UserMessageBubble({ message, timestamp }: UserMessageBubbleProps) {
  return (
    <div className="flex flex-col gap-[8px] items-end">
      <div className="bg-[#c9e331] content-stretch flex items-center justify-center max-w-[280px] px-[12px] py-[8px] rounded-[8px]">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic text-[#222] text-[14px]">
          <p className="leading-[1.5]">{message}</p>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic text-[#888] text-[11px] whitespace-nowrap">
        <p className="leading-[1.5]">{timestamp}</p>
      </div>
    </div>
  );
}
