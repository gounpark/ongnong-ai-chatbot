interface ChatContainerProps {
  children: React.ReactNode;
  timestamp?: string;
}

export function ChatContainer({ children, timestamp }: ChatContainerProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start w-[335px]">
      {children}
      {timestamp && (
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic text-[#888] text-[11px] w-full">
          <p className="leading-[1.5]">{timestamp}</p>
        </div>
      )}
    </div>
  );
}
