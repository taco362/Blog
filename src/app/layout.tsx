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
        <div className="max-w-7xl mx-auto px-6"> 
          <Navbar /> 
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}