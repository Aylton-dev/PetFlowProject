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
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50
                    flex shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      {links.map(l => {
        const active = path === l.href
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`flex-1 flex flex-col items-center justify-center gap-1
                        py-2 text-[10px] font-bold transition-colors
                        ${active ? 'text-verde' : 'text-muted'}`}
          >
            <span className="text-[22px]">{l.icon}</span>
            {l.label}
          </Link>
        )
      })}
    </nav>
  )
}