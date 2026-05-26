import type { Metadata } from 'next'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'PetFlow 🐾',
  description: 'Cuidado com carinho e inteligência',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className="bg-bg min-h-screen pb-20">
        {children}
        <BottomNav />
      </body>
    </html>
  )
}