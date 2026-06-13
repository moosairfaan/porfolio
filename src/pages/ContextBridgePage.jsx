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

const GITHUB = 'https://github.com/moosairfaan/ContextBridge'
const FORMATTER = 'https://github.com/moosairfaan/ContextBridge/blob/main/index.html'

function Button({ href, children, variant = 'primary', external }) {
  const isPrimary = variant === 'primary'
  const isInternal = href.startsWith('/')
  const bg = isPrimary ? C.amberDark : C.white
  const color = isPrimary ? C.white : C.charcoal

  return (
    <a
      href={href}
      target={external && !isInternal ? '_blank' : undefined}
      rel={external && !isInternal ? 'noopener noreferrer' : undefined}
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
              <div style={{ height: '5px', background: C.wine }} />
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
                  A bookmarklet that captures your ChatGPT conversation, formats a
                  handoff summary, and copies it to your clipboard so you can paste
                  it into Claude and pick up exactly where you left off.
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
                  Install the bookmarklet
                </h2>
                <ol
                  style={{
                    margin: '0 0 2rem',
                    paddingLeft: '1.25rem',
                    listStyle: 'none',
                  }}
                >
                  <Step number={1}>
                    Open{' '}
                    <a
                      href={`${GITHUB}/blob/main/bookmarklet.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: C.amberDark, fontWeight: 800 }}
                    >
                      bookmarklet.txt
                    </a>{' '}
                    on GitHub and copy the <code>javascript:</code> URL.
                  </Step>
                  <Step number={2}>
                    Create a new browser bookmark and paste that URL as the address.
                    Name it ContextBridge.
                  </Step>
                  <Step number={3}>
                    Open a ChatGPT conversation, click the bookmark, then paste the
                    copied summary into Claude.
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
                  How it works
                </h2>
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
                  ContextBridge reads your ChatGPT thread, splits it into turns,
                  pulls out the main topic and your last question, and formats a
                  short summary Claude can continue from — no retyping, no lost
                  context.
                </p>

                <div className="btn-group">
                  <Button href={GITHUB} variant="primary" external>
                    GitHub
                  </Button>
                  <Button href={FORMATTER} variant="secondary" external>
                    Open Formatter
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
