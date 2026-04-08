import svgPaths from "./svg-tqrayeu7nq";
import { imgGroup } from "./svg-pmq0t";

function Ico() {
  return (
    <div className="relative size-[30px]" data-name="ico">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2_314)" id="ico">
          <mask height="30" id="mask0_2_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <path d="M30 0H0V30H30V0Z" fill="var(--fill-0, #222222)" id="Bg" />
          </mask>
          <g mask="url(#mask0_2_314)">
            <path clipRule="evenodd" d={svgPaths.p2404c800} fill="var(--fill-0, #222222)" fillRule="evenodd" id="Path (Stroke)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_314">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.42%_10.42%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-3.82%_-3.82%_-2.7%_-2.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7071 19.7071">
          <g id="Group">
            <path d={svgPaths.p34899700} id="Vector" stroke="var(--stroke-0, #454545)" />
            <path d={svgPaths.p26359740} id="Vector_2" stroke="var(--stroke-0, #454545)" />
            <path d={svgPaths.p26563680} id="Vector_3" stroke="var(--stroke-0, #454545)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TdesignEdit() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tdesign:edit-2">
      <Group />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[15px] py-[20px] top-0 w-[375px]" data-name="header">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Ico />
        </div>
      </div>
      <TdesignEdit />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[187px] not-italic text-[#222] text-[18px] text-center top-[24.5px] whitespace-nowrap">오농 에이전트</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#c9e331] content-stretch flex items-center justify-center max-w-[280px] px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[280px]">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[14px]">
        <p className="leading-[1.5]">오늘 딸기밭에 물 주고, 어제 산 비료 5킬로 사용했어. 다음 주 화요일에 다시 물 예정이야.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end justify-end right-[20px] top-[86px]">
      <Frame />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[11px] whitespace-nowrap">
        <p className="leading-[1.5]">오전 11:31</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.198px] left-1/2 top-[calc(50%+0.3px)] w-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9999 26.1985">
        <g id="Frame 178">
          <path d={svgPaths.pf7fe680} fill="var(--fill-0, #94D510)" id="Vector" />
          <path d={svgPaths.p3bc22e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p106d3900} fill="var(--fill-0, #3170E3)" id="Vector_3" />
          <path d={svgPaths.p2a6ba00} fill="var(--fill-0, white)" id="Vector_4" />
          <g id="Group 179">
            <path d={svgPaths.p23d4a000} fill="var(--fill-0, #3170E3)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0">
      <Frame14 />
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">의 답변</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[335px] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#454545] text-[0px]">
        <p className="text-[14px]">
          <span className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic text-[#222]">오늘(2025년 7월 22일)</span>
          <span className="leading-[1.5]">{` 작업 내용을 현재 위치와 날씨 정보를 기준으로 등록된 농장에 자동 기록했습니다.`}</span>
        </p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-6px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-2.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8 11.8">
          <g id="Group">
            <path d={svgPaths.pe5d2170} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
            <path d={svgPaths.p1fd09200} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
            <path d={svgPaths.p2edd3c80} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
            <path d={svgPaths.p5ac9100} fill="var(--fill-0, #99A1AF)" id="Vector (Stroke)_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="ico">
        <Group1 />
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">2025년 07월 22일</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">영농 일지</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[0] not-italic py-[8px] relative shrink-0 text-[#454545] text-[14px] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5]">농장: 홍길동의 딸기농장</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5]">날씨: 맑음 / 28°C</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5]">작물: 딸기</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5]">작업: 물주기</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5]">비료 사용: 5kg</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(103.425deg, rgb(247, 255, 248) 5.3021%, rgb(245, 250, 255) 102.16%)" }}>
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame7 />
    </div>
  );
}

function Ico1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ico">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ico">
          <mask height="16" id="mask0_2_322" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <path d="M16 0H0V16H16V0Z" fill="var(--fill-0, #222222)" id="Rectangle Copy 16" />
          </mask>
          <g mask="url(#mask0_2_322)">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p2d489d00} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p2fe1fe70} fill="var(--fill-0, #454545)" fillRule="evenodd" id="Vector (Stroke)_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center pl-[10px] pr-[6px] py-[6px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#454545] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">영농일지 보기</p>
      </div>
      <Ico1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[311px]">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content]">
        <p className="leading-[1.5]">더 자세한 정보는 영농일지에서 확인하실 수 있습니다.</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[335px] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#454545] text-[14px]">
        <p className="leading-[1.5] mb-0">다음 주 화요일에는 비가 내릴 예정입니다. ☔</p>
        <p className="leading-[1.5]">후속 물주기 날짜를 수요일로 조정하시겠어요?</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[251px]">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[1.5]">⚡️ 주의</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Line 2" stroke="var(--stroke-0, #EEEEEE)" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[181px] w-[335px]">
      <Frame16 />
      <Frame9 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#888] text-[11px] w-[min-content]">
        <p className="leading-[1.5]">오전 11:31</p>
      </div>
    </div>
  );
}

function FePlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fe:plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fe:plus">
          <path clipRule="evenodd" d={svgPaths.p179f7d00} fill="var(--fill-0, #999999)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StashMic() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="stash:mic">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:mic">
          <path clipRule="evenodd" d={svgPaths.p35f08500} fill="var(--fill-0, #999999)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SolarArrowUpLinear() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="solar:arrow-up-linear">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="solar:arrow-up-linear">
          <path d={svgPaths.p36313800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.21875" />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div className="bg-[#ddd] relative rounded-[812.5px] shrink-0 size-[26px]" data-name="Send button">
      <SolarArrowUpLinear />
    </div>
  );
}

function InputIconsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Input icons container">
      <StashMic />
      <SendButton />
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]" data-name="Input box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[10px] py-[10px] relative w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] text-center whitespace-nowrap">질문을 입력해 보세요</p>
          <InputIconsContainer />
        </div>
      </div>
    </div>
  );
}

function CancelButtonContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Cancel Button Container">
      <FePlus />
      <InputBox />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[10px] items-center left-0 pb-[32px] pt-[20px] px-[16px] shadow-[0px_-2px_10px_0px_rgba(221,221,221,0.2)] w-[375px]" data-name="Input Container">
      <CancelButtonContainer />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#999] text-[12px] text-center w-full">AI가 생성한 답변이므로 중요한 내용은 한 번 더 확인해 주세요.</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="에이전트_영농일지 작성">
      <Header />
      <Frame1 />
      <Frame10 />
      <InputContainer />
    </div>
  );
}