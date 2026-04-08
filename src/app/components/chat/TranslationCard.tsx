import { useState } from "react";

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

function SpeakerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 5.5H4.5L8 2.5V13.5L4.5 10.5H2V5.5Z" fill="#3170e2" />
      <path d="M10.5 5.5C11.5 6.2 12 7.05 12 8C12 8.95 11.5 9.8 10.5 10.5" stroke="#3170e2" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M12 3.5C13.8 4.8 14.5 6.35 14.5 8C14.5 9.65 13.8 11.2 12 12.5" stroke="#3170e2" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5" y="5" width="8" height="9" rx="1.5" stroke="#3170e2" strokeWidth="1.3"/>
      <path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="#3170e2" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

interface TranslationCardProps {
  targetLang: string;
  targetText: string;
  sourceText: string;
  isManual?: boolean;
}

export function TranslationCard({ targetLang, targetText, sourceText, isManual }: TranslationCardProps) {
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(targetText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSpeak = () => {
    setSpeaking(true);
    setTimeout(() => setSpeaking(false), 2000);
  };

  return (
    <div className="w-full rounded-[12px] border border-[#e8e8e8] bg-white overflow-hidden">
      {/* Lang header */}
      <div className="flex items-center gap-[8px] px-[14px] py-[10px] border-b border-[#f0f0f0] bg-[#fafafa]">
        <span className="text-[16px]">{targetLang === "베트남어" ? "🇻🇳" : "🌐"}</span>
        <p style={{ ...P, fontWeight: 600, fontSize: 13, color: "#333" }}>{targetLang}</p>
        <div className="ml-auto flex items-center gap-[8px]">
          {/* Speaker button */}
          <button
            onClick={handleSpeak}
            className={`flex items-center justify-center w-[28px] h-[28px] rounded-full transition-colors ${speaking ? "bg-[#dce8ff]" : "bg-[#f0f5ff] hover:bg-[#dce8ff]"}`}
            title="읽어주기"
          >
            <SpeakerIcon />
          </button>
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`flex items-center justify-center w-[28px] h-[28px] rounded-full transition-colors ${copied ? "bg-[#dce8ff]" : "bg-[#f0f5ff] hover:bg-[#dce8ff]"}`}
            title="복사"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="#3170e2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : <CopyIcon />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] px-[14px] py-[12px]">
        {/* Translation text */}
        <p style={{ ...P, fontWeight: 500, fontSize: 14, color: "#222", lineHeight: 1.7, whiteSpace: "pre-line" }}>
          {targetText}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#f0f0f0]" />

        {/* Original source text */}
        <p style={{ ...P, fontWeight: 400, fontSize: 13, color: "#777", lineHeight: 1.6, whiteSpace: "pre-line" }}>
          {sourceText}
        </p>

        {/* Bottom action */}
        <button className="flex items-center gap-[4px] w-fit">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4H12M2 7H8M2 10H10" stroke="#3170e2" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p style={{ ...P, fontWeight: 500, fontSize: 12, color: "#3170e2" }}>
            {isManual ? "단계별 보기" : "번역 바꾸기"}
          </p>
        </button>
      </div>
    </div>
  );
}
