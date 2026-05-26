interface HeaderProps {
    titulo?: string
    subtitulo?: string
    mostrarGreeting?: boolean
    compact?: boolean
  }
  
  export default function Header({ titulo, subtitulo, mostrarGreeting = false, compact = false }: HeaderProps) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #1a9e75 0%, #0d8a65 50%, #0f6e56 100%)',
        padding: compact ? '20px 20px 32px' : '24px 20px 56px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Círculos decorativos */}
        <div style={{
          position: 'absolute', right: '-40px', top: '-40px',
          width: '180px', height: '180px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
        }} />
        <div style={{
          position: 'absolute', right: '60px', top: '-20px',
          width: '100px', height: '100px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }} />
        <div style={{
          position: 'absolute', left: '-20px', bottom: '-30px',
          width: '120px', height: '120px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
        }} />
  
        {/* Logo + avatar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Logo SVG */}
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="white" opacity="0.9"/>
                <circle cx="12" cy="9" r="3" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 900, fontFamily: "'Poppins',sans-serif", letterSpacing: '-0.5px' }}>
              PetFlow
            </span>
          </div>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="white" opacity="0.9"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
            </svg>
          </div>
        </div>
  
        {/* Conteúdo */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {mostrarGreeting ? (
            <>
              <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', fontWeight: 600 }}>
                Boa tarde, Ana
              </p>
              <p style={{ fontSize: '24px', fontWeight: 900, fontFamily: "'Poppins',sans-serif", lineHeight: 1.25 }}>
                O Thor está<br />esperando por você
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginTop: '12px', background: 'rgba(255,255,255,0.18)',
                borderRadius: '20px', padding: '5px 14px',
                fontSize: '12px', fontWeight: 700,
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a8ffde' }} />
                Pet Cheirosinho Nivel 3
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Poppins',sans-serif" }}>{titulo}</p>
              {subtitulo && <p style={{ fontSize: '13px', opacity: 0.75, marginTop: '4px' }}>{subtitulo}</p>}
            </>
          )}
        </div>
      </div>
    )
  }