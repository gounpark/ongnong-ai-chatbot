import svgPaths from "../../../imports/svg-zz261itbmp";

function AgentAvatar() {
  return (
    <div className="relative shrink-0 size-[32px]">
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
    </div>
  );
}

export function AIResponseHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end">
      <AgentAvatar />
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic text-[#999] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">의 답변</p>
      </div>
    </div>
  );
}
