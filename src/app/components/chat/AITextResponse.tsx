interface AITextResponseProps {
  children: React.ReactNode;
}

export function AITextResponse({ children }: AITextResponseProps) {
  return (
    <div className="w-full">
      <div
        className="font-['Pretendard:Regular',sans-serif] not-italic text-[#454545] text-[14px] leading-[1.6]"
        style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 400 }}
      >
        {children}
      </div>
    </div>
  );
}
