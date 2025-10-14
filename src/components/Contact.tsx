import { portfolioConfig } from '../data/config';

export default function Contact() {
  const { personal } = portfolioConfig;
  return (
    <section id="contact" style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #111827 0%, #581c87 50%, #7c3aed 100%)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '32px',
          background: 'linear-gradient(45deg, #06b6d4, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Get In Touch</h2>
        <p style={{
          fontSize: '20px',
          color: '#d1d5db',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Ready to work together? Let's discuss your next project.
        </p>
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a 
            href={`mailto:${personal.email}`} 
            style={{
              background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'transform 0.3s',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '20px' }}>📧</span>
            Send Email
          </a>
          <a 
            href={personal.linkedin} 
            target="_blank" 
            style={{
              border: '1px solid #a855f7',
              color: '#c084fc',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '20px' }}>👤</span>
            LinkedIn
          </a>
          <a 
            href={personal.github} 
            target="_blank" 
            style={{
              border: '1px solid #9ca3af',
              color: '#d1d5db',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <span style={{ fontSize: '20px' }}>🐈</span>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}