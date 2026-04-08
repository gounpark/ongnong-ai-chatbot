import svgPaths from "../../../imports/svg-zz261itbmp";

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
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

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

export function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <div
      className="bg-white relative content-stretch flex gap-[4px] items-center justify-center pl-[10px] pr-[6px] py-[6px] rounded-[8px] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic text-[#454545] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">{label}</p>
      </div>
      <ArrowIcon />
    </div>
  );
}
