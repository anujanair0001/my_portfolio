import { useState, useMemo } from 'react';
import { portfolioConfig } from '../data/config';

export default function Hero() {
  const { personal, experience, skills, about } = portfolioConfig;
  const [showAll, setShowAll] = useState(false);
  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #111827 0%, #475569 50%, #374151 100%)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Hero Section */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '60px',
          marginBottom: '80px'
        }}>
          {/* Left - Profile Info */}
          <div style={{
            flex: '2',
            paddingRight: '40px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                padding: '3px',
                flexShrink: 0
              }}>
                <img 
                  src={personal.profileImage} 
                  alt={personal.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
              <div>
                <h1 style={{
                  fontSize: '42px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px',
                  lineHeight: '1.1'
                }}>
                  {personal.name}
                </h1>
                <h2 style={{
                  fontSize: '20px',
                  color: '#67e8f9',
                  marginBottom: '0'
                }}>
                  {personal.title}
                </h2>
              </div>
            </div>
            
            <p style={{
              fontSize: '18px',
              color: '#d1d5db',
              marginBottom: '24px',
              lineHeight: '1.7'
            }}>
              {personal.description}
            </p>
            
            {/* About Me under profile */}
            <div style={{
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>About Me</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <p style={{
                  fontSize: '16px',
                  color: '#d1d5db',
                  lineHeight: '1.7'
                }}>{about.paragraph1}</p>
                <p style={{
                  fontSize: '16px',
                  color: '#d1d5db',
                  lineHeight: '1.7'
                }}>{about.paragraph2}</p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="#projects" style={{
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 0.3s'
              }}>
                View Projects
              </a>
              <a href="#contact" style={{
                border: '2px solid #a855f7',
                color: '#c084fc',
                padding: '12px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}>
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Right - Experience */}
          <div style={{
            flex: '1',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              borderBottom: '2px solid #06b6d4',
              paddingBottom: '8px'
            }}>Experience</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxHeight: '350px',
              overflowY: 'auto'
            }}>
              {displayedExperience.map((exp, index) => (
                <div key={index} style={{
                  borderLeft: '3px solid #06b6d4',
                  paddingLeft: '16px',
                  paddingBottom: '16px',
                  borderBottom: index < displayedExperience.length - 1 ? '1px solid #374151' : 'none'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '4px'
                  }}>{exp.title}</h4>
                  <p style={{
                    color: '#c084fc',
                    fontSize: '13px',
                    marginBottom: '4px',
                    fontWeight: '500'
                  }}>{exp.company}</p>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                    marginBottom: '8px'
                  }}>{exp.period}</p>
                  <p style={{
                    color: '#d1d5db',
                    fontSize: '13px',
                    lineHeight: '1.4'
                  }}>{exp.description}</p>
                </div>
              ))}
              {experience.length > 3 && (
                <button 
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    color: '#06b6d4',
                    fontSize: '13px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: '500',
                    marginTop: '8px'
                  }}
                >
                  {showAll ? '↑ Show Less' : `↓ Show ${experience.length - 3} More`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '32px',
            borderBottom: '2px solid #374151',
            paddingBottom: '12px'
          }}>Technical Skills</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {Object.entries(skills).map(([category, skillList]) => {
              const categoryNames = {
                programming: "Programming",
                databases: "Databases", 
                frameworks: "Web Frameworks",
                dataScripting: "Data & Scripting",
                practices: "Practices",
                tools: "Tools",
                frontend: "Frontend",
                devops: "DevOps & Cloud (Basic Familiarity)"
              };
              return (
                <div key={category} style={{
                  backgroundColor: 'rgba(31, 41, 55, 0.6)',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#06b6d4',
                    marginBottom: '12px',
                    borderBottom: '1px solid #374151',
                    paddingBottom: '6px'
                  }}>{categoryNames[category]}</h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {skillList.map((skill) => (
                      <div key={skill.name} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px'
                      }}>
                        <span style={{ fontSize: '14px' }}>{skill.icon}</span>
                        <span style={{ color: 'white' }}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}