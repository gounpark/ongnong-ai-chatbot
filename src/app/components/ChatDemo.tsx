import { useState, useEffect, useRef } from "react";
import { PhoneMockup } from "./PhoneMockup";
import { useIsMobile } from "../hooks/useIsMobile";
import { ChatHeader } from "./chat/ChatHeader";
import { BottomInput } from "./BottomInput";
import { UserMessageBubble } from "./chat/UserMessageBubble";
import { AIResponseHeader } from "./chat/AIResponseHeader";
import { AITextResponse } from "./chat/AITextResponse";
import { FarmingLogCard } from "./chat/FarmingLogCard";
import { ActionButton } from "./chat/ActionButton";
import { AlertCard } from "./chat/AlertCard";
import { ChatContainer } from "./chat/ChatContainer";
import { Divider } from "./chat/Divider";
import { DiagnosisResultCard } from "./chat/DiagnosisResultCard";
import { SymptomInfoCard } from "./chat/SymptomInfoCard";
import { ImageMessageBubble } from "./chat/ImageMessageBubble";
import { FAQResponseCard } from "./chat/FAQResponseCard";
import { VoiceOverlay } from "./chat/VoiceOverlay";
import { TreatmentCard } from "./chat/TreatmentCard";
import { ExtraPhotoCard } from "./chat/ExtraPhotoCard";
import { ReferenceImageCard } from "./chat/ReferenceImageCard";
import { SourceBadge } from "./chat/SourceBadge";
import { SourceSheet } from "./chat/SourceSheet";
import { SubsidyCard, ChipGroup } from "./chat/SubsidyCard";
import { TranslationCard } from "./chat/TranslationCard";
import { LoadingIndicator } from "./chat/LoadingIndicator";

export type ScenarioType = "apple" | "strawberry" | "subsidy" | "translation" | "farming" | "faq";

interface ChatDemoProps {
  initialQuestion?: string;
  scenario?: ScenarioType;
  onBack?: () => void;
}

const P: React.CSSProperties = { fontFamily: "'Pretendard', sans-serif" };

function getTimestamp() {
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  return `${h < 12 ? "오전" : "오후"} ${h % 12 || 12}:${String(m).padStart(2, "0")}`;
}

// ─── Message types ────────────────────────────────────────────────────────────
type MsgKind = "user-text" | "user-image" | "ai";
interface ChatMsg {
  id: string;
  kind: MsgKind;
  text?: string;
  imageType?: "apple" | "strawberry-fruit" | "strawberry-leaf";
  content?: React.ReactNode;
  ts: string;
}

// ─── AI Content components ────────────────────────────────────────────────────
function AppleDiagnosisContent({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <DiagnosisResultCard crop="사과" disease="사과 탄저병" confidence={92} showAnnotatedImage imageType="apple" />
      <SymptomInfoCard sections={[
        { icon: "✓", title: "발생 시기 및 환경", items: [
          { desc: "주로 여름철 장마기 등 다습한 상황에서 발생합니다." },
          { desc: "과실 표면에 흑갈색 또는 갈색의 원형 반점이 생기며, 빠르게 20~30mm 크기로 커지고 반점이 움푹 패입니다." },
        ]},
        { icon: "🔍", title: "방제 농약 추천", items: [
          { name: "디티아논 수화제", desc: "물과 800배 희석, 수확 21일전 5회" },
          { name: "아족시스트로빈 수화제", desc: "물 2,000배 내외, 7~10일 간격, 수확 7일 전" },
        ]},
      ]} />
      <SourceBadge onOpen={onSrc} />
    </div>
  );
}

function AppleTextContent({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <AITextResponse>
        <p>사과 표면의 갈색 반점은 주로{" "}
          <span style={{ ...P, fontWeight: 600, color: "#222" }}>"겹무늬썩음병"</span>에
          의해 생기는 경우가 많아요. 과실 표면이 담갈색에서 점차 퍼지며 썩는 특징이 있습니다.
        </p>
      </AITextResponse>
      <SymptomInfoCard sections={[
        { icon: "✓", title: "발생 시기 및 환경", items: [
          { desc: "주로 7~8월" },
          { desc: "장마철과 같이 고온다습하고, 과실 표면에 습기가 오래 남아있는 환경에서 발생합니다." },
        ]},
        { icon: "🍎", title: "증상", items: [
          { desc: "과실 표면에 갈색의 둥글고 작은 반점이 생기고, 점차 병반이 원형 또는 띠모양으로 퍼지며 과육이 검거나 갈색으로 썩습니다." },
        ]},
      ]} />
      <ReferenceImageCard type="apple-ring-rot" />
      <SourceBadge onOpen={onSrc} />
    </div>
  );
}

function StrawberryStage1Content({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <AITextResponse>
        <p>사진을 확인했습니다.<br />현재 딸기에서 아래와 같은 특징이 관찰되었습니다.</p>
      </AITextResponse>
      <div className="flex flex-col gap-[6px]">
        {["과실 표면에 갈색 반점 및 침식 흔적", "색이 어둡고 표면이 물러짐"].map((obs, i) => (
          <div key={i} className="flex items-start gap-[8px]">
            <span style={{ ...P, fontWeight: 600, fontSize: 13, color: "#3170e2", flexShrink: 0, width: 18 }}>{i + 1}.</span>
            <p style={{ ...P, fontWeight: 400, fontSize: 14, color: "#454545", lineHeight: 1.5 }}>{obs}</p>
          </div>
        ))}
      </div>
      <ExtraPhotoCard message="이런 증상은 영양 부족, 병해, 생리장해 등이 원인일 수 있습니다. 정확한 진단을 위해 추가 사진을 업로드해 주세요." />
      <SourceBadge onOpen={onSrc} />
    </div>
  );
}

function StrawberryStage2Content({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <AITextResponse>
        <p>업로드하신 딸기 사진을 분석한 결과, 딸기 병해의 공통 증상으로 미루어 아래와 같은 병해 가능성이 있습니다.</p>
      </AITextResponse>
      <TreatmentCard
        diseaseName="탄저병"
        diseaseNameEn="Anthracnose"
        diagnosisBasis={["잎의 반점과 변색의 확산", "과실의 성장부진", "줄기 갈변 및 검은 반점, 곰팡이 흔적"]}
        treatments={["병든 잎/줄기 제거", "통풍 유지", "약제 살포"]}
        externalLinkLabel="농사로 바로가기"
      />
      <AlertCard emoji="⚡" title="방제 권장" message="다음 살포는 4~5일 후에 진행하시는 것을 추천드리며, 해당 진단 결과를 재배 캘린더에 등록해 드릴까요?" />
      <SourceBadge onOpen={onSrc} />
    </div>
  );
}

function SubsidyStep1Content() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse>
        <p>OOO님 안녕하세요? 몇 가지 질문에 답해주시면 딱 맞는 보조금을 추천해 드릴게요</p>
      </AITextResponse>
      <div className="flex flex-col gap-[8px]">
        <p style={{ ...P, fontWeight: 500, fontSize: 13, color: "#333" }}>어떤 지역에서 활동하고 있나요?</p>
        <ChipGroup chips={["전국","경기","강원","충북","충남","전북","경북","경남","제주","직접입력"]} selected="충남" />
      </div>
    </div>
  );
}

function SubsidyStep2Content() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse><p>어떤 분야에 종사하고 계신가요?</p></AITextResponse>
      <ChipGroup chips={["농업","축산업","임업","기타"]} selected="농업" />
    </div>
  );
}

function SubsidyStep3Content() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse><p>대상유형을 알려주세요</p></AITextResponse>
      <ChipGroup chips={["청년농업인","고령 농업인","초보농업인","귀농귀촌자","기타"]} selected="청년농업인" />
    </div>
  );
}

function SubsidyStep4Content() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse><p>최근에 신청을 희망하시나요, 아니면 예정이신가요?</p></AITextResponse>
      <ChipGroup chips={["현재모집 중","신청 예정"]} selected="신청 예정" />
    </div>
  );
}

function SubsidyResultContent({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <AITextResponse>
        <p>조건에 맞는 보조금을 찾았어요!<br />가장 적합한 순서부터 차례로 보여드릴게요.</p>
      </AITextResponse>
      <SubsidyCard />
      <SourceBadge onOpen={onSrc} type="subsidy" />
    </div>
  );
}

function TranslationStep1Content({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse><p>베트남어로 안내 드릴게요.</p></AITextResponse>
      <TranslationCard
        targetLang="베트남어"
        targetText="Từ 9 giờ sáng mai, bắt đầu trồng khoai tây gừng."
        sourceText="내일 오전 9시부터 비강자 심기"
      />
      <SourceBadge onOpen={onSrc} type="subsidy" />
    </div>
  );
}

function TranslationStep2Content({ onSrc }: { onSrc: () => void }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <AITextResponse><p>베트남어로 안내 드릴게요.</p></AITextResponse>
      <TranslationCard
        targetLang="베트남어"
        targetText={"Quản lý OOO sẽ giải thích cách trồng vào ngày mai:\n1. Hãy sử dụng khoai tây gừng đã mọc mầm.\n2. Đào lỗ cách nhau khoảng 30cm.\n3. Đặt khoai vào lỗ rồi lấp đất lại.\n4. Tưới nước đầy đủ."}
        sourceText={"OOO매니저 내일 심는 법:\n1. 싹이 튼 비강자를 사용해.\n2. 30cm 간격으로 줄에 놓고 심어줘.\n3. 뿌리 넣고 흙으로 덮어줘.\n4. 물을 충분히 줘."}
        isManual
      />
      <SourceBadge onOpen={onSrc} type="subsidy" />
    </div>
  );
}

function FarmingStep1Content({ onAdjust }: { onAdjust: () => void }) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <AITextResponse>
        <p><span style={{ ...P, fontWeight: 600, color: "#222" }}>오늘(2025년 7월 22일)</span>{" "}
        작업 내용을 현재 위치와 날씨 정보를 기준으로 등록된 농장에 자동 기록했습니다.</p>
      </AITextResponse>
      <FarmingLogCard data={{ date: "2025년 07월 22일", farm: "홍길동의 딸기농장", weather: "맑음 / 28°C", crop: "딸기", work: "물주기", fertilizer: "5kg" }} />
      <div className="flex flex-col gap-[8px]">
        <p style={{ ...P, fontWeight: 400, fontSize: 14, color: "#454545", lineHeight: 1.5 }}>
          더 자세한 정보는 영농일지에서 확인하실 수 있습니다.
        </p>
        <div className="w-fit">
          <ActionButton label="영농일지 보기" />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-[10px]">
        <AlertCard emoji="⚡️" title="주의" message="다음 주 화요일에는 비가 내릴 예정입니다. ☔ 후속 물주기 날짜를 수요일로 조정하시겠어요?" />
        <div className="flex gap-[8px]">
          <button
            onClick={onAdjust}
            className="flex items-center justify-center gap-[6px] px-[14px] py-[9px] rounded-[8px] border border-[#3170e2] bg-[#ebf1ff] hover:bg-[#dce8ff] transition-colors"
          >
            <span style={{ ...P, fontWeight: 600, fontSize: 13, color: "#3170e2" }}>네, 수요일로 조정할게요</span>
          </button>
          <button
            className="flex items-center justify-center gap-[6px] px-[14px] py-[9px] rounded-[8px] border border-[#ddd] bg-white hover:bg-[#f5f5f5] transition-colors"
          >
            <span style={{ ...P, fontWeight: 500, fontSize: 13, color: "#666" }}>아니오</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function FarmingStep2Content() {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <AITextResponse>
        <p>
          <span style={{ ...P, fontWeight: 600, color: "#222" }}>영농 일지의 후속 일정을 2025-07-30(수요일)로 업데이트</span> 하겠습니다.
        </p>
      </AITextResponse>
      <div className="w-full rounded-[10px] border border-[#e8e8e8] bg-white overflow-hidden">
        <div className="px-[14px] pt-[12px] pb-[10px] border-b border-[#f0f0f0] flex items-center gap-[6px]">
          <span>📅</span>
          <p style={{ ...P, fontWeight: 600, fontSize: 13, color: "#222" }}>일정 추가 제안</p>
        </div>
        <div className="flex flex-col gap-[6px] px-[14px] py-[12px]">
          {[
            { label: "작업", value: "물주기 (딸기밭)" },
            { label: "날짜", value: "2025년 7월 30일 (수요일)" },
            { label: "농장", value: "홍길동의 딸기농장" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-[8px]">
              <p style={{ ...P, fontWeight: 400, fontSize: 12, color: "#999", width: 40 }}>{row.label}</p>
              <p style={{ ...P, fontWeight: 500, fontSize: 13, color: "#333" }}>{row.value}</p>
            </div>
          ))}
        </div>
        <div className="px-[14px] pb-[14px]">
          <button className="w-full py-[10px] rounded-[8px] bg-[#3170e2] flex items-center justify-center">
            <p style={{ ...P, fontWeight: 600, fontSize: 13, color: "white" }}>작물 재배 캘린더에 등록하기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function FaqContent({ onVoice }: { onVoice: () => void }) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <FAQResponseCard />
      <button onClick={onVoice} className="flex items-center gap-[8px] px-[16px] py-[10px] bg-[#3170e2] rounded-full shadow-md hover:bg-[#2560d2] transition-colors w-fit">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2.5C6.6 2.5 5.5 3.6 5.5 5V8C5.5 9.4 6.6 10.5 8 10.5C9.4 10.5 10.5 9.4 10.5 8V5C10.5 3.6 9.4 2.5 8 2.5Z" fill="white"/>
          <path d="M3.5 7V8C3.5 10.5 5.5 12.5 8 12.5C10.5 12.5 12.5 10.5 12.5 8V7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M8 12.5V14.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span style={{ ...P, fontWeight: 500, fontSize: 13, color: "white" }}>음성으로 질문하기</span>
      </button>
    </div>
  );
}

// ─── Demo buttons ─────────────────────────────────────────────────────────────
const FLOW_BUTTONS = [
  { id: "apple" as ScenarioType,       emoji: "🍎", label: "사과 진단" },
  { id: "strawberry" as ScenarioType,  emoji: "🍓", label: "딸기 진단" },
  { id: "subsidy" as ScenarioType,     emoji: "💰", label: "보조금" },
  { id: "translation" as ScenarioType, emoji: "🌐", label: "통번역" },
  { id: "farming" as ScenarioType,     emoji: "📋", label: "영농일지" },
  { id: "faq" as ScenarioType,         emoji: "❓", label: "자주질문" },
];

function ScenarioButtons({ active, onClick }: { active: ScenarioType | null; onClick: (id: ScenarioType) => void }) {
  return (
    <div className="flex flex-col gap-[10px]">
      {FLOW_BUTTONS.map(s => (
        <button key={s.id} onClick={() => onClick(s.id)} className="flex flex-col items-center gap-[3px]">
          <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-md border transition-all duration-200 ${
            active === s.id ? "bg-[#3170e2] border-[#3170e2] scale-110" : "bg-white border-[#e0e0e0] hover:border-[#3170e2] hover:scale-105"
          }`}>
            <span className="text-[22px] leading-none">{s.emoji}</span>
          </div>
          <span style={{ ...P, fontWeight: 400, fontSize: 9, lineHeight: 1 }}
            className={active === s.id ? "text-[#3170e2]" : "text-[#888]"}>
            {s.label.slice(0, 4)}
          </span>
        </button>
      ))}
    </div>
  );
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 0.35s ease, transform 0.35s ease",
    }}>
      {children}
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-[16px] px-[20px] text-center">
      <div className="text-[48px]">🌱</div>
      <p style={{ ...P, fontWeight: 600, fontSize: 16, color: "#333", lineHeight: 1.5 }}>
        {isMobile ? "아래 버튼을 눌러" : "화면 옆 버튼을 눌러"}<br />시나리오를 선택해보세요
      </p>
      <p style={{ ...P, fontWeight: 400, fontSize: 13, color: "#aaa", lineHeight: 1.5 }}>
        사과·딸기 진단, 보조금, 통번역,<br />영농일지 등을 체험해볼 수 있습니다.
      </p>
    </div>
  );
}

// ─── Mobile scenario popup ────────────────────────────────────────────────────
function ScenarioPopup({ active, onSelect, onClose }: {
  active: ScenarioType | null;
  onSelect: (id: ScenarioType) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end"
      style={{ background: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
    >
      <div
        className="w-full rounded-t-[24px] bg-white pb-[env(safe-area-inset-bottom,16px)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-center pt-[12px] pb-[4px]">
          <div className="w-[36px] h-[4px] rounded-full bg-[#e0e0e0]" />
        </div>
        <p style={{ ...P, fontWeight: 600, fontSize: 15, color: "#222" }} className="px-[20px] py-[14px]">
          시나리오 선택
        </p>
        <div className="grid grid-cols-3 gap-[10px] px-[16px] pb-[20px]">
          {FLOW_BUTTONS.map(s => (
            <button
              key={s.id}
              onClick={() => { onSelect(s.id); onClose(); }}
              className="flex flex-col items-center gap-[6px] py-[14px] rounded-[14px] border transition-all"
              style={{
                borderColor: active === s.id ? "#3170e2" : "#e8e8e8",
                background: active === s.id ? "#ebf1ff" : "white",
              }}
            >
              <span className="text-[28px] leading-none">{s.emoji}</span>
              <span style={{ ...P, fontWeight: 500, fontSize: 12, color: active === s.id ? "#3170e2" : "#555" }}>
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main ChatDemo ────────────────────────────────────────────────────────────
export function ChatDemo({ initialQuestion: _iq, scenario: _is, onBack }: ChatDemoProps) {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFlow, setActiveFlow] = useState<ScenarioType | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const [showScenarioPopup, setShowScenarioPopup] = useState(false);
  const [srcType, setSrcType] = useState<"disease" | "subsidy">("disease");
  const [farmingAdjusted, setFarmingAdjusted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const ts = getTimestamp();

  // helpers
  function clearAll() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function addMsg(msg: Omit<ChatMsg, "id" | "ts">) {
    setMessages(prev => [...prev, { ...msg, id: crypto.randomUUID(), ts }]);
  }

  function schedule(fn: () => void, delay: number) {
    const t = setTimeout(fn, delay);
    timers.current.push(t);
  }

  // auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  function openSrc(type: "disease" | "subsidy") { setSrcType(type); setShowSources(true); }

  // ── Flow runner ─────────────────────────────────────────────────────────────
  // Each step: { at (ms from flow start), action }
  type Step =
    | { at: number; kind: "user-text"; text: string }
    | { at: number; kind: "user-image"; imageType: "apple" | "strawberry-fruit" | "strawberry-leaf"; text: string }
    | { at: number; kind: "loading-on" }
    | { at: number; kind: "loading-off" }
    | { at: number; kind: "ai"; content: React.ReactNode };

  function runSteps(steps: Step[]) {
    steps.forEach(step => {
      schedule(() => {
        if (step.kind === "loading-on")  { setIsLoading(true); return; }
        if (step.kind === "loading-off") { setIsLoading(false); return; }
        if (step.kind === "user-text")   { addMsg({ kind: "user-text", text: step.text }); return; }
        if (step.kind === "user-image")  { addMsg({ kind: "user-image", imageType: step.imageType, text: step.text }); return; }
        if (step.kind === "ai")          { addMsg({ kind: "ai", content: step.content }); return; }
      }, step.at);
    });
  }

  // Timing helpers
  const L = 350;   // loading delay after user msg
  const R = 1400;  // AI response delay from start of loading
  const N = 700;   // gap between steps

  function triggerFlow(id: ScenarioType) {
    clearAll();
    setMessages([]);
    setIsLoading(false);
    setFarmingAdjusted(false);
    setActiveFlow(id);

    if (id === "apple") {
      // Step 1: text question → 겹무늬썩음병
      // Step 2: image upload → 탄저병 diagnosis
      const s: Step[] = [
        { at: 0,             kind: "user-text",  text: "사과 표면에 갈색 반점이 생기는데 무슨 병인가요?" },
        { at: L,             kind: "loading-on" },
        { at: L+R,           kind: "loading-off" },
        { at: L+R,           kind: "ai", content: <AppleTextContent onSrc={() => openSrc("disease")} /> },
        { at: L+R+N+200,     kind: "user-image", imageType: "apple", text: "증상이 다른거 같아. 사진을 보여줄게" },
        { at: L+R+N+200+L,   kind: "loading-on" },
        { at: L+R+N+200+L+R, kind: "loading-off" },
        { at: L+R+N+200+L+R, kind: "ai", content: <AppleDiagnosisContent onSrc={() => openSrc("disease")} /> },
      ];
      runSteps(s);
    }

    else if (id === "strawberry") {
      const s1End = L + R;
      const s2Start = s1End + N + 200;
      const s: Step[] = [
        { at: 0,        kind: "user-image", imageType: "strawberry-fruit", text: "최근에 비가 내린 후로 상태가 이상해졌어." },
        { at: L,        kind: "loading-on" },
        { at: L+R,      kind: "loading-off" },
        { at: s1End,    kind: "ai", content: <StrawberryStage1Content onSrc={() => openSrc("disease")} /> },
        { at: s2Start,  kind: "user-image", imageType: "strawberry-leaf", text: "추가 사진이에요. 더 확인해줘." },
        { at: s2Start+L, kind: "loading-on" },
        { at: s2Start+L+R, kind: "loading-off" },
        { at: s2Start+L+R, kind: "ai", content: <StrawberryStage2Content onSrc={() => openSrc("disease")} /> },
      ];
      runSteps(s);
    }

    else if (id === "subsidy") {
      // 5-turn conversation, shorter loading per turn
      const SL = 300, SR = 900, SN = 600;
      let t = 0;
      const addTurn = (steps: Step[], userText: string, aiNode: React.ReactNode) => {
        steps.push({ at: t, kind: "user-text", text: userText });
        t += SL; steps.push({ at: t, kind: "loading-on" });
        t += SR; steps.push({ at: t, kind: "loading-off" });
        steps.push({ at: t, kind: "ai", content: aiNode });
        t += SN;
      };
      const s: Step[] = [];
      addTurn(s, "받을 수 있는 보조금 확인하기", <SubsidyStep1Content />);
      addTurn(s, '"충남"', <SubsidyStep2Content />);
      addTurn(s, '"농업"', <SubsidyStep3Content />);
      addTurn(s, '"청년농업인"', <SubsidyStep4Content />);
      addTurn(s, '"신청 예정"', <SubsidyResultContent onSrc={() => openSrc("subsidy")} />);
      runSteps(s);
    }

    else if (id === "translation") {
      const SL = 300, SR = 1100, SN = 800;
      const s: Step[] = [
        { at: 0,          kind: "user-text", text: "내일 오전 9시부터 비강자 심기 베트남어로" },
        { at: SL,         kind: "loading-on" },
        { at: SL+SR,      kind: "loading-off" },
        { at: SL+SR,      kind: "ai", content: <TranslationStep1Content onSrc={() => openSrc("subsidy")} /> },
        { at: SL+SR+SN,   kind: "user-text", text: "그 과정 메뉴얼로 설명해줘" },
        { at: SL+SR+SN+SL, kind: "loading-on" },
        { at: SL+SR+SN+SL+SR, kind: "loading-off" },
        { at: SL+SR+SN+SL+SR, kind: "ai", content: <TranslationStep2Content onSrc={() => openSrc("subsidy")} /> },
      ];
      runSteps(s);
    }

    else if (id === "farming") {
      const s: Step[] = [
        { at: 0,   kind: "user-text", text: "오늘 딸기밭에 물 주고, 어제 산 비료 5킬로 사용했어." },
        { at: L,   kind: "loading-on" },
        { at: L+R, kind: "loading-off" },
        { at: L+R, kind: "ai", content: <FarmingStep1Content onAdjust={handleFarmingAdjust} /> },
      ];
      runSteps(s);
    }

    else if (id === "faq") {
      const s: Step[] = [
        { at: 0,   kind: "user-text", text: '"자주 묻는 질문"' },
        { at: L,   kind: "loading-on" },
        { at: L+R, kind: "loading-off" },
        { at: L+R, kind: "ai", content: <FaqContent onVoice={() => setShowVoice(true)} /> },
      ];
      runSteps(s);
    }
  }

  function handleFarmingAdjust() {
    if (farmingAdjusted) return;
    setFarmingAdjusted(true);
    addMsg({ kind: "user-text", text: "네, 수요일로 조정할게요" });
    schedule(() => setIsLoading(true), L);
    schedule(() => {
      setIsLoading(false);
      addMsg({ kind: "ai", content: <FarmingStep2Content /> });
    }, L + R);
  }

  function handleSend() {
    if (!inputValue.trim()) return;
    addMsg({ kind: "user-text", text: inputValue.trim() });
    setInputValue("");
  }

  const phoneContent = (
    <div
      className="bg-white relative overflow-hidden flex flex-col"
      style={{
        width: 375,
        height: isMobile ? "100dvh" : 812,
        paddingTop: !isMobile ? 46 : 0,
      }}
    >
      <ChatHeader onBack={onBack} />

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="absolute left-0 right-0 overflow-y-auto px-[16px] py-[16px]"
        style={{ top: 70, bottom: 110 }}
      >
        {messages.length === 0 && !isLoading && <EmptyState isMobile={isMobile} />}

        {messages.map((msg) => (
          <FadeIn key={msg.id} delay={0}>
            <div className={`mb-[20px] flex ${msg.kind === "ai" ? "justify-start" : "justify-end"}`}>
              {msg.kind === "user-text" && (
                <UserMessageBubble message={msg.text!} timestamp={msg.ts} />
              )}
              {msg.kind === "user-image" && (
                <ImageMessageBubble imageType={msg.imageType!} text={msg.text} timestamp={msg.ts} />
              )}
              {msg.kind === "ai" && (
                <ChatContainer timestamp={msg.ts}>
                  <AIResponseHeader />
                  {msg.content}
                </ChatContainer>
              )}
            </div>
          </FadeIn>
        ))}

        {isLoading && (
          <FadeIn delay={0}>
            <div className="flex justify-start mb-[20px]">
              <LoadingIndicator />
            </div>
          </FadeIn>
        )}
      </div>

      <BottomInput
        isExpanded={isExpanded}
        onToggleExpanded={() => setIsExpanded(!isExpanded)}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={handleSend}
        onMicClick={() => setShowVoice(true)}
      />

      {/* Mobile FAB for scenario selection */}
      {isMobile && (
        <button
          onClick={() => setShowScenarioPopup(true)}
          className="absolute bottom-[120px] right-[16px] w-[48px] h-[48px] rounded-full shadow-lg flex items-center justify-center z-20"
          style={{ background: "#3170e2" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="2" fill="white" />
            <rect x="12" y="2" width="8" height="8" rx="2" fill="white" opacity="0.7" />
            <rect x="2" y="12" width="8" height="8" rx="2" fill="white" opacity="0.7" />
            <rect x="12" y="12" width="8" height="8" rx="2" fill="white" opacity="0.5" />
          </svg>
        </button>
      )}

      {showVoice && <VoiceOverlay onClose={() => setShowVoice(false)} />}
      {showSources && <SourceSheet onClose={() => setShowSources(false)} type={srcType} />}
      {isMobile && showScenarioPopup && (
        <ScenarioPopup
          active={activeFlow}
          onSelect={triggerFlow}
          onClose={() => setShowScenarioPopup(false)}
        />
      )}
    </div>
  );

  // Mobile: full screen
  if (isMobile) {
    return <div className="w-full">{phoneContent}</div>;
  }

  // Desktop: centered mockup with side buttons and hint
  return (
    <div className="min-h-screen flex items-center justify-center gap-[32px]" style={{ background: "#f2f2f7" }}>
      {/* Left hint */}
      <div className="flex flex-col items-center gap-[12px] w-[120px]">
        <div className="text-[28px]">👉</div>
        <p style={{ ...P, fontWeight: 500, fontSize: 13, color: "#888", lineHeight: 1.6, textAlign: "center" }}>
          화면 옆 버튼을 눌러<br />시나리오를<br />선택해 보세요
        </p>
      </div>

      <PhoneMockup>{phoneContent}</PhoneMockup>

      {/* Right scenario buttons */}
      <ScenarioButtons active={activeFlow} onClick={triggerFlow} />
    </div>
  );
}
