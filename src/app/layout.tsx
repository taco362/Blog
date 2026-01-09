import type { Metadata } from "next";
import { Quicksand} from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/projects/Navbar"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chaeyeong Park | Web",
  description: "Computer science student",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />  {/* 여기에 네비게이션 바를 두면 모든 페이지에 고정! */}
        <main>{children}</main> {/* 여기가 본문이 갈아 끼워지는 곳! */}
      </body>
    </html>
  );
}