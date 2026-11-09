import { useCallback, useEffect, useState } from 'react'

export const MOVES = [
  { id: 'sway', label: '흔들흔들', key: '1' },
  { id: 'jump', label: '점프', key: '2' },
  { id: 'spin', label: '빙글빙글', key: '3' },
  { id: 'groove', label: '그루브', key: '4' },
]

export const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1, label: '보통' },
  { value: 2, label: '빠르게' },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function useAnimation() {
  // Respect the OS "reduce motion" setting: start paused in that case.
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [move, setMove] = useState(MOVES[0].id)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => setIsPlaying((p) => !p), [])

  // Keyboard shortcuts: Space/Enter on page = toggle, 1-4 = choose move
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
      if (e.key === ' ' && tag !== 'BUTTON') {
        e.preventDefault()
        toggle()
        return
      }
      const found = MOVES.find((m) => m.key === e.key)
      if (found) {
        setMove(found.id)
        setIsPlaying(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  return { isPlaying, toggle, move, setMove, speed, setSpeed }
}
