'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header'

const servicos = [
  {
    id: 1, nome: 'Banho Completo', preco: 'R$ 60',
    desc: 'Shampoo premium, condicionador e perfume',
    duracao: '1h30', cor: '#e6f7f1', corDestaque: '#1a9e75',
    svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 16c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="#1a9e75" strokeWidth="2" strokeLinecap="round"/><ellipse cx="12" cy="8" rx="3" ry="2" stroke="#1a9e75" strokeWidth="2"/><path d="M4 8c1-2 3-3 4-2M20 8c-1-2-3-3-4-2" stroke="#1a9e75" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: 2, nome: 'Banho e Tosa', preco: 'R$ 90',
    desc: 'Banho completo com corte personalizado',
    duracao: '2h30', cor: '#e8f2fb', corDestaque: '#4a90d9',
    svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="3" stroke="#4a90d9" strokeWidth="2"/><circle cx="6" cy="18" r="3" stroke="#4a90d9" strokeWidth="2"/><path d="M9 6h5l5 6-5 6H9" stroke="#4a90d9" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
  {
    id: 3, nome: 'Tosa Higienica', preco: 'R$ 40',
    desc: 'Patinhas, barriga e regiao higienica',
    duracao: '45min', cor: '#fef9e7', corDestaque: '#d4900a',
    svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 3v12M6 3C6 3 12 6 12 12M6 15c0 1.7 1.3 3 3 3" stroke="#d4900a" strokeWidth="2" strokeLinecap="round"/><circle cx="17" cy="8" r="3" stroke="#d4900a" strokeWidth="2"/></svg>,
  },
  {
    id: 4, nome: 'Hidratacao', preco: 'R$ 35',
    desc: 'Tratamento profundo de pelo e pele',
    duracao: '1h', cor: '#fdf0f4', corDestaque: '#d4729a',
    svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 6 9 6 14a6 6 0 0012 0c0-5-6-11-6-11z" stroke="#d4729a" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
  {
    id: 5, nome: 'Consulta Veterinaria', preco: 'R$ 120',
    desc: 'Avaliacao clinica geral do pet',
    duracao: '1h', cor: '#f0eafb', corDestaque: '#7c5cbf',
    svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#7c5cbf" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="#7c5cbf" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  },
]

const horarios = ['08:00','09:00','10:00','10:30','11:00','14:00','15:00','15:30','16:00','17:00']

export default function AgendarPage() {
  const [selecionado, setSelecionado] = useState<number | null>(null)
  const [horario, setHorario] = useState<string | null>(null)
  const [confirmado, setConfirmado] = useState(false)

  function confirmar() {
    if (!selecionado || !horario) return
    setConfirmado(true)
    setTimeout(() => setConfirmado(false), 3000)
    setSelecionado(null)
    setHorario(null)
  }

  return (
    <main style={{ background: '#f0f4f8', minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }} className="pb-16">
      <Header titulo="Agendar Servico" subtitulo="Escolha o melhor cuidado para o Thor" />

      {/* Notificacao de sucesso */}
      {confirmado && (
        <div style={{
          position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
          background: '#1a9e75', color: 'white', borderRadius: '20px',
          padding: '12px 24px', fontWeight: 800, fontSize: '14px',
          boxShadow: '0 8px 32px rgba(26,158,117,0.4)', zIndex: 100,
        }}>
          Agendamento confirmado com sucesso!
        </div>
      )}

      {/* CONTAINER RESPONSIVO CENTRALIZADO */}
      <div className="max-w-6xl mx-auto px-5 w-full -mt-5 relative z-10 flex flex-col gap-6">
        
        {/* Pet selecionado */}
        <div>
          <div style={{
            background: 'white', borderRadius: '20px', padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: '#e6f7f1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 16c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="#1a9e75" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="12" cy="8" rx="3" ry="2" stroke="#1a9e75" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 800, margin: 0 }}>Thor · Golden Retriever</p>
              <p style={{ fontSize: '11px', color: '#8a94a6' }}>Porte grande · 3 anos</p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <span style={{
                background: '#e6f7f1', color: '#1a9e75',
                fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px',
              }}>Selecionado</span>
            </div>
          </div>
        </div>

        {/* Lista de servicos (Grid Responsivo: 1 col celular, 2 col tablet, 3 col pc) */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
            Servicos Disponiveis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicos.map(s => (
              <div
                key={s.id}
                onClick={() => setSelecionado(s.id === selecionado ? null : s.id)}
                className="card-3d"
                style={{
                  background: 'white', borderRadius: '20px', padding: '16px',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  boxShadow: selecionado === s.id ? `0 8px 32px ${s.corDestaque}33` : '0 4px 20px rgba(0,0,0,0.06)',
                  border: selecionado === s.id ? `2px solid ${s.corDestaque}` : '2px solid transparent',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: s.cor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {s.svg}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '15px', fontWeight: 800, margin: 0 }}>{s.nome}</p>
                  <p style={{ fontSize: '12px', color: '#8a94a6', margin: '3px 0 0', lineHeight: 1.2 }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: s.corDestaque, background: s.cor, padding: '2px 8px', borderRadius: '10px' }}>
                      {s.duracao}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontSize: '16px', fontWeight: 900, color: s.corDestaque, margin: 0 }}>{s.preco}</p>
                  {selecionado === s.id && (
                    <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'flex-end' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" fill={s.corDestaque}/>
                        <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horarios (Grid Responsivo: 4 col celular, 6 col tablet, 8 col pc) */}
        {selecionado && (
          <div className="w-full">
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#8a94a6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              Horarios Disponiveis — Hoje
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
              {horarios.map(h => (
                <button
                  key={h}
                  onClick={() => setHorario(h)}
                  style={{
                    padding: '12px 0', border: '2px solid',
                    borderColor: horario === h ? '#1a9e75' : '#eef0f6',
                    borderRadius: '14px', fontFamily: "'Nunito',sans-serif",
                    fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                    background: horario === h ? '#1a9e75' : 'white',
                    color: horario === h ? 'white' : '#1a1a2e',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Botao confirmar (Centralizado em telas grandes) */}
        {selecionado && horario && (
          <div className="w-full max-w-md mx-auto mt-4">
            <button
              onClick={confirmar}
              className="btn-3d"
              style={{
                width: '100%', padding: '18px',
                background: 'linear-gradient(135deg, #1a9e75, #0f6e56)',
                color: 'white', border: 'none', borderRadius: '18px',
                fontFamily: "'Nunito',sans-serif", fontSize: '16px', fontWeight: 900,
                cursor: 'pointer', letterSpacing: '0.02em',
                boxShadow: '0 6px 20px rgba(26,158,117,0.3)',
              }}
            >
              Confirmar Agendamento
            </button>
          </div>
        )}

      </div>
    </main>
  )
}