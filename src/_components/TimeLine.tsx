"use client";

import React from "react";
import { timelines } from "@/_datas/timeline_data";
import useInView from "@/_hooks/useInView";

function TimelineRow({ item, index }: { item: any; index: number }) {
  const isRight = index % 2 === 0;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={`
        flex w-full items-center relative
        justify-start
        ${isRight ? "min-[1300px]:justify-end" : "min-[1300px]:justify-start"}
      `}
    >
      {/* 점: 1300px 미만이면 왼쪽 라인 위, 이상이면 중앙 라인 위 */}
      <div
        className={`
          absolute bg-white rounded-full z-10
          top-3 w-4 h-4
          left-[7px] translate-x-0
          min-[1300px]:left-1/2 min-[1300px]:-translate-x-1/2
          ${inView ? "reveal-dot" : "opacity-0"}
        `}
      />

      {/* 컨텐츠 박스: 1300px 미만이면 왼쪽에서 시작(ml), 이상이면 좌/우 번갈아 */}
      <div
        className={`
          flex flex-col z-20
          w-full ml-10
          min-[1300px]:w-[45%] min-[1300px]:ml-0
          ${inView ? "reveal-up" : "opacity-0"}
          ${
            isRight
              ? "min-[1300px]:items-end min-[1300px]:text-right"
              : "min-[1300px]:items-start min-[1300px]:text-left"
          }
        `}
      >
        <span className="text-white text-base block mb-2">{item.year}</span>

        <div
          className="w-full bg-black border border-white"
          style={{
            borderRadius: "12px",
            padding: "16px 24px",
            textAlign: "left",
          }}
        >
          <p className="text-white text-lg font-thin leading-tight break-keep m-0">
            {item.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-0">
      <div className="mx-auto" style={{ maxWidth: "1232px" }}>
        <h2 className="text-white text-3xl font-thin leading-tight mb-16">
          Professional Timeline
        </h2>

        <div className="relative w-full">
          {/* 수직선: 1300px 미만이면 왼쪽, 이상이면 중앙 */}
          <div
            className="
              absolute z-0 top-[25px] bottom-0 w-[2px] bg-[#2c2c2c]
              left-[7px] translate-x-0
              min-[1300px]:left-1/2 min-[1300px]:-translate-x-1/2
            "
          />

          <div className="flex flex-col gap-16">
            {timelines.map((item, index) => (
              <TimelineRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}