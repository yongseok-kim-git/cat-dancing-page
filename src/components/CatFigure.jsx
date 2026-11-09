// Inline SVG version of assets/images/cat.svg, split into parts so the
// ears, paws and tail can be animated independently with CSS.
export default function CatFigure() {
  return (
    <svg className="cat-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
      {/* tail */}
      <g className="cat-tail">
        <path d="M140 190 C185 185 190 130 165 110" fill="none" stroke="#f0a04b" strokeWidth="14" strokeLinecap="round" />
      </g>

      {/* body */}
      <ellipse cx="100" cy="175" rx="52" ry="50" fill="#f6b25e" />
      <ellipse cx="100" cy="185" rx="30" ry="32" fill="#fde7c7" />
      <path d="M62 150 q8 6 0 12 M138 150 q-8 6 0 12" stroke="#e0913c" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* feet */}
      <ellipse className="cat-foot cat-foot--left" cx="76" cy="222" rx="16" ry="10" fill="#fde7c7" />
      <ellipse className="cat-foot cat-foot--right" cx="124" cy="222" rx="16" ry="10" fill="#fde7c7" />

      {/* arms (raised paws) */}
      <g className="cat-arm cat-arm--left">
        <path d="M58 160 Q30 140 34 112" stroke="#f6b25e" strokeWidth="16" fill="none" strokeLinecap="round" />
        <circle cx="34" cy="110" r="10" fill="#fde7c7" />
      </g>
      <g className="cat-arm cat-arm--right">
        <path d="M142 160 Q170 140 166 112" stroke="#f6b25e" strokeWidth="16" fill="none" strokeLinecap="round" />
        <circle cx="166" cy="110" r="10" fill="#fde7c7" />
      </g>

      {/* head */}
      <g className="cat-head">
        <g className="cat-ear cat-ear--left">
          <polygon points="52,70 62,20 92,52" fill="#f6b25e" />
          <polygon points="60,60 65,32 82,50" fill="#f7a3a0" />
        </g>
        <g className="cat-ear cat-ear--right">
          <polygon points="148,70 138,20 108,52" fill="#f6b25e" />
          <polygon points="140,60 135,32 118,50" fill="#f7a3a0" />
        </g>
        <circle cx="100" cy="90" r="52" fill="#f6b25e" />
        {/* stripes */}
        <path d="M100 40 v14 M88 42 l3 12 M112 42 l-3 12" stroke="#e0913c" strokeWidth="4" strokeLinecap="round" />
        {/* eyes */}
        <g className="cat-eyes">
          <ellipse cx="80" cy="88" rx="7" ry="10" fill="#2b2118" />
          <ellipse cx="120" cy="88" rx="7" ry="10" fill="#2b2118" />
          <circle cx="82" cy="84" r="2.5" fill="#fff" />
          <circle cx="122" cy="84" r="2.5" fill="#fff" />
        </g>
        {/* cheeks */}
        <ellipse cx="68" cy="106" rx="8" ry="5" fill="#f7a3a0" opacity="0.7" />
        <ellipse cx="132" cy="106" rx="8" ry="5" fill="#f7a3a0" opacity="0.7" />
        {/* nose + mouth */}
        <polygon points="94,104 106,104 100,111" fill="#e7746e" />
        <path d="M100 111 q-6 8 -12 3 M100 111 q6 8 12 3" stroke="#2b2118" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* whiskers */}
        <path d="M60 100 h-22 M60 108 l-20 5 M140 100 h22 M140 108 l20 5" stroke="#2b2118" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
