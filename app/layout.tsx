import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/components/header";
import { Cart } from "@/components/cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Header. Store | Next.js + Zustand + TailwindCSS + TypeScript",
  description: "Aplicação Next.js com TypeScript, Zustand e TailwindCSS. Carrinho com persistência de estado, controle de quantidade e hook useHasMounted para renderização segura no cliente.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Zustand",
    "TailwindCSS",
    "React Icons",
    "localStorage",
    "Gerenciamento de estado",
    "E-commerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true" >
        <div className="bg-zinc-300 font-sans">
          <main className="relative container mx-auto w-full min-h-screen p-4 sm:p-8">
            <Header/>
            <Cart/>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
