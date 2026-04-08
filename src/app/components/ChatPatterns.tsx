import { Header } from "./Header";
import { BottomInput } from "./BottomInput";
import {
  UserMessageBubble,
  AIResponseHeader,
  AITextResponse,
  FarmingLogCard,
  ActionButton,
  AlertCard,
  ChatContainer,
  Divider
} from "./chat";

/**
 * Standalone page demonstrating all chat patterns
 * This shows the various response types available in the chat interface
 */
export function ChatPatterns() {
  return (
    <div className="bg-white relative w-[375px] min-h-[812px] mx-auto">
      <Header />

      <div className="pt-[70px] pb-[140px] px-[20px] py-[16px] space-y-[32px]">
        {/* Pattern 1: User Message */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            1. User Message Pattern
          </h3>
          <div className="flex justify-end">
            <UserMessageBubble
              message="오늘 딸기밭에 물 주고 비료 5킬로 사용했어."
              timestamp="오전 11:31"
            />
          </div>
        </section>

        {/* Pattern 2: AI Text Response */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            2. AI General Text Response
          </h3>
          <div className="flex justify-start">
            <ChatContainer timestamp="오전 11:31">
              <AIResponseHeader />
              <AITextResponse>
                <p className="leading-[1.5]">
                  네, 알겠습니다. 딸기는 물을 충분히 공급받아야 하며, 특히 건조한 날씨에는 더욱 주의가 필요합니다.
                </p>
              </AITextResponse>
            </ChatContainer>
          </div>
        </section>

        {/* Pattern 3: Farming Log Generation */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            3. Farming Log Generation
          </h3>
          <div className="flex justify-start">
            <ChatContainer timestamp="오전 11:31">
              <AIResponseHeader />
              <div className="flex flex-col gap-[16px] w-full">
                <AITextResponse>
                  <p className="text-[14px]">
                    <span className="font-['Pretendard:Medium',sans-serif] leading-[1.5] text-[#222]">
                      오늘(2025년 7월 22일)
                    </span>
                    <span className="leading-[1.5]">
                      {" "}작업 내용을 자동 기록했습니다.
                    </span>
                  </p>
                </AITextResponse>

                <FarmingLogCard
                  data={{
                    date: "2025년 07월 22일",
                    farm: "홍길동의 딸기농장",
                    weather: "맑음 / 28°C",
                    crop: "딸기",
                    work: "물주기",
                    fertilizer: "5kg"
                  }}
                />

                <div className="flex flex-col gap-[8px]">
                  <AITextResponse>
                    <p className="leading-[1.5]">
                      더 자세한 정보는 영농일지에서 확인하실 수 있습니다.
                    </p>
                  </AITextResponse>
                  <ActionButton label="영농일지 보기" />
                </div>
              </div>
            </ChatContainer>
          </div>
        </section>

        {/* Pattern 4: Alert/Warning with Suggestion */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            4. Alert & Suggestion Pattern
          </h3>
          <div className="flex justify-start">
            <ChatContainer timestamp="오전 11:31">
              <AIResponseHeader />
              <div className="flex flex-col gap-[16px] w-full">
                <AlertCard
                  emoji="⚡️"
                  title="주의"
                  message="다음 주 화요일에는 비가 내릴 예정입니다. ☔ 후속 물주기 날짜를 수요일로 조정하시겠어요?"
                />
              </div>
            </ChatContainer>
          </div>
        </section>

        {/* Pattern 5: Schedule Update Confirmation */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            5. Schedule Update Pattern
          </h3>
          <div className="flex justify-start">
            <ChatContainer timestamp="오전 11:31">
              <AIResponseHeader />
              <div className="flex flex-col gap-[16px] w-full">
                <AITextResponse>
                  <p>
                    <span className="leading-[1.5]">영농 일지의 후속 일정을 </span>
                    <span className="font-['Pretendard:Medium',sans-serif] leading-[1.5] text-[#222]">
                      2025-07-31(수요일)
                    </span>
                    <span className="leading-[1.5]">로 업데이트 하겠습니다.</span>
                  </p>
                </AITextResponse>

                <Divider />

                <AlertCard
                  emoji="📅"
                  title="일정 추가 제안"
                  message="작물 재배 캘린더에 물 주기와 비료 주기 일정 추가하고 알림을 설정할까요?"
                />
              </div>
            </ChatContainer>
          </div>
        </section>

        {/* Pattern 6: Completion Message */}
        <section>
          <h3 className="text-[12px] text-[#999] mb-[12px] font-['Pretendard:SemiBold',sans-serif]">
            6. Completion Message Pattern
          </h3>
          <div className="flex justify-start">
            <ChatContainer timestamp="오전 11:31">
              <AIResponseHeader />
              <AITextResponse>
                <p className="leading-[1.5] mb-0">알겠습니다.</p>
                <p className="leading-[1.5]">
                  7월 31일(수) 오전 7시에 비료 작업 및 물 주기 일정이 추가되었습니다. 알림도 함께 드릴게요! 😊
                </p>
              </AITextResponse>
            </ChatContainer>
          </div>
        </section>
      </div>

      <BottomInput isExpanded={false} onToggleExpanded={() => {}} />
    </div>
  );
}
