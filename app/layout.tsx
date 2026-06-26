import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import MatrixBackground from "@/components/MatrixBackground";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans p-0 m-0 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300 selection:bg-accent selection:text-black`}
      >
        <ThemeProvider>
          <MatrixBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}