import { portfolioConfig } from '../data/config';
import { useState } from 'react';

export default function Projects() {
  const { projects } = portfolioConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="projects" style={{
      padding: '80px 0',
      backgroundColor: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)'
      }}></div>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '48px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #06b6d4, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>Projects</h2>
          
          {projects.length > itemsPerPage && (
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={prevSlide}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '2px solid #374151',
                  backgroundColor: 'rgba(31, 41, 55, 0.8)',
                  color: '#06b6d4',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.3s'
                }}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '2px solid #374151',
                  backgroundColor: 'rgba(31, 41, 55, 0.8)',
                  color: '#06b6d4',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.3s'
                }}
              >
                →
              </button>
            </div>
          )}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(currentProjects.length, 3)}, 1fr)`,
          gap: '24px'
        }}>
          {currentProjects.map((project, index) => (
            <div 
              key={currentIndex * itemsPerPage + index}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #111827, #1f2937)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: '1px solid #374151',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div style={{
                padding: '24px',
                position: 'relative',
                zIndex: 10,
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: project.gradient === 'from-pink-500 to-rose-500' ? 'linear-gradient(45deg, #ec4899, #f43f5e)' :
                             project.gradient === 'from-blue-500 to-cyan-500' ? 'linear-gradient(45deg, #3b82f6, #06b6d4)' :
                             'linear-gradient(45deg, #8b5cf6, #6366f1)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🚀</span>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'white',
                  lineHeight: '1.3'
                }}>{project.title}</h3>
                <p style={{
                  color: '#9ca3af',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}>{project.description}</p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        color: '#06b6d4',
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                      title="GitHub Repository"
                    >
                      <span>⚡</span> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        color: '#a855f7',
                        textDecoration: 'none',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                      title="Live Demo"
                    >
                      <span>🌐</span> Live Demo
                    </a>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: '16px'
                }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{
                      backgroundColor: '#1f2937',
                      color: '#d1d5db',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      border: '1px solid #4b5563'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > itemsPerPage && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '32px',
            gap: '8px'
          }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: i === currentIndex ? '#06b6d4' : '#374151',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}