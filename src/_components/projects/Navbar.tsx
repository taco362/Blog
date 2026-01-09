import { navLinks } from "@/_datas/nav.data"; // 데이터 임포트
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex p-6 fixed top-0 bg-black w-full">
        <div className="flex px-6 gap-8 max-w-5xl text-lg font-thin">
            {navLinks.map((link) => (
        <Link key={link.id} href={link.href} className="trasition-all duration-200 hover:-translate-y-1">
          {link.label}
        </Link>
      ))}
        </div>
    </nav>
  );
}