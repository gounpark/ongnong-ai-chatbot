interface VoiceOverlayProps {
  onClose: () => void;
}

export function VoiceOverlay({ onClose }: VoiceOverlayProps) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Dim background */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      {/* Sheet */}
      <div className="relative bg-white rounded-t-[24px] flex flex-col items-center pt-[28px] pb-[48px] px-[24px] gap-[24px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[30px] h-[30px] flex items-center justify-center text-[#888] hover:text-[#444] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M14 4L4 14M4 4L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Title */}
        <div className="flex flex-col items-center gap-[8px]">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[18px] text-[#222] leading-[1.4]">
            이렇게 말해보세요.
          </p>
          <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#888] leading-[1.5]">
            예시) 씨감자 언제 심어야 해?
          </p>
        </div>

        {/* Mic button */}
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#4a8af4] opacity-20 scale-125 animate-pulse" />
          <button className="relative w-[72px] h-[72px] rounded-full bg-[#4a8af4] flex items-center justify-center shadow-lg hover:bg-[#3a7ae4] active:scale-95 transition-all">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C13.8 4 12 5.8 12 8V16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16V8C20 5.8 18.2 4 16 4Z" fill="white"/>
              <path d="M8 14V16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 24V28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 28H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
