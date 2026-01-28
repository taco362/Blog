
"use client";

import {useState} from "react";
import { navLinks } from "@/_datas/nav.data"; // 데이터 임포트
import StatusBadge from "../StatusBadge";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //메뉴 열림
  return (
    <nav className="py-6 fixed top-0 bg-black w-full z-50 border-b border-zinc-800/50">
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">

        {/*데스크톱*/}
        <div className="hidden md:flex gap-8 max-w-5xl text-lg font-thin">
            {navLinks.map((link) => (
        <Link key={link.id} href={link.href} className="trasition-all duration-200 hover:-translate-y-1">
          {link.label}
        </Link>
        ))}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
            </svg>
            </button>
        <div className="flex items-center gap-4">
          <StatusBadge />
        </div>
      </div>
     {/*모바일*/}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-start px-8 py-6 gap-6 border-t border-zinc-900 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.id} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // 클릭 시 메뉴 닫기
              className="text-xl font-thin text-zinc-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}