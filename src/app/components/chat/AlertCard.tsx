interface AlertCardProps {
  emoji: string;
  title: string;
  message: string;
}

export function AlertCard({ emoji, title, message }: AlertCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start w-full">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic text-[#222] text-[14px] w-full">
        <p className="leading-[1.5]">{emoji} {title}</p>
      </div>
      <div className="content-stretch flex items-center justify-center max-w-[335px] w-full">
        <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic text-[#454545] text-[14px]">
          <p className="leading-[1.5]">{message}</p>
        </div>
      </div>
    </div>
  );
}
