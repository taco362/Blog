import { navLinks } from "@/_datas/nav.data"; // 데이터 임포트
import StatusBadge from "../StatusBadge";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-6 fixed top-0 bg-black min-w-7xl">
      <div className="flex items-center justify-between px-6">
        <div className="flex gap-8 max-w-5xl text-lg font-thin">
            {navLinks.map((link) => (
        <Link key={link.id} href={link.href} className="trasition-all duration-200 hover:-translate-y-1">
          {link.label}
        </Link>
        ))}
        </div>
        <div className="hidden md:block">
          <StatusBadge />
        </div>
      </div>
    </nav>
  );
}