import Header from '@/components/layout/Header'

const conquistas = [
  { nome: 'Pet Cheirosinho', desc: '3 banhos no mes · Concluida', progresso: 100, cor: '#1a9e75', bg: '#e6f7f1',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 16c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="#1a9e75" strokeWidth="2" strokeLinecap="round"/><ellipse cx="12" cy="8" rx="3" ry="2" stroke="#1a9e75" strokeWidth="2"/></svg> },
  { nome: 'Comprador Fiel', desc: '5 pedidos · 3 de 5 concluidos', progresso: 60, cor: '#4a90d9', bg: '#e8f2fb',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#4a90d9" strokeWidth="2"/><path d="M3 6h18" stroke="#4a90d9" strokeWidth="2"/></svg> },
  { nome: 'Super Tutor', desc: '10 servicos em 3 meses · 7 de 10', progresso: 70, cor: '#d4900a', bg: '#fef9e7',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" stroke="#d4900a" strokeWidth="2" strokeLinejoin="round"/></svg> },
  { nome: 'Clube Premium', desc: 'Alcance 500 pts para desbloquear', progresso: 84, cor: '#7c5cbf', bg: '#f0eafb', bloqueado: true,
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#7c5cbf" strokeWidth="2"/><path d="M8 11V7a4 4 0 018 0v4" stroke="#7c5cbf" strokeWidth="2" strokeLinecap="round"/></svg> },
]

const recompensas = [
  { nome: 'Cupom R$ 20 OFF', pts: 200, cor: '#d4900a', bg: '#fef9e7' },
  { nome: 'Banho Gratuito', pts: 400, cor: '#1a9e75', bg: '#e6f7f1' },
  { nome: 'Kit Hidratacao', pts: 350, cor: '#4a90d9', bg: '#e8f2fb' },
]

export default function FidelidadePage() {
  return (
    <main style={{ background: '#f0f4f8', minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }}>
      <Header titulo="Fidelidade" subtitulo="Seus premios e conquistas" />

      {/* Card de pontos */}
      <div style={{ padding: '0 20px', marginTop: '-20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f9c846 0%, #f0a500 100%)',
          borderRadius: '24px', padding: '24px',
          boxShadow: '0 8px 32px rgba(249,200,70,0.40)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(60,40,0,0.65)', marginBottom: '4px' }}>PetCoins acumulados</p>
              <p style={{ fontSize: '52px', fontWeight: 900, fontFamily: "'Poppins',sans-serif", color: '#3d2c00', lineHeight: 1 }}>420</p>
            </div>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="white" opacity="0.9"/>
              </svg>
            </div>
          </div>
          {/* Barra de progresso para nivel 4 */}
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(60,40,0,0.65)' }}>Nivel 3</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#3d2c00' }}>80 pts para Nivel 4</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(0,0,0,0.12)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ width: '84%', height: '100%', background: '#3d2c00', borderRadius: '10px', opacity: 0.5 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div style={{ padding: '0 20px', marginTop: '24px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
          Conquistas
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {conquistas.map((c, i) => (
            <div key={i} className="card-3d" style={{
              background: 'white', borderRadius: '20px', padding: '16px',
              display: 'flex', alignItems: 'center', gap: '14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              opacity: c.bloqueado ? 0.6 : 1,
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {c.svg}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 800, margin: 0 }}>{c.nome}</p>
                <p style={{ fontSize: '11px', color: '#8a94a6', margin: '3px 0 8px' }}>{c.desc}</p>
                <div style={{ height: '6px', background: '#f0f4f8', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${c.progresso}%`, height: '100%',
                    background: c.bloqueado ? '#d0d5dd' : c.cor,
                    borderRadius: '10px', transition: 'width 0.8s ease',
                  }} />
                </div>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 900, color: c.cor, flexShrink: 0 }}>{c.progresso}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recompensas */}
      <div style={{ padding: '0 20px', marginTop: '24px', paddingBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
          Resgatar Recompensas
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {recompensas.map((r, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '20px', padding: '16px',
              display: 'flex', alignItems: 'center', gap: '14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="7" width="20" height="14" rx="3" stroke={r.cor} strokeWidth="2"/>
                  <path d="M16 7V5a4 4 0 00-8 0v2" stroke={r.cor} strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 800, margin: 0 }}>{r.nome}</p>
                <p style={{ fontSize: '12px', color: r.cor, fontWeight: 700, marginTop: '2px' }}>{r.pts} PetCoins</p>
              </div>
              <button style={{
                padding: '8px 16px', background: r.cor, color: 'white',
                border: 'none', borderRadius: '12px', fontFamily: "'Nunito',sans-serif",
                fontSize: '12px', fontWeight: 800, cursor: 'pointer',
              }}>
                Resgatar
              </button>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}