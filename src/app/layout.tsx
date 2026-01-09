import type { Metadata } from "next";
import { Quicksand} from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chaeyeong Park | Web",
  description: "Computer science student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${quicksand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
