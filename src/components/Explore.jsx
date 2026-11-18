import { useEffect, useRef, useState } from 'react'
import { TERMINAL } from '../data/site'
import PatchProtocol from './PatchProtocol'
import Reveal from './Reveal'
import Section from './Section'

function jump(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Explore() {
  const [lines, setLines] = useState(() => [...TERMINAL.welcome])
  const [input, setInput] = useState('')
  const [playing, setPlaying] = useState(false)
  const [open, setOpen] = useState(true)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [lines, playing])

  const push = (...next) => setLines((prev) => [...prev, ...next])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    push(`> ${raw}`)

    switch (cmd) {
      case 'help':
        push(...TERMINAL.commands.help)
        break
      case 'whoami':
        push(...TERMINAL.commands.whoami)
        break
      case 'work':
        push('Opening /work…')
        jump('#work')
        break
      case 'xp':
      case 'experience':
        push('Opening /experience…')
        jump('#experience')
        break
      case 'stack':
      case 'skills':
        push('Opening /tech…')
        jump('#tech')
        break
      case 'contact':
        push('Opening /contact…')
        jump('#contact')
        break
      case 'play':
        push('Booting Patch Protocol…')
        setPlaying(true)
        break
      case 'clear':
        setLines([])
        break
      case 'exit':
      case 'close':
        push('Terminal minimized. Re-open anytime from this section.')
        setOpen(false)
        break
      default:
        push(`Unknown command: ${cmd}. Try help.`)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const value = input
    setInput('')
    run(value)
  }

  return (
    <Section id="explore">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="cyber-label mb-3">Optional · Interactive</p>
          <h2 className="m-0 font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.035em] text-ink">
            Explore mode
          </h2>
          <p className="mt-3 max-w-[34rem] font-sans text-sm leading-[1.7] text-muted">
            A small terminal for poking around the site — and a quick typing
            mini-game if you want it. Skip anytime; nothing here is required.
          </p>
        </div>
        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="border border-cyan px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/10"
          >
            Re-open terminal
          </button>
        ) : null}
      </Reveal>

      {open ? (
        <Reveal className="cyber-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
              <span className="text-cyan">moosa@dev</span> — zsh
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-cyan"
            >
              Minimize
            </button>
          </div>

          <div
            className="max-h-[22rem] overflow-y-auto px-4 py-4 font-mono text-[0.8125rem] leading-[1.7] text-muted"
            aria-live="polite"
          >
            {lines.map((line, i) => (
              <p
                key={`${i}-${line.slice(0, 24)}`}
                className={[
                  'm-0 whitespace-pre-wrap',
                  line.startsWith('>') ? 'text-ink' : '',
                ].join(' ')}
              >
                {line}
              </p>
            ))}
            <div ref={endRef} />
          </div>

          {!playing ? (
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-line px-4 py-3"
            >
              <span className="font-mono text-cyan" aria-hidden>
                ❯
              </span>
              <label className="sr-only" htmlFor="terminal-input">
                Terminal command
              </label>
              <input
                id="terminal-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 bg-transparent font-mono text-sm text-ink outline-none placeholder:text-muted/60"
                placeholder="help · whoami · play · exit"
              />
            </form>
          ) : null}

          {playing ? (
            <div className="border-t border-line px-4 pb-4">
              <PatchProtocol
                onExit={() => {
                  setPlaying(false)
                  push('Returned from Patch Protocol.')
                  requestAnimationFrame(() => inputRef.current?.focus())
                }}
              />
            </div>
          ) : null}
        </Reveal>
      ) : null}
    </Section>
  )
}
