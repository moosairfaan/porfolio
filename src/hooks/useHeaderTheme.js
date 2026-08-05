import { useEffect, useState } from 'react'

const DEFAULT_THEME = 'light'

function normalizeTheme(value) {
  return value === 'dark' ? 'dark' : 'light'
}

/**
 * Pick the most specific themed region under a sample X along the header band.
 * Prefers smaller areas (column/region overrides) then the lower section on the page.
 */
function pickThemeAtX(elements, sampleX, bandY) {
  const candidates = []

  for (const el of elements) {
    const rect = el.getBoundingClientRect()
    if (sampleX < rect.left || sampleX >= rect.right) continue
    if (rect.bottom < bandY || rect.top > bandY) continue
    candidates.push({ el, rect, area: rect.width * rect.height })
  }

  if (!candidates.length) return DEFAULT_THEME

  candidates.sort((a, b) => {
    if (a.area !== b.area) return a.area - b.area
    return b.rect.top - a.rect.top
  })

  return normalizeTheme(candidates[0].el.getAttribute('data-theme'))
}

function sampleX(ref) {
  const node = ref?.current
  if (!node) return null
  const rect = node.getBoundingClientRect()
  return rect.left + rect.width / 2
}

/**
 * Observes [data-theme] regions through a 1px band at the header bottom.
 * Samples logo and links separately so split heroes can drive mixed colors.
 */
export default function useHeaderTheme({
  headerRef,
  logoRef,
  linksRef,
  headerOffset = 72,
} = {}) {
  const [logoTheme, setLogoTheme] = useState(DEFAULT_THEME)
  const [linksTheme, setLinksTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    let frame = 0
    let observer

    const measureOffset = () =>
      headerRef?.current?.offsetHeight || headerOffset

    const syncThemes = () => {
      const bandY = measureOffset() - 1
      const regions = document.querySelectorAll('[data-theme]')
      const logoX = sampleX(logoRef)
      const linksX = sampleX(linksRef)

      const nextLogo =
        logoX == null
          ? DEFAULT_THEME
          : pickThemeAtX(regions, logoX, bandY)
      const nextLinks =
        linksX == null
          ? nextLogo
          : pickThemeAtX(regions, linksX, bandY)

      setLogoTheme((prev) => (prev === nextLogo ? prev : nextLogo))
      setLinksTheme((prev) => (prev === nextLinks ? prev : nextLinks))
    }

    const scheduleSync = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(syncThemes)
    }

    const observeAll = () => {
      observer?.disconnect()
      const offset = measureOffset()
      const bottomClip = Math.max(0, window.innerHeight - offset)

      observer = new IntersectionObserver(scheduleSync, {
        root: null,
        // Collapse the root to a thin horizontal band under the sticky header.
        rootMargin: `-${Math.max(0, offset - 1)}px 0px -${bottomClip}px 0px`,
        threshold: 0,
      })

      document.querySelectorAll('[data-theme]').forEach((el) => {
        observer.observe(el)
      })

      scheduleSync()
    }

    observeAll()

    const onResize = () => observeAll()
    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('scroll', scheduleSync, { passive: true })

    const mutation = new MutationObserver((records) => {
      const shouldRefresh = records.some((record) => {
        if (record.type === 'attributes' && record.attributeName === 'data-theme') {
          return true
        }
        return [...record.addedNodes, ...record.removedNodes].some(
          (node) =>
            node.nodeType === 1 &&
            (node.hasAttribute?.('data-theme') ||
              node.querySelector?.('[data-theme]')),
        )
      })
      if (shouldRefresh) observeAll()
    })

    mutation.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      mutation.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', scheduleSync)
    }
  }, [headerRef, logoRef, linksRef, headerOffset])

  return { logoTheme, linksTheme }
}
