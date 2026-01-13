import type { Metadata } from "next";
import { Quicksand} from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/projects/Navbar"
import Footer from "@/_components/projects/Footer"

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
        <div className="flex flex-col items-center mx-auto"> 
          <Navbar /> 
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}