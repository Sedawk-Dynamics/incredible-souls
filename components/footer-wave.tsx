'use client'

export default function FooterWave() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <style>{`
        @keyframes wave1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        @keyframes wave2 {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(75%); }
        }
        @keyframes wave3 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
        .wave-1 {
          animation: wave1 20s linear infinite;
        }
        .wave-2 {
          animation: wave2 25s linear infinite;
        }
        .wave-3 {
          animation: wave3 30s linear infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 - Back layer (most opacity, slowest) */}
        <defs>
          <filter id="waveBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Deep teal wave - background */}
        <g className="wave-1" filter="url(#waveBlur)">
          <path
            d="M0,40 Q180,20 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z"
            fill="#6F8F88"
            opacity="0.3"
          />
        </g>

        {/* Medium teal wave - middle layer */}
        <g className="wave-2" filter="url(#waveBlur)">
          <path
            d="M0,50 Q180,30 360,50 T720,50 T1080,50 T1440,50 L1440,120 L0,120 Z"
            fill="#7A9B93"
            opacity="0.5"
          />
        </g>

        {/* Light teal wave - front layer (most visible) */}
        <g className="wave-3" filter="url(#waveBlur)">
          <path
            d="M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z"
            fill="#8BA89F"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  )
}
