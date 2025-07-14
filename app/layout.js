import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AIバーテンダー",
  description: "あなたの手元にある材料、アルコールの強さ、味、今の気分を入力するとAIがオリジナルのカクテルを考え、レシピなどを教えてくれます",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
         <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4 text-gray-800">
        {children}
        <Analytics/>
        </div>
      </body>
    </html>
  );
}
