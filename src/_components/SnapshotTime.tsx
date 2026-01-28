"use client"

import { useState, useEffect } from "react";

export default function SnapshotTime() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const now = new Date();

        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = String(now.getFullYear());

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        
				{/* 원하는 형태로 시간 합치기 */}
        const currTime = `${day}.${month}.${year} - ${hours}:${minutes}`;

        setTime(currTime);
    }, [])

		{/* 로딩 중(빈 값)일 때는 아무것도 안 보여줌 */}
    if (!time) return null;

    return(
        <span className="text-white">
            {time}
        </span>
    );
}