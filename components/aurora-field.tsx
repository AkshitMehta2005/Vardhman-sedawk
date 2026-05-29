'use client'

import { useId } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/* Shared frosted-glass surface used by every premium panel on both pages. */
export const GLASS =
  'relative overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/[0.05] backdrop-blur-xl shadow-[0_20px_40px_-24px_rgba(14,28,47,0.3)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]'

/* A glass card with a hairline gradient rim + cursor spotlight (drop layout/hover classes via className). */
export function GlassCard({
  children,
  className = '',
  spotlight = true,
}: {
  children: ReactNode
  className?: string
  spotlight?: boolean
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div
      onMouseMove={spotlight ? onMove : undefined}
      className={`group ${GLASS} ${className}`}
    >
      {/* hairline gradient rim (mask-composite); plain border above is the fallback */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          padding: 1,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.55), transparent 42%, rgba(61,220,132,0.34))',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {spotlight && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(61,220,132,0.16), transparent 70%)',
          }}
        />
      )}
      {children}
    </div>
  )
}

/* Original monogram "coin" — concentric gradient ring + disc with initials. No third-party logos. */
export function Coin({ abbr, size = 64 }: { abbr: string; size?: number }) {
  const raw = useId().replace(/[^a-zA-Z0-9]/g, '')
  const r = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <defs>
        <linearGradient id={`ring${raw}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3ddc84" />
          <stop offset="1" stopColor="#1a5dab" />
        </linearGradient>
        <radialGradient id={`disc${raw}`} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" stopColor="#1c7a45" />
          <stop offset="1" stopColor="#0e2a44" />
        </radialGradient>
      </defs>
      <circle cx={r} cy={r} r={r - 1} fill="none" stroke={`url(#ring${raw})`} strokeWidth="1.5" />
      <circle cx={r} cy={r} r={r - 5} fill={`url(#disc${raw})`} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        className="fill-white font-semibold"
        style={{ fontSize: size * 0.3, letterSpacing: '0.04em' }}
      >
        {abbr}
      </text>
    </svg>
  )
}

/* Drifting aurora atmosphere (one per page section). Heavy blur lives on static blobs; only transforms animate. */
export default function AuroraField() {
  const reduced = useReducedMotion()
  const raw = useId().replace(/[^a-zA-Z0-9]/g, '')
  const blobs = [
    { c: '#3ddc84', cls: '-left-[12%] -top-[18%]', d: 18 },
    { c: '#1a5dab', cls: '-right-[12%] top-[18%]', d: 22 },
    { c: '#c8a84b', cls: 'left-[28%] -bottom-[22%]', d: 26 },
  ]
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base mesh — light */}
      <div
        className="absolute inset-0 dark:opacity-0"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 10%, rgba(61,220,132,0.18), transparent 60%), radial-gradient(50% 45% at 85% 20%, rgba(26,93,171,0.16), transparent 60%), radial-gradient(55% 50% at 70% 90%, rgba(200,168,75,0.12), transparent 60%)',
        }}
      />
      {/* base mesh — dark */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 10%, rgba(61,220,132,0.26), transparent 60%), radial-gradient(50% 45% at 85% 20%, rgba(26,93,171,0.22), transparent 60%), radial-gradient(55% 50% at 70% 90%, rgba(200,168,75,0.16), transparent 60%)',
        }}
      />
      {/* blueprint dot-grid */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'radial-gradient(rgba(20,168,75,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 78%)',
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: 'radial-gradient(rgba(61,220,132,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 78%)',
        }}
      />
      {/* aurora blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute h-[46rem] w-[46rem] rounded-full opacity-50 blur-[120px] dark:opacity-40 dark:mix-blend-lighten ${b.cls}`}
          style={{ background: `radial-gradient(circle, ${b.c}, transparent 70%)`, willChange: 'transform' }}
          animate={reduced ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={reduced ? undefined : { duration: b.d, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        />
      ))}
      {/* grain (kills banding) */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]">
        <filter id={`grain${raw}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain${raw})`} />
      </svg>
    </div>
  )
}
