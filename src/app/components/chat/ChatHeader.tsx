import svgPaths from "../../../imports/svg-2brihfp3sw";

function BackIcon() {
  return (
    <div className="relative size-[30px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_2_314)">
          <mask height="30" id="mask0_2_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <path d="M30 0H0V30H30V0Z" fill="var(--fill-0, #222222)" />
          </mask>
          <g mask="url(#mask0_2_314)">
            <path clipRule="evenodd" d={svgPaths.p2404c800} fill="var(--fill-0, #222222)" fillRule="evenodd" />
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

function EditIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[10.42%_10.42%_12.5%_12.5%]">
        <div className="absolute inset-[-3.82%_-3.82%_-2.7%_-2.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7071 19.7071">
            <g>
              <path d={svgPaths.p34899700} stroke="var(--stroke-0, #454545)" />
              <path d={svgPaths.p26359740} stroke="var(--stroke-0, #454545)" />
              <path d={svgPaths.p26563680} stroke="var(--stroke-0, #454545)" strokeLinecap="square" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ChatHeader({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[15px] py-[20px] top-0 w-[375px] bg-white">
      <div className="flex items-center justify-center relative shrink-0 cursor-pointer" onClick={onBack}>
        <div className="flex-none rotate-180">
          <BackIcon />
        </div>
      </div>
      <EditIcon />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[normal] left-[187px] not-italic text-[#222] text-[18px] text-center top-[24.5px] whitespace-nowrap">오농 에이전트</p>
    </div>
  );
}
