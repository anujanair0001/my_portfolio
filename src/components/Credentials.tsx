import { portfolioConfig } from '../data/config';
import { useState } from 'react';

export default function Credentials() {
  const { certifications, courses, awards, languages, highlights, education } = portfolioConfig;
  const [certPage, setCertPage] = useState(0);
  const [coursePage, setCoursePage] = useState(0);
  const [awardPage, setAwardPage] = useState(0);
  const [highlightPage, setHighlightPage] = useState(0);
  const itemsPerPage = 3;
  
  const paginatedCerts = certifications.slice(certPage * itemsPerPage, (certPage + 1) * itemsPerPage);
  const paginatedCourses = courses.slice(coursePage * itemsPerPage, (coursePage + 1) * itemsPerPage);
  const paginatedAwards = awards.slice(awardPage * itemsPerPage, (awardPage + 1) * itemsPerPage);
  const paginatedHighlights = highlights.slice(highlightPage * itemsPerPage, (highlightPage + 1) * itemsPerPage);


  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #111827 0%, #581c87 50%, #7c3aed 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '64px',
          background: 'linear-gradient(45deg, #06b6d4, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Credentials & Achievements
        </h2>
        
        {/* Education */}
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          backdropFilter: 'blur(4px)',
          border: '1px solid #374151',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            🎓 Education
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px'
          }}>
            {education.map((edu, index) => (
              <div key={index} style={{
                borderLeft: '4px solid #06b6d4',
                paddingLeft: '24px',
                backgroundColor: 'rgba(31, 41, 55, 0.3)',
                borderRadius: '0 8px 8px 0',
                padding: '16px 16px 16px 24px'
              }}>
                <h4 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '8px'
                }}>{edu.degree}</h4>
                <p style={{
                  color: '#c084fc',
                  fontSize: '18px',
                  marginBottom: '4px'
                }}>{edu.institution}</p>
                {edu.university && <p style={{
                  color: '#67e8f9',
                  fontSize: '14px',
                  marginBottom: '4px'
                }}>{edu.university}</p>}
                <p style={{
                  color: '#9ca3af'
                }}>{edu.year} • {edu.grade}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
         
          {/* Certifications 
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🏆 Certifications
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {paginatedCerts.map((cert, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>{cert.name}</h4>
                    <p style={{
                      color: '#c084fc',
                      fontSize: '14px'
                    }}>{cert.issuer} • {cert.year}</p>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                    backgroundColor: '#06b6d4',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>View Certificate</a>
                </div>
              ))}
              {certifications.length > itemsPerPage && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                  {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCertPage(i)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: i === certPage ? '#06b6d4' : '#374151',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div> */}

          {/* Courses */}
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📚 Courses
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {paginatedCourses.map((course, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>{course.name}</h4>
                    <p style={{
                      color: '#c084fc',
                      fontSize: '14px'
                    }}>{course.provider} • {course.year}</p>
                  </div>
                  <a href={course.link} target="_blank" rel="noopener noreferrer" style={{
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>View Certificate</a>
                </div>
              ))}
              {courses.length > itemsPerPage && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                  {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCoursePage(i)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: i === coursePage ? '#8b5cf6' : '#374151',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Languages */}
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🌍 Languages
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {languages.map((lang, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: 'white' }}>{lang.name}</span>
                  <span style={{
                    color: '#06b6d4',
                    fontSize: '14px'
                  }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🏅 Awards
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {paginatedAwards.map((award, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{
                      color: 'white',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>{award.name}</h4>
                    <p style={{
                      color: '#fbbf24',
                      fontSize: '14px'
                    }}>{award.issuer} • {award.year}</p>
                  </div>
                  <a href={award.link} target="_blank" rel="noopener noreferrer" style={{
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>View Award</a>
                </div>
              ))}
              {awards.length > itemsPerPage && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                  {Array.from({ length: Math.ceil(awards.length / itemsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setAwardPage(i)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: i === awardPage ? '#f59e0b' : '#374151',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Career Highlights */}
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              ⭐ Highlights
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {paginatedHighlights.map((highlight, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  <span style={{
                    color: '#06b6d4',
                    marginTop: '4px',
                    fontSize: '12px'
                  }}>•</span>
                  <span style={{
                    color: '#d1d5db',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>{highlight}</span>
                </div>
              ))}
              {highlights.length > itemsPerPage && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                  {Array.from({ length: Math.ceil(highlights.length / itemsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setHighlightPage(i)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: i === highlightPage ? '#06b6d4' : '#374151',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}