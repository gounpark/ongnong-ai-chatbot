import svgPaths from "../../../imports/svg-zz261itbmp";
import { imgGroup } from "../../../imports/svg-eppq7";

interface FarmingLogData {
  date: string;
  farm: string;
  weather: string;
  crop: string;
  work: string;
  fertilizer: string;
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-6px] mask-size-[40px_40px]" style={{ maskImage: `url('${imgGroup}')` }}>
        <div className="absolute inset-[-2.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8 11.8">
            <g id="Group">
              <path d={svgPaths.pe5d2170} fill="var(--fill-0, #99A1AF)" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
              <path d={svgPaths.p1fd09200} fill="var(--fill-0, #99A1AF)" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
              <path d={svgPaths.p2edd3c80} fill="var(--fill-0, #99A1AF)" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
              <path d={svgPaths.p5ac9100} fill="var(--fill-0, #99A1AF)" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

interface FarmingLogCardProps {
  data: FarmingLogData;
}

export function FarmingLogCard({ data }: FarmingLogCardProps) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(103.425deg, rgb(247, 255, 248) 5.3021%, rgb(245, 250, 255) 102.16%)" }}>
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between w-full">
            <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic text-[#222] text-[16px] whitespace-nowrap">
              <p className="leading-[1.5]">영농 일지</p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center">
              <CalendarIcon />
              <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic text-[#888] text-[12px] whitespace-nowrap">
                <p className="leading-[1.5]">{data.date}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[6px] items-start leading-[0] not-italic py-[8px] text-[#454545] text-[14px] w-full">
            <div className="flex flex-col justify-center w-full">
              <p className="leading-[1.5]">농장: {data.farm}</p>
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="leading-[1.5]">날씨: {data.weather}</p>
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="leading-[1.5]">작물: {data.crop}</p>
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="leading-[1.5]">작업: {data.work}</p>
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="leading-[1.5]">비료 사용: {data.fertilizer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
