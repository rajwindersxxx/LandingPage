import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TaskAi landing page",
  description: "Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them - all in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-color19 text-gray-200 font-Poppins ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
