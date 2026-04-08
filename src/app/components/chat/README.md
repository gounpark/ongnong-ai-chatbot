# Chat Components Documentation

This directory contains reusable chat UI components for the "오농 에이전트" (Onong Agent) mobile chat interface.

## Components Overview

### 1. **UserMessageBubble**
User's message displayed as a green bubble on the right side.

**Props:**
- `message: string` - The message content
- `timestamp: string` - Time of the message (e.g., "오전 11:31")

**Example:**
```tsx
<UserMessageBubble
  message="오늘 딸기밭에 물 주고, 어제 산 비료 5킬로 사용했어."
  timestamp="오전 11:31"
/>
```

---

### 2. **AIResponseHeader**
Header showing the AI agent avatar with "의 답변" label.

**Props:** None

**Example:**
```tsx
<AIResponseHeader />
```

---

### 3. **AITextResponse**
General text response container for AI messages.

**Props:**
- `children: React.ReactNode` - The message content (can include formatted text)

**Example:**
```tsx
<AITextResponse>
  <p className="leading-[1.5]">
    작업 내용을 등록된 농장에 자동 기록했습니다.
  </p>
</AITextResponse>
```

---

### 4. **FarmingLogCard**
Structured farming log display card with gradient background.

**Props:**
- `data: FarmingLogData` - Object containing:
  - `date: string` - Date (e.g., "2025년 07월 22일")
  - `farm: string` - Farm name
  - `weather: string` - Weather condition
  - `crop: string` - Crop type
  - `work: string` - Work performed
  - `fertilizer: string` - Fertilizer amount

**Example:**
```tsx
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
```

---

### 5. **ActionButton**
Interactive button for navigation or actions (e.g., "영농일지 보기").

**Props:**
- `label: string` - Button text
- `onClick?: () => void` - Optional click handler

**Example:**
```tsx
<ActionButton
  label="영농일지 보기"
  onClick={() => console.log("Navigate to farming log")}
/>
```

---

### 6. **AlertCard**
Alert or notification card with emoji, title, and message.

**Props:**
- `emoji: string` - Emoji icon
- `title: string` - Alert title
- `message: string` - Alert message content

**Example:**
```tsx
<AlertCard
  emoji="⚡️"
  title="주의"
  message="다음 주 화요일에는 비가 내릴 예정입니다."
/>
```

---

### 7. **ChatContainer**
Container wrapper for AI responses with optional timestamp.

**Props:**
- `children: React.ReactNode` - Response content
- `timestamp?: string` - Optional timestamp

**Example:**
```tsx
<ChatContainer timestamp="오전 11:31">
  <AIResponseHeader />
  <AITextResponse>
    <p>알겠습니다.</p>
  </AITextResponse>
</ChatContainer>
```

---

### 8. **Divider**
Horizontal divider line for separating content sections.

**Props:** None

**Example:**
```tsx
<Divider />
```

---

## Complete Chat Flow Example

```tsx
import {
  UserMessageBubble,
  AIResponseHeader,
  AITextResponse,
  FarmingLogCard,
  ActionButton,
  AlertCard,
  ChatContainer,
  Divider
} from "./components/chat";

function ChatExample() {
  return (
    <div>
      {/* User Message */}
      <div className="flex justify-end mb-[24px]">
        <UserMessageBubble
          message="오늘 딸기밭에 물 주고 비료 5킬로 사용했어."
          timestamp="오전 11:31"
        />
      </div>

      {/* AI Response */}
      <div className="flex justify-start mb-[24px]">
        <ChatContainer timestamp="오전 11:31">
          <AIResponseHeader />

          <div className="flex flex-col gap-[16px] w-full">
            <AITextResponse>
              <p>작업 내용을 자동 기록했습니다.</p>
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

            <ActionButton label="영농일지 보기" />

            <Divider />

            <AlertCard
              emoji="⚡️"
              title="주의"
              message="비가 예정되어 있습니다."
            />
          </div>
        </ChatContainer>
      </div>
    </div>
  );
}
```

## Design Specifications

- **User bubbles**: `#c9e331` background, right-aligned
- **AI responses**: Left-aligned, white/gradient backgrounds
- **Font**: Pretendard (Regular, Medium, SemiBold, Bold)
- **Max width**: 335px for AI responses, 280px for user messages
- **Mobile width**: 375px
- **Spacing**: Consistent 16px, 12px, 8px gaps

## Usage Notes

1. Always wrap user messages in a right-aligned flex container
2. Always wrap AI responses in a left-aligned flex container with ChatContainer
3. Use AIResponseHeader at the start of each AI response
4. Combine multiple response elements within a single ChatContainer
5. Use Divider to separate logical sections within AI responses
