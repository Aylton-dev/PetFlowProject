'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',           icon: '🏠', label: 'Home'       },
  { href: '/agendar',    icon: '📅', label: 'Agendar'    },
  { href: '/produtos',   icon: '🛍️', label: 'Produtos'   },
  { href: '/fidelidade', icon: '🏆', label: 'Fidelidade' },
]

export default function BottomNav() {
  const path = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #eef0f6',
      display: 'flex',
      zIndex: 50,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
    }}>
      {links.map(l => {
        const active = path === l.href
        return (
          <Link key={l.href} href={l.href} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            padding: '10px 4px 8px',
            fontSize: '10px',
            fontWeight: 700,
            fontFamily: "'Nunito', sans-serif",
            color: active ? '#1a9e75' : '#8a94a6',
            textDecoration: 'none',
            transition: 'color .2s',
          }}>
            <span style={{ fontSize: '22px' }}>{l.icon}</span>
            {l.label}
          </Link>
        )
      })}
    </nav>
  )
}