'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'

export default function MeusAgendamentosPage() {
  const [agendamentos, setAgendamentos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    async function buscarAgendamentos() {
      try {
        const res = await fetch('./agendamentos/api')

        if (!res.ok) {
          throw new Error(`Erro na requisição: Status ${res.status}`)
        }
        
        const data = await res.json()
        setAgendamentos(data)
      } catch (err: any) {
        setErro(err.message || 'Erro ao carregar agendamentos.')
      } finally {
        setLoading(false)
      }
    }

    buscarAgendamentos()
  }, [])

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>Carregando seus agendamentos...</div>
  }

  if (erro) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#d4729a' }}>Ops! {erro}</div>
  }

  return (
    <main style={{ background: '#f0f4f8', minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }} className="pb-16">
      <Header titulo="Meus Agendamentos" subtitulo="Acompanhe os horários marcados para o Thor" />
      
      <div className="max-w-4xl mx-auto px-5 w-full -mt-5 relative z-10">
        {/* Renderize seus cards mapeando o estado `agendamentos` aqui */}
        {agendamentos.map(item => (
          <div key={item.id} style={{ background: 'white', padding: '20px', borderRadius: '20px', marginBottom: '16px' }}>
            <p><strong>{item.data} às {item.horario}</strong> - {item.servico.nome}</p>
          </div>
        ))}
      </div>
    </main>
  )
}