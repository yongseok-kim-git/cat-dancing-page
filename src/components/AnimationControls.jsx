import { MOVES, SPEEDS } from '../hooks/useAnimation.js'

export default function AnimationControls({ isPlaying, onToggle, move, setMove, speed, setSpeed }) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <button type="button" className="btn btn-primary" onClick={onToggle} aria-pressed={isPlaying}>
        {isPlaying ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <fieldset className="group">
        <legend>춤 동작</legend>
        <div className="chips">
          {MOVES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`chip ${move === m.id ? 'is-active' : ''}`}
              aria-pressed={move === m.id}
              onClick={() => setMove(m.id)}
            >
              <kbd>{m.key}</kbd> {m.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="group">
        <legend>속도</legend>
        <div className="chips">
          {SPEEDS.map((s) => (
            <button
              key={s.value}
              type="button"
              className={`chip ${speed === s.value ? 'is-active' : ''}`}
              aria-pressed={speed === s.value}
              onClick={() => setSpeed(s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="hint">단축키: <kbd>Space</kbd> 시작/정지 · <kbd>1</kbd>–<kbd>4</kbd> 춤 바꾸기 · 고양이를 눌러도 돼요</p>
    </section>
  )
}
