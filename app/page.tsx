import Header from '@/components/layout/Header'
import QuickCards from '@/components/features/QuickCards'
import Image from 'next/image'
import Link from 'next/link'

const historico = [
  {
    cor: '#e6f7f1', corTexto: '#1a9e75',
    titulo: 'Banho completo realizado',
    data: '15 maio · Shampoo premium + hidratacao',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#1a9e75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#1a9e75" strokeWidth="2"/></svg>,
  },
  {
    cor: '#e8f2fb', corTexto: '#4a90d9',
    titulo: 'Novo brinquedo adquirido',
    data: '10 maio · Bolinha de corda · R$ 28,00',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#4a90d9" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="#4a90d9" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  },
  {
    cor: '#fef9e7', corTexto: '#d4900a',
    titulo: 'Vacina V10 aplicada',
    data: '2 maio · Proxima dose em novembro',
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 3l6 6-9 9-3-3 9-9" stroke="#d4900a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 9l3-3-3-3-3 3" stroke="#d4900a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
]

export default function Home() {
  return (
    <main style={{ fontFamily: "'Nunito', sans-serif", background: '#f0f4f8', minHeight: '100vh' }} className="pb-24">
      
      <Header mostrarGreeting />

      {/* Container Principal Centralizado e Responsivo */}
      <div className="max-w-6xl mx-auto px-5 w-full">
        
        <QuickCards />

        {/* Layout em Grid: 1 coluna no mobile, 2 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Lado Esquerdo: Card do Pet (Ocupa 7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Seu Pet
            </p>
            <div className="card-3d" style={{
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(26,158,117,0.20)',
              position: 'relative', height: '100%', minHeight: '180px',
              background: 'linear-gradient(135deg, #1a9e75 0%, #0f6e56 100%)',
              cursor: 'pointer',
            }}>
              {/* Imagem do pet corrigida e mais visível */}
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
                alt="Thor"
                fill
                style={{ objectFit: 'cover', opacity: 0.45 }}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {/* Conteudo */}
              <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2 }}>
                <div style={{ color: 'white' }}>
                  <p style={{ fontSize: '28px', fontWeight: 900, fontFamily: "'Poppins',sans-serif", lineHeight: 1 }}>Thor</p>
                  <p style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>Golden Retriever · 3 anos · Grande</p>
                  <span style={{
                    display: 'inline-block', marginTop: '12px',
                    background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', borderRadius: '20px',
                    padding: '4px 14px', fontSize: '11px', fontWeight: 700,
                  }}>
                    Nivel 3 · 420 PetCoins
                  </span>
                </div>
                {/* Badge saude */}
                <div style={{
                  background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                  borderRadius: '16px', padding: '12px 16px', textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: 'white', lineHeight: 1 }}>98%</div>
                  <div style={{ fontSize: '10px', color: 'white', fontWeight: 600, marginTop: '2px' }}>Saude</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Próximo Cuidado + Histórico (Ocupa 5 colunas no desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Proximo agendamento */}
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Proximo Cuidado
              </p>
              <Link href="/agendar" className="card-3d" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'white', borderRadius: '20px', padding: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                textDecoration: 'none', color: 'inherit',
                border: '1px solid rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: 'linear-gradient(135deg, #e6f7f1, #c8f0e4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M7 16c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="#1a9e75" strokeWidth="2" strokeLinecap="round"/>
                    <ellipse cx="12" cy="8" rx="3" ry="2" stroke="#1a9e75" strokeWidth="2"/>
                    <path d="M4 8c1-2 3-3 4-2M20 8c-1-2-3-3-4-2" stroke="#1a9e75" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '15px', fontWeight: 800, margin: 0 }}>Banho e Tosa</p>
                  <p style={{ fontSize: '12px', color: '#8a94a6', margin: '3px 0 0' }}>Sexta, 30 de maio · 14h00</p>
                  <span style={{
                    display: 'inline-block', marginTop: '6px',
                    background: '#fff8e1', color: '#d4900a',
                    fontSize: '10px', fontWeight: 800, padding: '3px 10px', borderRadius: '20px',
                  }}>Em 4 dias</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#d0d5dd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Historico */}
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Historico Recente
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {historico.map((h, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    background: 'white', borderRadius: '16px', padding: '14px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: h.cor, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0,
                    }}>
                      {h.svg}
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 700, margin: 0 }}>{h.titulo}</p>
                      <p style={{ fontSize: '11px', color: '#8a94a6', marginTop: '3px' }}>{h.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}