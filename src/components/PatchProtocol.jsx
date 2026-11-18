import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const BUGS = [
  'null_ptr',
  'race_cond',
  'off_by_one',
  'segfault',
  'memory_leak',
  'deadlock',
  'type_error',
  'timeout',
]

function pickBug(exclude) {
  const pool = BUGS.filter((b) => b !== exclude)
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * Patch Protocol — type the bug id and Enter to clear it.
 * Esc quits. Optional; does not block the rest of the site.
 */
export default function PatchProtocol({ onExit }) {
  const reduce = useReducedMotion()
  const inputRef = useRef(null)
  const [target, setTarget] = useState(() => pickBug())
  const [value, setValue] = useState('')
  const [patched, setPatched] = useState(0)
  const [misses, setMisses] = useState(0)
  const [seconds, setSeconds] = useState(reduce ? 0 : 30)
  const [done, setDone] = useState(false)
  const [message, setMessage] = useState('Type the bug id. Enter to patch. Esc to quit.')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (reduce || done) return undefined
    if (seconds <= 0) {
      setDone(true)
      setMessage(`Session complete — ${patched} patched, ${misses} misses.`)
      return undefined
    }
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [seconds, done, reduce, patched, misses])

  const finish = useCallback(
    (text) => {
      setDone(true)
      setMessage(text)
    },
    [],
  )

  const submit = (e) => {
    e.preventDefault()
    if (done) return
    const guess = value.trim().toLowerCase()
    if (!guess) return
    if (guess === target) {
      const nextPatched = patched + 1
      setPatched(nextPatched)
      setValue('')
      if (nextPatched >= 8) {
        finish(`Nice — ${nextPatched} bugs patched. System stable.`)
        return
      }
      setTarget(pickBug(target))
      setMessage('Patched. Next bug incoming…')
    } else {
      setMisses((m) => m + 1)
      setValue('')
      setMessage('Miss — that wasn’t the active bug.')
    }
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onExit()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onExit])

  return (
    <div
      className="cyber-panel mt-4 p-4 sm:p-5"
      role="region"
      aria-label="Patch Protocol mini-game"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="cyber-label m-0">Patch Protocol</p>
        <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
          {reduce ? 'untimed' : `${seconds}s`} · {patched} patched · {misses} misses
        </p>
      </div>

      <p className="m-0 font-mono text-sm text-muted">{message}</p>

      {!done ? (
        <>
          <p className="mt-5 font-mono text-[clamp(1.25rem,3vw,1.75rem)] tracking-wide text-magenta">
            bug::{target}
          </p>
          <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="patch-input">
              Type bug id to patch
            </label>
            <input
              id="patch-input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 border border-line bg-bg px-3 py-2 font-mono text-sm text-ink outline-none focus:border-cyan"
              placeholder="type bug id…"
            />
            <button
              type="submit"
              className="border border-cyan bg-cyan/10 px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/20"
            >
              Patch
            </button>
          </form>
        </>
      ) : (
        <button
          type="button"
          onClick={onExit}
          className="mt-5 border border-line px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink transition-colors hover:border-cyan hover:text-cyan"
        >
          Back to terminal
        </button>
      )}

      <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
        Esc exits · optional · does not affect the rest of the site
      </p>
    </div>
  )
}
