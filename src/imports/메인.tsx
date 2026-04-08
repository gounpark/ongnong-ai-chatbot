import svgPaths from "./svg-rv1bmyf9dl";
import imgImg00413 from "figma:asset/174cdeacbd224a435f9cd93a7646452610bf01b1.png";
import imgBannerIllustration from "figma:asset/6f7877f3239b597beee1cbfaebaed33361a0710c.png";

function Ico() {
  return (
    <div className="relative size-[30px]" data-name="ico">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_298)" id="ico">
          <mask height="30" id="mask0_1_298" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <path d="M30 0H0V30H30V0Z" fill="var(--fill-0, #222222)" id="Bg" />
          </mask>
          <g mask="url(#mask0_1_298)">
            <path clipRule="evenodd" d={svgPaths.p2404c800} fill="var(--fill-0, white)" fillRule="evenodd" id="Path (Stroke)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_298">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#3170e2] content-stretch flex items-center justify-between left-0 overflow-clip px-[15px] py-[20px] top-0 w-[375px]" data-name="header">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Ico />
        </div>
      </div>
      <div className="h-[30px] mix-blend-plus-lighter relative shrink-0 w-[64px]" data-name="IMG_0041 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2706.67%] left-[-456.25%] max-w-none top-[-216.67%] w-[583.57%]" src={imgImg00413} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[187px] not-italic text-[18px] text-center text-white top-[24.5px] whitespace-nowrap">오농 에이전트</p>
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
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-center left-0 pb-[32px] pt-[20px] px-[16px] shadow-[0px_-2px_10px_0px_rgba(221,221,221,0.2)] top-[690px] w-[375px]" data-name="Input Container">
      <CancelButtonContainer />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#999] text-[12px] text-center w-full">AI가 생성한 답변이므로 중요한 내용은 한 번 더 확인해 주세요.</p>
    </div>
  );
}

function RemarkBackground() {
  return <div className="h-[56px] shrink-0 w-full" data-name="Remark background" />;
}

function RemarkContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] top-[286px] w-[314px]" data-name="Remark container">
      <RemarkBackground />
    </div>
  );
}

function MaterialSymbolsLightRefresh() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="material-symbols-light:refresh">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="material-symbols-light:refresh">
          <path d={svgPaths.p1664e180} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RefreshIconContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Refresh icon container">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <MaterialSymbolsLightRefresh />
    </div>
  );
}

function FaqHeaderContainer1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="FAQ header container">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        다른 농업인들이
        <br aria-hidden="true" />
        {`최근에 물어본 질문은? `}
      </p>
      <RefreshIconContainer />
    </div>
  );
}

function FaqHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="FAQ header container">
      <FaqHeaderContainer1 />
    </div>
  );
}

function FaqItemIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="FAQ item icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="FAQ item icon">
          <path d={svgPaths.p2e110b00} fill="var(--fill-0, #C2D1DF)" id="Vector" />
          <path d={svgPaths.pb0f8e00} fill="var(--fill-0, #C2D1DF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FaqItemContainer1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="FAQ item container">
      <div aria-hidden="true" className="absolute border border-[#f0f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <FaqItemIcon />
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">오늘 내 농작업 일정 뭐 있지?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItemIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="FAQ item icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="FAQ item icon">
          <path d={svgPaths.p2e110b00} fill="var(--fill-0, #C2D1DF)" id="Vector" />
          <path d={svgPaths.pb0f8e00} fill="var(--fill-0, #C2D1DF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FaqItemContainer2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="FAQ item container">
      <div aria-hidden="true" className="absolute border border-[#f0f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <FaqItemIcon1 />
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">최근 등록한 작업일지 요약해줘</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItemIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="FAQ item icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="FAQ item icon">
          <path d={svgPaths.p2e110b00} fill="var(--fill-0, #C2D1DF)" id="Vector" />
          <path d={svgPaths.pb0f8e00} fill="var(--fill-0, #C2D1DF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FaqItemContainer3() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="FAQ item container">
      <div aria-hidden="true" className="absolute border border-[#f0f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <FaqItemIcon2 />
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">비 온 다음 날 바로 농약 살포해도 되나요?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItemIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="FAQ item icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="FAQ item icon">
          <path d={svgPaths.p2e110b00} fill="var(--fill-0, #C2D1DF)" id="Vector" />
          <path d={svgPaths.pb0f8e00} fill="var(--fill-0, #C2D1DF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FaqItemContainer4() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="FAQ item container">
      <div aria-hidden="true" className="absolute border border-[#f0f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <FaqItemIcon3 />
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">작물 수확 시기는 어떻게 판단하나요?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItemContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="FAQ item container">
      <FaqItemContainer1 />
      <FaqItemContainer2 />
      <FaqItemContainer3 />
      <FaqItemContainer4 />
    </div>
  );
}

function FaqContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-end left-1/2 top-[292px]" data-name="FAQ container">
      <FaqHeaderContainer />
      <FaqItemContainer />
    </div>
  );
}

function IconPlaceholder1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[32.748px] left-1/2 top-[calc(50%+0.37px)] w-[40px]" data-name="Icon placeholder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0004 32.7482">
        <g id="Icon placeholder">
          <path d={svgPaths.p24a22500} fill="var(--fill-0, #94D510)" id="Vector" />
          <path d={svgPaths.p26220400} fill="var(--fill-0, #3170E2)" id="Vector_2" />
          <path d={svgPaths.p2fc82f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p9fd3b00} fill="var(--fill-0, #3170E2)" id="Vector_4" />
          <g id="Icon placeholder_2">
            <path d={svgPaths.p8791000} fill="var(--fill-0, #3170E3)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon placeholder">
      <IconPlaceholder1 />
    </div>
  );
}

function WelcomeMessageContainer2() {
  return (
    <div className="content-stretch flex gap-[2px] h-[31px] items-center justify-center relative shrink-0" data-name="Welcome message container">
      <IconPlaceholder />
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">{`이 당신의 `}</p>
      </div>
    </div>
  );
}

function WelcomeMessageContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Welcome message container">
      <WelcomeMessageContainer2 />
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <p className="text-[22px]">
          <span className="font-['Pretendard:Bold',sans-serif] leading-[1.5]">궁금증을 해결</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[1.5]">해드릴게요!</span>
        </p>
      </div>
    </div>
  );
}

function WelcomeMessageContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[23px] top-[15px]" data-name="Welcome message container">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">안녕하세요!</p>
      </div>
      <WelcomeMessageContainer1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Layer_2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g clipPath="url(#clip0_1_261)" id="Layer_2">
          <path d={svgPaths.p2608be80} fill="url(#paint0_linear_1_261)" id="Vector" />
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p3b0aa680} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p3380400} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
            <path d={svgPaths.p35b86180} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_261" x1="0" x2="17" y1="8.00048" y2="8.00048">
            <stop stopColor="#FFC20E" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FFC20E" />
          </linearGradient>
          <clipPath id="clip0_1_261">
            <rect fill="white" height="16" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabIconContainer() {
  return (
    <div className="bg-[#eff2f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tab icon container">
      <Layer />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">오늘농사 AI 가이드</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[16.957px] relative shrink-0 w-[16.491px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.491 16.9573">
        <g id="Group">
          <path d={svgPaths.p9527e00} fill="var(--fill-0, #00B259)" id="Vector" />
          <path d={svgPaths.p393bbf0} fill="url(#paint0_linear_1_272)" id="Vector_2" />
          <path d={svgPaths.p38324880} fill="var(--fill-0, #BCDE7B)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_272" x1="1.89623" x2="9.94041" y1="13.5725" y2="5.52832">
            <stop stopColor="#9ACA3C" />
            <stop offset="1" stopColor="#00B259" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TabIconContainer1() {
  return (
    <div className="bg-[#eff2f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tab icon container">
      <Group />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">농업 보조금 추천</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[15.754px] relative shrink-0 w-[15.587px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5868 15.7541">
        <g id="Group">
          <path d={svgPaths.p232586f0} fill="url(#paint0_linear_1_243)" id="Vector" />
          <g id="Group_2">
            <g id="Group_3">
              <path d={svgPaths.p2619700} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p115bf700} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
            <path d={svgPaths.p1b715e80} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <path d={svgPaths.p1e417b00} fill="var(--fill-0, #B7EDF9)" id="Vector_5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_243" x1="0" x2="14.2779" y1="8.61471" y2="8.61471">
            <stop stopColor="#B3ECE5" />
            <stop offset="1" stopColor="#3170E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TabIconContainer2() {
  return (
    <div className="bg-[#eff2f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tab icon container">
      <Group1 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">병해충 재해 진단</p>
    </div>
  );
}

function Layer1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15.764px]" data-name="Layer_2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7642 17">
        <g clipPath="url(#clip0_1_252)" id="Layer_2">
          <path d={svgPaths.p37641c80} fill="url(#paint0_linear_1_252)" id="Vector" />
          <path d={svgPaths.p16d7bd00} fill="var(--fill-0, #C8C5FF)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p3a5fc300} fill="var(--fill-0, #392ECC)" id="Vector_3" />
            <path d={svgPaths.p33dcb080} fill="var(--fill-0, #392ECC)" id="Vector_4" />
            <path d={svgPaths.p1d2f2b00} fill="var(--fill-0, #392ECC)" id="Vector_5" />
          </g>
          <path d={svgPaths.p184f2af1} fill="var(--fill-0, #6352E2)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_252" x1="-0.000245356" x2="15.7639" y1="4.40509" y2="4.40509">
            <stop stopColor="#ABA2F4" />
            <stop offset="1" stopColor="#7158ED" />
          </linearGradient>
          <clipPath id="clip0_1_252">
            <rect fill="white" height="17" width="15.7642" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TabIconContainer3() {
  return (
    <div className="bg-[#eff2f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="Tab icon container">
      <Layer1 />
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[14px] text-center tracking-[-0.42px] whitespace-nowrap">영농 캘린더</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[19px] top-[132px]" data-name="Container">
      <TabIconContainer />
      <TabIconContainer1 />
      <TabIconContainer2 />
      <TabIconContainer3 />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute h-[188px] left-0 top-[70px] w-[374px]" data-name="Banner">
      <div className="absolute bg-[#3170e2] h-[188px] left-0 rounded-bl-[30px] top-0 w-[375px]" data-name="Banner background" />
      <WelcomeMessageContainer />
      <Container />
      <div className="absolute h-[118px] left-[254px] shadow-[0px_4px_6.3px_0px_rgba(0,0,0,0.1)] top-0 w-[117px]" data-name="Banner illustration">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.15%] left-[-0.14%] max-w-none top-[-17.8%] w-[100.28%]" src={imgBannerIllustration} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="메인">
      <Header />
      <InputContainer />
      <RemarkContainer />
      <FaqContainer />
      <Banner />
    </div>
  );
}