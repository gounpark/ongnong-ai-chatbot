import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SuggestedQuestions } from "./components/SuggestedQuestions";
import { BottomInput } from "./components/BottomInput";
import { ChatDemo, ScenarioType } from "./components/ChatDemo";
import { PhoneMockup } from "./components/PhoneMockup";
import { useIsMobile } from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string>("");
  const [scenario, setScenario] = useState<ScenarioType>("disease-apple");

  function detectScenario(q: string): ScenarioType {
    const lower = q.toLowerCase();
    if (lower.includes("딸기")) return "disease-strawberry";
    if (lower.includes("병해충") || lower.includes("진단")) return "disease-apple";
    if (lower.includes("자주")) return "faq";
    if (lower.includes("일지") || lower.includes("일정")) return "farming";
    return "disease-apple";
  }

  const handleQuestionClick = (question: string) => {
    setInitialQuestion(question);
    setScenario(detectScenario(question));
    setShowChat(true);
  };

  const handleChipClick = (chipLabel: string) => {
    if (chipLabel.includes("병해충")) {
      setScenario("disease-apple");
    } else if (chipLabel.includes("캘린더") || chipLabel.includes("일지")) {
      setScenario("farming");
    } else {
      setScenario("disease-apple");
    }
    setInitialQuestion(chipLabel);
    setShowChat(true);
  };

  const handleInputSend = (value: string) => {
    if (!value.trim()) return;
    setInitialQuestion(value);
    setScenario(detectScenario(value));
    setShowChat(true);
  };

  const handleBackToHome = () => {
    setShowChat(false);
    setInitialQuestion("");
  };

  if (showChat) {
    return (
      <ChatDemo
        initialQuestion={initialQuestion}
        scenario={scenario}
        onBack={handleBackToHome}
      />
    );
  }

  const homeContent = (
    <div className="bg-white relative w-[375px] min-h-[812px] overflow-hidden" style={{ paddingTop: !isMobile ? 46 : 0 }}>
      <Header />
      <HeroSection onChipClick={handleChipClick} />
      <SuggestedQuestions onQuestionClick={handleQuestionClick} />
      <HomeBottomInput
        isExpanded={isInputExpanded}
        onToggleExpanded={() => setIsInputExpanded(!isInputExpanded)}
        onSend={handleInputSend}
      />
    </div>
  );

  if (isMobile) return homeContent;

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f2f2f7" }}>
      <PhoneMockup>{homeContent}</PhoneMockup>
    </div>
  );
}

// Wrapper to add onSend support to home screen BottomInput
function HomeBottomInput({
  isExpanded,
  onToggleExpanded,
  onSend,
}: {
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onSend: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <BottomInput
      isExpanded={isExpanded}
      onToggleExpanded={onToggleExpanded}
      inputValue={value}
      onInputChange={setValue}
      onSend={() => {
        if (value.trim()) { onSend(value.trim()); setValue(""); }
      }}
    />
  );
}
