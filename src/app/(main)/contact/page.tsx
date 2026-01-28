"use client";

import { CONTACT_INFO } from "@/_datas/contact_info.data"
import SnapshotTime from "@/_components/SnapshotTime";
import React from "react";


export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
       {/* 데스크탑에서 w-7xl을 유지, 모바일에서는 w-full로 */}
      <main className="flex flex-col w-full max-w-7xl py-20 px-6 mx-auto lg:py-35 lg:justify-center lg:items-center">

        {/* 상단 제목: 텍스트 갭을 줄이기 위해 mb-6 적용 */}
        <div className="w-full mb-6 lg:mb-12 smack-in-tr" style={{ animationDelay: "300ms" }}>
          <h1 className="text-4xl lg:text-[60px] font-light mb-4 tracking-tight uppercase">Get in Touch</h1>
          <h2 className="text-lg lg:text-xl font-light text-white/60 max-w-2xl leading-relaxed mb-2">
            Reach out for collaborations, questions, or just to say hi. I’m always open to connect!
          </h2>
        </div>

        {/* 메인 섹션: 기본은 세로, 데스크탑에서만 가로 */}
        <div className="flex flex-col lg:flex-row w-full gap-y-16 lg:gap-x-20">
            
          {/* 정보 부분: 모바일에서 1순위(order-1), 너비 꽉 참(w-full) */}
            {/* 데스크탑에서는 240px, 2순위(order-2) 유지 */}
          <div className="flex flex-col w-full lg:w-60 gap-10 text-lg font-light order-1 lg:order-2 pop-up" style={{ animationDelay: "300ms" }}>
            
            {/* Location Block: map() 사용 */}
            <div>
                <h3 className="text-sm text-neutral-600 font-light mb-4 uppercase tracking-widest">Location</h3>
                <div className="flex flex-col gap-2 text-base text-white/90">
                    {CONTACT_INFO.location.map((item, idx) => (
                        <React.Fragment key={idx}>
                        <p>{item}</p>
                        {idx === 0 && <SnapshotTime />}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Social Block: map() 사용 */}
            <div>
              <h3 className="text-sm text-neutral-600 font-light mb-4 uppercase tracking-widest">Get in Touch</h3>
              <div className="flex flex-col gap-3 text-base text-white/90">
                {CONTACT_INFO.socials.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 폼 부분: 모바일에서 2순위(order-2), 너비 꽉 참(w-full) */}
            {/* 데스크탑 800px과 1순위(order-1) 유지 */}
          <div className="w-full lg:w-200 order-2 lg:order-1">
            <form name="contact" method="post" className="space-y-8">
              
                {CONTACT_INFO.fields.map((field, i) => (
                    <div
                        key={field.id}
                        className="stagger flex flex-col gap-1 border-b border-neutral-600 focus-within:border-white transition-colors"
                        style={{ animationDelay: `${i * 90}ms` }}
                    >
                        <label htmlFor={field.id} className="text-sm text-white/50">
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.id}
                            className="bg-transparent outline-none w-full py-3"
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}


              {/* Message 영역 */}
              <div className="flex flex-col gap-1 border-b border-neutral-600 focus-within:border-white transition-colors pop-up" style={{ animationDelay: "360ms" }}>
                <label htmlFor="message" className="text-sm text-white/50">Message</label>
                <textarea 
                  id="message" 
                  className="bg-transparent resize-none outline-none w-full h-32 py-3" 
                  placeholder="I have a project in mind..."
                />
              </div>

              <div className="pt-4">
                <input 
                  type="submit" 
                  value="Send" 
                  className="cursor-pointer rounded-full bg-white px-10 py-3 text-base text-black font-medium hover:bg-neutral-200 transition-colors smack-in-tr" style={{ animationDelay: "50ms" }}
                />
              </div>
            </form>
          </div>
        </div>

      </main>
    </div>
  );
}