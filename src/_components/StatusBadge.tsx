"use client";{/*클릭 상태 기억*/}

import { useState } from "react";
import { USER_STATUS } from "@/_datas/status.data";

export default function StatusBadge() {
  const [isOpen, setIsOpen] = useState(false); // 팝업 열림/닫힘 상태
  return (
    <div className="relative flex flex-col items-end"> 
      <button onClick={() => setIsOpen(!isOpen)} //클릭시
      className="flex items-center px-8 py-2 border border-white rounded-full">
      <span className="text-base text-white/60 mr-2 font-light">
        {USER_STATUS.label}:
      </span>
      <span className={`text-base font-medium ${USER_STATUS.isAvailable ? 'text-green-400' : 'text-yellow-400'}`}>
        {USER_STATUS.text}
      </span>
    </button>

      {/* 팝업 부분 (isOpen이 true일 때만 렌더링) */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-[430px] bg-black p-6 border border-black z-50">
          <h3 className="text-lg text-[#808080] mb-4">Project Availability Status</h3>
          <p className="text-sm text-[#12dd00] font-thin">
            Ready to begin immediately. Contact me now to get started!
          </p>
        </div>
      )}
    </div>
  );
}