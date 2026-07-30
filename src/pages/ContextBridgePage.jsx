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

const FONT_DISPLAY = "'Fraunces', Georgia, serif"
const FONT_BOLD = "'Syne', system-ui, sans-serif"
const MUTED = '#6E6A65'

const LIVE = 'https://context-bridge-wine.vercel.app'
const BOOKMARKLET = 'https://context-bridge-wine.vercel.app/bookmarklet'
const GITHUB = 'https://github.com/moosairfaan/ContextBridge'

function Button({ href, children, variant = 'primary', external }) {
  const isPrimary = variant === 'primary'
  const bg = isPrimary ? C.amberDark : C.white
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
        border: `1.5px solid ${BORDER}`,
        boxShadow: SOFT_SHADOW,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </a>
  )
}

function Step({ number, children }) {
  return (
    <li
      style={{
        fontFamily: FONT_BOLD,
        fontWeight: 600,
        color: MUTED,
        fontSize: '1rem',
        lineHeight: 1.7,
        marginBottom: '0.75rem',
      }}
    >
      <span
        style={{
          fontWeight: 800,
          color: C.amberDark,
          marginRight: '0.5rem',
        }}
      >
        {number}.
      </span>
      {children}
    </li>
  )
}

export default function ContextBridgePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { -webkit-text-size-adjust: 100%; }
        body { margin: 0; padding: 0; background: ${C.linen}; overflow-x: hidden; }
        .page {
          min-height: 100vh;
          color: ${C.charcoal};
          font-family: ${FONT_BOLD};
          font-weight: 600;
          line-height: 1.65;
        }
        .container {
          max-width: 720px;
          margin: 0 auto;
          padding-left: max(1.25rem, env(safe-area-inset-left));
          padding-right: max(1.25rem, env(safe-area-inset-right));
        }
        .btn-group { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        @media (max-width: 768px) {
          .btn-group { flex-direction: column; width: 100%; }
          .btn-group .btn { width: 100%; }
        }
      `}</style>

      <div className="page" style={{ background: C.stone }}>
        <main
          style={{
            paddingTop: 'max(3rem, env(safe-area-inset-top))',
            paddingBottom: 'max(4rem, env(safe-area-inset-bottom))',
          }}
        >
          <div className="container">
            <a
              href="/"
              style={{
                display: 'inline-block',
                marginBottom: '2rem',
                fontFamily: FONT_BOLD,
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.amberDark,
                textDecoration: 'none',
              }}
            >
              ← Back
            </a>

            <article
              style={{
                background: C.white,
                borderRadius: '24px',
                overflow: 'hidden',
                border: `1.5px solid ${BORDER}`,
                boxShadow: SOFT_SHADOW,
              }}
            >
              <div style={{ height: '5px', background: C.navy }} />
              <div style={{ padding: '2rem' }}>
                <h1
                  style={{
                    margin: '0 0 1rem',
                    fontFamily: FONT_DISPLAY,
                    fontSize: 'clamp(2rem, 6vw, 2.75rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: C.charcoal,
                    lineHeight: 1.1,
                  }}
                >
                  ContextBridge
                </h1>
                <p
                  style={{
                    margin: '0 0 2rem',
                    fontFamily: FONT_BOLD,
                    fontWeight: 600,
                    color: MUTED,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Carry a conversation from one AI chat to another. Paste a
                  transcript (or grab it with a bookmarklet), get a compact
                  handoff summary, then continue in Claude — or any other chat.
                  Works with ChatGPT, Claude, Gemini, and Perplexity.
                </p>

                <h2
                  style={{
                    margin: '0 0 1rem',
                    fontFamily: FONT_DISPLAY,
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: C.wine,
                  }}
                >
                  Manual paste
                </h2>
                <ol
                  style={{
                    margin: '0 0 2rem',
                    paddingLeft: '1.25rem',
                    listStyle: 'none',
                  }}
                >
                  <Step number={1}>
                    Open the{' '}
                    <a
                      href={LIVE}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: C.amberDark, fontWeight: 800 }}
                    >
                      live app
                    </a>{' '}
                    and paste a conversation.
                  </Step>
                  <Step number={2}>
                    Pick a platform (or leave Auto), then click Format for Claude.
                  </Step>
                  <Step number={3}>
                    Copy the summary — or Open in Claude to copy and jump to a
                    new chat.
                  </Step>
                </ol>

                <h2
                  style={{
                    margin: '0 0 1rem',
                    fontFamily: FONT_DISPLAY,
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: C.charcoal,
                  }}
                >
                  Bookmarklet
                </h2>
                <ol
                  style={{
                    margin: '0 0 2rem',
                    paddingLeft: '1.25rem',
                    listStyle: 'none',
                  }}
                >
                  <Step number={1}>
                    Open the{' '}
                    <a
                      href={BOOKMARKLET}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: C.amberDark, fontWeight: 800 }}
                    >
                      bookmarklet page
                    </a>{' '}
                    and drag ContextBridge to your bookmarks bar.
                  </Step>
                  <Step number={2}>
                    On ChatGPT, Claude, Gemini, or Perplexity, click the
                    bookmark — a toast confirms the summary was copied.
                  </Step>
                  <Step number={3}>
                    Paste into the next chat and keep going. No network calls;
                    the bookmarklet is self-contained.
                  </Step>
                </ol>

                <div className="btn-group">
                  <Button href={LIVE} variant="primary" external>
                    Open App
                  </Button>
                  <Button href={BOOKMARKLET} variant="secondary" external>
                    Bookmarklet
                  </Button>
                  <Button href={GITHUB} variant="secondary" external>
                    GitHub
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}
