export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(12px)',
      zIndex: 50,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '20px',
          background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Portfolio
        </div>
        <div style={{
          display: 'flex',
          gap: '32px'
        }}>

          <a href="#projects" style={{
            color: '#d1d5db',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}>Projects</a>
          <a href="#contact" style={{
            color: '#d1d5db',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}