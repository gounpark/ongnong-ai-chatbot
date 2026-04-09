const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

interface VoiceOverlayProps {
  onClose: () => void;
  transcriptionText?: string;
}

export function VoiceOverlay({ onClose, transcriptionText }: VoiceOverlayProps) {
  const isListening = !!transcriptionText;

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Dim background */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Sheet */}
      <div className="relative bg-white rounded-t-[24px] flex flex-col items-center pt-[28px] pb-[48px] px-[24px] gap-[20px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[30px] h-[30px] flex items-center justify-center text-[#888] hover:text-[#444] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M14 4L4 14M4 4L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Status label */}
        <p style={{ ...P, fontWeight: 600, fontSize: 16, color: isListening ? "#3170e2" : "#222" }}>
          {isListening ? "음성 인식 중..." : "이렇게 말해보세요."}
        </p>

        {/* Mic button */}
        <div className="relative flex items-center justify-center">
          <div className={`absolute rounded-full opacity-20 animate-pulse transition-colors duration-300 ${isListening ? "bg-[#3170e2]" : "bg-[#4a8af4]"}`}
            style={{ width: 88, height: 88 }} />
          <button className={`relative w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isListening ? "bg-[#3170e2] scale-110" : "bg-[#4a8af4]"}`}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C13.8 4 12 5.8 12 8V16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16V8C20 5.8 18.2 4 16 4Z" fill="white"/>
              <path d="M8 14V16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 24V28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 28H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Transcription text or hint */}
        <div className="w-full min-h-[52px] flex items-center justify-center px-[8px]">
          {isListening ? (
            <p style={{ ...P, fontWeight: 500, fontSize: 15, color: "#222", lineHeight: 1.6, textAlign: "center" }}>
              "{transcriptionText}"
            </p>
          ) : (
            <p style={{ ...P, fontWeight: 400, fontSize: 13, color: "#aaa", textAlign: "center" }}>
              예시) 오늘 딸기밭에 물 줬어
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
