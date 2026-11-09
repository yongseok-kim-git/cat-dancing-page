import CatFigure from './CatFigure.jsx'
import { MOVES } from '../hooks/useAnimation.js'

export default function DancingCat({ isPlaying, move, speed, onToggle }) {
  const label = MOVES.find((m) => m.id === move)?.label
  return (
    <div className="stage">
      <button
        type="button"
        className={`cat move-${move} ${isPlaying ? 'is-playing' : 'is-paused'}`}
        style={{ '--speed': speed }}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `고양이가 ${label} 춤을 추는 중. 눌러서 멈추기` : '고양이 멈춤. 눌러서 춤추기'}
      >
        <span className="cat-body">
          <CatFigure />
        </span>
      </button>
      <div className={`cat-shadow move-${move} ${isPlaying ? 'is-playing' : 'is-paused'}`} style={{ '--speed': speed }} />
      <div className="notes" aria-hidden="true">
        {isPlaying && ['♪', '♫', '♬'].map((n, i) => (
          <span key={i} className="note" style={{ '--i': i, '--speed': speed }}>{n}</span>
        ))}
      </div>
    </div>
  )
}
