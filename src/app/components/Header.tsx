import svgPaths from "../../imports/svg-rv1bmyf9dl";
import imgImg00413 from "../../assets/174cdeacbd224a435f9cd93a7646452610bf01b1.png";

function BackIcon() {
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

export function Header({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute bg-[#3170e2] content-stretch flex items-center justify-between left-0 overflow-clip px-[15px] py-[20px] top-0 w-[375px]" data-name="header">
      <div className="flex items-center justify-center relative shrink-0 cursor-pointer" onClick={onBack}>
        <div className="flex-none rotate-180">
          <BackIcon />
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
