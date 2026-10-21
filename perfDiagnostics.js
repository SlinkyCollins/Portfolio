const VITAL_THRESHOLDS = {
  ttfb: { good: 800, needsImprovement: 1800, unit: 'ms' },
  lcp: { good: 2500, needsImprovement: 4000, unit: 'ms' },
  inp: { good: 200, needsImprovement: 500, unit: 'ms' },
}

const STATUS_STYLES = {
  good: 'color: #16a34a; font-weight: 700;',
  needsImprovement: 'color: #ea580c; font-weight: 700;',
  poor: 'color: #dc2626; font-weight: 700;',
}

let initialized = false

function getStatus(value, threshold) {
  if (value <= threshold.good) return 'good'
  if (value <= threshold.needsImprovement) return 'needsImprovement'
  return 'poor'
}

function logVital(name, value, threshold) {
  const status = getStatus(value, threshold)
  const label = status === 'good'
    ? 'GOOD'
    : status === 'needsImprovement'
      ? 'NEEDS IMPROVEMENT'
      : 'POOR'

  console.log(
    `%c${name}%c ${value.toFixed(0)} ${threshold.unit}  %c${label}`,
    'color: #2563eb; font-weight: 700;',
    'color: inherit; font-weight: 600;',
    STATUS_STYLES[status],
  )
}

function supportsEntryType(entryType) {
  return PerformanceObserver.supportedEntryTypes?.includes(entryType) ?? false
}

/**
 * Starts native PerformanceObservers for the page's Core Web Vitals.
 *
 * LCP and INP are reported when the document is hidden, which gives both
 * metrics their final value for the page visit.
 */
export function initPerfDiagnostics() {
  if (initialized || typeof PerformanceObserver === 'undefined') return

  initialized = true
  let lcpValue
  const interactions = new Map()
  let hasLoggedLcp = false
  let hasLoggedInp = false

  if (supportsEntryType('navigation')) {
    const navigationObserver = new PerformanceObserver((list) => {
      const navigation = list.getEntries()[0]
      if (navigation) {
        logVital('TTFB', navigation.responseStart - navigation.startTime, VITAL_THRESHOLDS.ttfb)
      }
      navigationObserver.disconnect()
    })

    navigationObserver.observe({ type: 'navigation', buffered: true })
  }

  if (supportsEntryType('largest-contentful-paint')) {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) lcpValue = lastEntry.startTime
    })

    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        lcpObserver.disconnect()
        if (lcpValue !== undefined && !hasLoggedLcp) {
          hasLoggedLcp = true
          logVital('LCP', lcpValue, VITAL_THRESHOLDS.lcp)
        }
      }
    }, { once: true })
  }

  if (supportsEntryType('event-timing')) {
    const inpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.interactionId === 0) continue

        const currentDuration = interactions.get(entry.interactionId) ?? 0
        interactions.set(entry.interactionId, Math.max(currentDuration, entry.duration))
      }
    })

    inpObserver.observe({ type: 'event-timing', buffered: true, durationThreshold: 16 })

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        inpObserver.disconnect()
        if (interactions.size > 0 && !hasLoggedInp) {
          hasLoggedInp = true
          logVital('INP', Math.max(...interactions.values()), VITAL_THRESHOLDS.inp)
        }
      }
    }, { once: true })
  }
}