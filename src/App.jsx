import { useState } from 'react'

/** Palette pulled from profile.jpg — linen shirt, bar amber, concrete, night charcoal, wine accent */
const C = {
  linen: '#F2EDE6',
  stone: '#DDD8D2',
  glow: '#F7EDD8',
  amber: '#DDB96A',
  amberDark: '#B8893A',
  charcoal: '#1E2429',
  slate: '#2F3842',
  wine: '#B54A4A',
  navy: '#2C3E50',
  concrete: '#9A9590',
  white: '#FFFFFF',
}

const BORDER = 'rgba(30, 36, 41, 0.12)'
const SOFT_SHADOW = '0 16px 48px rgba(30, 36, 41, 0.1)'
const HOVER_SHADOW = '0 20px 56px rgba(30, 36, 41, 0.14)'

const FONT_DISPLAY = "'Fraunces', Georgia, serif"
const FONT_BOLD = "'Syne', system-ui, sans-serif"

const MUTED = '#6E6A65'
const TAG_COLORS = [C.amber, C.concrete, C.wine, C.navy, C.amberDark]

const PROFILE_SRC = '/profile.jpg'
/** Pan the photo inside the circle (0 = left/top, 100 = right/bottom) */
const PROFILE_POS_X = 37
const PROFILE_POS_Y = 25
/** Zoom in slightly so framing changes are more visible (1 = default) */
const PROFILE_SCALE = 1.2

const PROJECTS = [
  {
    title: 'EDGAR Financial Dashboard',
    tech: ['Python', 'FastAPI', 'SQLite', 'React', 'XBRL'],
    description:
      'Full-stack ETL pipeline ingesting SEC EDGAR filings, parsing XBRL financial data, served via REST API with a React dashboard.',
    liveUrl: 'https://edgarfinancial.vercel.app',
    accent: C.wine,
  },
  {
    title: 'SizeSync — AI Clothing Size Predictor',
    tech: ['React', 'Python', 'XGBoost', 'FastAPI', 'scikit-learn'],
    description:
      'Clothing fit prediction model trained on 30K+ body measurements, 99.7% accuracy across 5 brands, real-time inference API with 5.895ms latency.',
    liveUrl: 'https://size-sync-omega.vercel.app/',
    accent: C.amber,
  },
  {
    title: 'DropAlert — Drop Notification Platform',
    tech: ['Python', 'Playwright', 'Redis', 'PostgreSQL'],
    description:
      'Streetwear release tracker scraping Supreme, Nike SNKRS, StockX every 30 minutes, real-time SMS and email notifications with 99.9% uptime.',
    liveUrl: 'https://dropalert-sigma.vercel.app',
    accent: C.navy,
  },
]

const SKILLS = [
  {
    label: 'Programming Languages',
    headerColor: C.wine,
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'Dart',
      'C++',
      'SQL',
      'HTML/CSS',
    ],
  },
  {
    label: 'Frameworks & Libraries',
    headerColor: C.charcoal,
    items: [
      'React',
      'FastAPI',
      'Node.js',
      'Flutter',
      'scikit-learn',
      'XGBoost',
      'Recharts',
    ],
  },
  {
    label: 'Tools & Infrastructure',
    headerColor: C.amberDark,
    items: [
      'Git',
      'Vite',
      'Playwright',
      'Redis',
      'PostgreSQL',
      'SQLite',
      'SQLAlchemy',
    ],
  },
]

const LINKS = {
  github: 'https://github.com/moosairfaan',
  linkedin: 'https://www.linkedin.com/in/moosa-irfaan',
  email: 'moosairfaan0325@outlook.com',
}

function tagTextColor(bg) {
  const light = [C.amber, C.concrete, C.glow, C.stone, C.linen]
  return light.includes(bg) ? C.charcoal : C.white
}

function ProfilePhoto() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const frameStyle = {
    width: 'clamp(200px, 28vw, 280px)',
    height: 'clamp(200px, 28vw, 280px)',
    borderRadius: '50%',
    padding: '5px',
    background: C.amber,
    boxShadow: SOFT_SHADOW,
    flexShrink: 0,
  }

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
    background: C.linen,
    border: `3px solid ${BORDER}`,
  }

  if (failed) {
    return (
      <div style={frameStyle} aria-hidden="true">
        <div
          style={{
            ...innerStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: '4rem',
              fontWeight: 900,
              color: C.charcoal,
            }}
          >
            MI
          </span>
        </div>
      </div>
    )
  }

  return (
    <div style={frameStyle}>
      <div style={innerStyle}>
        {!loaded && (
          <span
            style={{
              fontFamily: FONT_BOLD,
              fontSize: '0.85rem',
              fontWeight: 700,
              color: MUTED,
            }}
          >
            …
          </span>
        )}
        <img
          src={PROFILE_SRC}
          alt="Moosa Irfaan"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: `${PROFILE_POS_X}% ${PROFILE_POS_Y}%`,
            transform: `scale(${PROFILE_SCALE})`,
            transformOrigin: `${PROFILE_POS_X}% ${PROFILE_POS_Y}%`,
            display: loaded ? 'block' : 'none',
          }}
        />
      </div>
    </div>
  )
}

function SectionHeader({ children, color }) {
  return (
    <h2
      className="section-title"
      style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 'clamp(2rem, 7vw, 3.75rem)',
        fontWeight: 900,
        margin: '0 0 2.5rem',
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
        color,
      }}
    >
      {children}
    </h2>
  )
}

function TechTag({ label, colorIndex }) {
  const bg = TAG_COLORS[colorIndex % TAG_COLORS.length]
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.4rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.78rem',
        fontWeight: 800,
        fontFamily: FONT_BOLD,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: tagTextColor(bg),
        background: bg,
        border: `1.5px solid ${BORDER}`,
      }}
    >
      {label}
    </span>
  )
}

function Button({ href, children, variant = 'primary', external, onDark }) {
  const isPrimary = variant === 'primary'
  const bg = isPrimary ? C.amberDark : onDark ? C.amber : C.white
  const color = isPrimary ? C.white : C.charcoal

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.85rem 1.75rem',
        minHeight: '48px',
        borderRadius: '9999px',
        fontWeight: 800,
        fontSize: '0.95rem',
        fontFamily: FONT_BOLD,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color,
        textDecoration: 'none',
        background: bg,
        border: `1.5px solid ${onDark ? 'rgba(255,255,255,0.2)' : BORDER}`,
        boxShadow: onDark ? 'none' : SOFT_SHADOW,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        if (!onDark) e.currentTarget.style.boxShadow = HOVER_SHADOW
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        if (!onDark) e.currentTarget.style.boxShadow = SOFT_SHADOW
      }}
    >
      {children}
    </a>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{
        background: C.white,
        borderRadius: '24px',
        overflow: 'hidden',
        border: `1.5px solid ${BORDER}`,
        boxShadow: SOFT_SHADOW,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = HOVER_SHADOW
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = SOFT_SHADOW
      }}
    >
      <div style={{ height: '5px', background: project.accent }} />
      <div className="card-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3
          style={{
            margin: 0,
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
            fontWeight: 800,
            color: C.charcoal,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: FONT_BOLD,
            fontWeight: 600,
            color: MUTED,
            fontSize: '1rem',
            lineHeight: 1.7,
            flex: 1,
          }}
        >
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tech.map((t, i) => (
            <TechTag key={t} label={t} colorIndex={index * 3 + i} />
          ))}
        </div>
        {project.liveUrl && (
          <div style={{ marginTop: '0.5rem' }}>
            <Button href={project.liveUrl} variant="primary" external>
              View Live →
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { -webkit-text-size-adjust: 100%; }
        body {
          margin: 0;
          padding: 0;
          background: ${C.linen};
          overflow-x: hidden;
        }
        .page {
          min-height: 100vh;
          color: ${C.charcoal};
          font-family: ${FONT_BOLD};
          font-weight: 600;
          line-height: 1.65;
          overflow-x: hidden;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: max(1.25rem, env(safe-area-inset-left));
          padding-right: max(1.25rem, env(safe-area-inset-right));
        }
        .section { padding: 5.5rem 0; }
        .hero-row {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        .hero-copy {
          flex: 1 1 auto;
          min-width: 0;
          max-width: 640px;
        }
        .hero-photo-wrap {
          flex: 0 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-label { letter-spacing: 0.2em; }
        .hero-name {
          font-size: clamp(2.75rem, 5vw, 5rem);
          line-height: 1.02;
        }
        .hero-school {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          line-height: 1.3;
        }
        .hero-tagline {
          font-size: clamp(1.25rem, 2.2vw, 1.85rem);
          line-height: 1.35;
        }
        .btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-btns {
          justify-content: center;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }
        .project-card,
        .skill-card {
          height: 100%;
        }
        @media (min-width: 769px) {
          .hero-section {
            padding-top: 5.5rem !important;
          }
        }
        .footer-email {
          word-break: break-word;
          overflow-wrap: anywhere;
          max-width: 100%;
        }
        @media (max-width: 1024px) {
          .hero-row {
            gap: 2rem;
          }
          .card-grid {
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          }
        }
        @media (max-width: 900px) {
          .hero-row {
            flex-wrap: wrap;
          }
          .hero-photo-wrap {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .section { padding: 3.5rem 0; }
          .section-title { margin-bottom: 1.75rem !important; }
          .hero-row {
            flex-direction: column-reverse;
            flex-wrap: wrap;
            align-items: center;
            gap: 2rem;
            text-align: center;
          }
          .hero-copy {
            flex: 1 1 auto;
            width: 100%;
            max-width: none;
          }
          .hero-photo-wrap {
            width: 100%;
            justify-content: center;
          }
          .hero-name {
            font-size: clamp(2.5rem, 10vw, 3.5rem);
            line-height: 1.05;
            word-break: break-word;
          }
          .hero-school {
            font-size: clamp(1.15rem, 4.2vw, 1.5rem);
          }
          .hero-tagline {
            font-size: clamp(1.15rem, 4vw, 1.5rem);
          }
          .footer-btns {
            width: 100%;
            max-width: 320px;
          }
          .footer-email { padding: 0 0.5rem; }
          .hero-label { letter-spacing: 0.14em; font-size: 0.9rem; }
          .btn-group {
            flex-direction: column;
            width: 100%;
          }
          .btn-group .btn {
            width: 100%;
          }
          .card-grid { gap: 1.25rem; }
          .card-body { padding: 1.5rem !important; }
          .skill-card { padding: 1.5rem !important; }
        }
        @media (max-width: 480px) {
          .section { padding: 2.75rem 0; }
          .container {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }
          .hero-name { font-size: clamp(2.15rem, 11vw, 3rem); }
          .section-title {
            font-size: clamp(1.75rem, 8vw, 2.25rem) !important;
            margin-bottom: 1.5rem !important;
          }
          .card-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .card-body { padding: 1.25rem !important; }
          .skill-card { padding: 1.25rem !important; }
          footer.section { padding-bottom: max(2.5rem, env(safe-area-inset-bottom)) !important; }
        }
      `}</style>

      <div className="page">
        <header
          className="section hero-section"
          style={{
            paddingTop: 'max(3.5rem, env(safe-area-inset-top))',
            paddingBottom: '4.5rem',
            background: C.linen,
          }}
        >
          <div className="container">
            <div className="hero-row">
              <div className="hero-copy">
                <p
                  className="hero-label"
                  style={{
                    margin: '0 0 1.25rem',
                    fontFamily: FONT_BOLD,
                    fontSize: '1rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: C.amberDark,
                  }}
                >
                  Portfolio
                </p>
                <h1
                  className="hero-name"
                  style={{
                    margin: '0 0 1rem',
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    color: C.charcoal,
                  }}
                >
                  Moosa Irfaan
                </h1>
                <p
                  className="hero-school"
                  style={{
                    margin: '0 0 0.75rem',
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 800,
                    fontStyle: 'italic',
                    letterSpacing: '-0.02em',
                    color: C.wine,
                  }}
                >
                  M.S. Computer Engineering @ NYU
                </p>
                <p
                  style={{
                    margin: '0 0 1.75rem',
                    fontFamily: FONT_BOLD,
                    fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
                    color: MUTED,
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  B.S. Computer Science + Mathematics @ St. Joseph&apos;s
                  University · GPA 3.7
                </p>
                <p
                  className="hero-tagline"
                  style={{
                    margin: '0 0 2rem',
                    fontFamily: FONT_BOLD,
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    color: C.amberDark,
                  }}
                >
                  Building things that ship.
                </p>
                <div className="btn-group">
                  <Button href={LINKS.github} variant="primary" external>
                    GitHub
                  </Button>
                  <Button href={LINKS.linkedin} variant="secondary" external>
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="hero-photo-wrap">
                <ProfilePhoto />
              </div>
            </div>
          </div>
        </header>

        <section
          id="projects"
          className="section"
          style={{ background: C.stone }}
        >
          <div className="container">
            <SectionHeader color={C.charcoal}>Projects</SectionHeader>
            <div className="card-grid">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section" style={{ background: C.glow }}>
          <div className="container">
            <SectionHeader color={C.charcoal}>Skills</SectionHeader>
            <div className="card-grid">
              {SKILLS.map((category) => (
                <div
                  key={category.label}
                  className="skill-card"
                  style={{
                    background: C.linen,
                    borderRadius: '24px',
                    padding: '2rem',
                    border: `1.5px solid ${BORDER}`,
                    boxShadow: SOFT_SHADOW,
                  }}
                >
                  <h3
                    style={{
                      margin: '0 0 1.5rem',
                      fontFamily: FONT_DISPLAY,
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: category.headerColor,
                    }}
                  >
                    {category.label}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {category.items.map((skill, i) => (
                      <TechTag key={skill} label={skill} colorIndex={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          className="section"
          style={{
            paddingTop: '4rem',
            paddingBottom: 'max(4.5rem, env(safe-area-inset-bottom))',
            background: C.slate,
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: FONT_DISPLAY,
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: 800,
                fontStyle: 'italic',
                color: C.glow,
              }}
            >
              Let&apos;s build something together.
            </p>
            <a
              className="footer-email"
              href={`mailto:${LINKS.email}`}
              style={{
                fontFamily: FONT_BOLD,
                color: C.amber,
                fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
                fontWeight: 800,
                letterSpacing: '0.02em',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.linen
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.amber
              }}
            >
              {LINKS.email}
            </a>
            <div className="btn-group footer-btns">
              <Button href={LINKS.github} variant="secondary" external onDark>
                GitHub
              </Button>
              <Button href={LINKS.linkedin} variant="primary" external onDark>
                LinkedIn
              </Button>
            </div>
            <p
              style={{
                margin: '1rem 0 0',
                fontFamily: FONT_BOLD,
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(242, 237, 230, 0.55)',
              }}
            >
              © {new Date().getFullYear()} Moosa Irfaan
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
