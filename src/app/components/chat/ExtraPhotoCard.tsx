interface ExtraPhotoCardProps {
  message: string;
}

export function ExtraPhotoCard({ message }: ExtraPhotoCardProps) {
  return (
    <div className="w-full rounded-[10px] border border-[#e8e8e8] bg-[#fffdf5] px-[14px] py-[12px] flex flex-col gap-[6px]">
      <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#222] leading-[1.5]">
        📸 사진 추가 업로드 요청
      </p>
      <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#555] leading-[1.6]">
        {message}
      </p>
    </div>
  );
}
