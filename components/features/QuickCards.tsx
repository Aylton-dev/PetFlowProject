'use client'
import Link from 'next/link'

const cards = [
  {
    href: '/agendar',
    label: 'Agendar',
    sub: 'Banho, tosa e mais',
    color: '#1a9e75',
    light: '#e6f7f1',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="4" stroke="#1a9e75" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#1a9e75" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="2" fill="#1a9e75"/>
      </svg>
    ),
  },
  {
    href: '/produtos',
    label: 'Produtos',
    sub: 'Racao, brinquedos',
    color: '#4a90d9',
    light: '#e8f2fb',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#4a90d9" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="#4a90d9" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function QuickCards() {
  return (
    /* Removido padding inline fixo e adicionado grid responsivo do Tailwind */
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full -mt-7 relative z-10">
      {cards.map(c => (
        <Link key={c.href} href={c.href} className="card-3d" style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'between',
          gap: '12px',
          textDecoration: 'none',
          color: 'inherit',
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.04)',
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '14px',
            backgroundColor: c.light,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {c.svg}
          </div>
          <div>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a2e', margin: 0 }}>{c.label}</p>
            <p style={{ fontSize: '12px', color: '#8a94a6', marginTop: '2px', lineHeight: 1.2 }}>{c.sub}</p>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontSize: '11px', fontWeight: 700, color: c.color,
            marginTop: 'auto'
          }}>
            Ver tudo
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke={c.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      ))}
    </div>
  )
}