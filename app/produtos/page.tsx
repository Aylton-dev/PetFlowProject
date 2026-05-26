'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'

const categorias = ['Todos', 'Alimentacao', 'Higiene', 'Brinquedos', 'Saude']

const produtos = [
  {
    id: 1, nome: 'Racao Premium Carne', preco: 89, categoria: 'Alimentacao',
    desc: 'Formula completa para caes adultos de porte grande',
    tag: 'Mais vendido', tagCor: '#1a9e75', tagBg: '#e6f7f1',
    img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&q=80',
  },
  {
    id: 2, nome: 'Shampoo Hidratante', preco: 32, categoria: 'Higiene',
    desc: 'Formula natural sem parabenos · pelo sedoso',
    tag: 'Natural', tagCor: '#4a90d9', tagBg: '#e8f2fb',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&q=80',
  },
  {
    id: 3, nome: 'Kit Brinquedos', preco: 45, categoria: 'Brinquedos',
    desc: '3 brinquedos interativos para estimulo mental',
    tag: 'Kit especial', tagCor: '#d4900a', tagBg: '#fef9e7',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&q=80',
  },
  {
    id: 4, nome: 'Pasta Dental Pet', preco: 22, categoria: 'Higiene',
    desc: 'Sabor frango · higiene bucal completa · 60g',
    tag: 'Essencial', tagCor: '#7c5cbf', tagBg: '#f0eafb',
    img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=300&q=80',
  },
  {
    id: 5, nome: 'Suplemento Articular', preco: 68, categoria: 'Saude',
    desc: 'Colageno + glucosamina para articulacoes',
    tag: 'Saude', tagCor: '#d4729a', tagBg: '#fdf0f4',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&q=80',
  },
  {
    id: 6, nome: 'Caminha Termica', preco: 149, categoria: 'Brinquedos',
    desc: 'Tecido termico · tamanho G · lavavel na maquina',
    tag: 'Premium', tagCor: '#1a9e75', tagBg: '#e6f7f1',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&q=80',
  },
]

export default function ProdutosPage() {
  const [categoria, setCategoria] = useState('Todos')
  const [carrinho, setCarrinho] = useState<number[]>([])

  const filtrados = categoria === 'Todos' ? produtos : produtos.filter(p => p.categoria === categoria)

  function addCarrinho(id: number) {
    setCarrinho(prev => [...prev, id])
    setTimeout(() => setCarrinho(prev => prev.filter(i => i !== id)), 2000)
  }

  return (
    <main style={{ background: '#f0f4f8', minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }}>
      <Header titulo="Nossos Produtos" subtitulo="Tudo que o seu pet precisa" />

      {/* Filtro de categorias */}
      <div style={{ padding: '0 20px', marginTop: '-16px' }}>
        <div style={{
          display: 'flex', gap: '8px', overflowX: 'auto',
          paddingBottom: '4px', scrollbarWidth: 'none',
        }}>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              style={{
                padding: '8px 16px', borderRadius: '20px',
                border: '2px solid',
                borderColor: categoria === cat ? '#1a9e75' : '#eef0f6',
                background: categoria === cat ? '#1a9e75' : 'white',
                color: categoria === cat ? 'white' : '#8a94a6',
                fontFamily: "'Nunito',sans-serif", fontSize: '13px', fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de produtos */}
      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {filtrados.map(p => (
          <div key={p.id} className="card-3d" style={{
            background: 'white', borderRadius: '20px',
            overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            border: '1px solid rgba(0,0,0,0.04)',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Imagem */}
            <div style={{ position: 'relative', height: '120px', background: '#f0f4f8' }}>
              <Image src={p.img} alt={p.nome} fill style={{ objectFit: 'cover' }} />
              <span style={{
                position: 'absolute', top: '8px', left: '8px',
                background: p.tagBg, color: p.tagCor,
                fontSize: '9px', fontWeight: 800, padding: '3px 8px', borderRadius: '10px',
              }}>{p.tag}</span>
            </div>
            {/* Info */}
            <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontSize: '13px', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>{p.nome}</p>
              <p style={{ fontSize: '10px', color: '#8a94a6', margin: 0, lineHeight: 1.4 }}>{p.desc}</p>
              <div style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '16px', fontWeight: 900, color: '#1a9e75' }}>R$ {p.preco}</span>
                <button
                  onClick={() => addCarrinho(p.id)}
                  style={{
                    width: '32px', height: '32px', borderRadius: '10px',
                    background: carrinho.includes(p.id) ? '#e6f7f1' : '#1a9e75',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  {carrinho.includes(p.id) ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#1a9e75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '20px' }} />
    </main>
  )
}