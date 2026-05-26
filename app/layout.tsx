import type { Metadata } from 'next'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'

export const metadata: Metadata = {
  title: 'PetFlow 🐾',
  description: 'Cuidado com carinho e inteligência',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{
        fontFamily: "'Nunito', sans-serif",
        backgroundColor: '#f4f6fb',
        minHeight: '100vh',
        paddingBottom: '80px',
        margin: 0,
      }}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}