'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const LOGO_SRC =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png'


/* Procedural materials — all relit by ONE shared golden key (azimuth 40, elevation 30 matte / 52 gloss).
   Injected as raw SVG so kebab-case filter attributes parse correctly. Every filter is applied to a
   STATIC node and rasterized once; the sequence only animates transform/opacity. */
const FILTER_DEFS = `
<filter id="woodBody0" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.10" numOctaves="4" seed="7" stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feDiffuseLighting in="height" surfaceScale="2.4" diffuseConstant="1.05" lighting-color="#ffe8c0" result="lit"><feDistantLight azimuth="40" elevation="30"/></feDiffuseLighting><feBlend in="lit" in2="SourceGraphic" mode="multiply" result="shaded"/><feComponentTransfer in="shaded" result="graded"><feFuncR type="linear" slope="1.05" intercept="0.02"/><feFuncG type="linear" slope="1.0" intercept="0.015"/><feFuncB type="linear" slope="0.95" intercept="0.01"/></feComponentTransfer><feTurbulence type="fractalNoise" baseFrequency="0.9 0.6" numOctaves="2" seed="7" result="warp"/><feDisplacementMap in="graded" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="woodBody1" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.12" numOctaves="4" seed="31" stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feDiffuseLighting in="height" surfaceScale="2.4" diffuseConstant="1.05" lighting-color="#ffe8c0" result="lit"><feDistantLight azimuth="40" elevation="30"/></feDiffuseLighting><feBlend in="lit" in2="SourceGraphic" mode="multiply" result="shaded"/><feComponentTransfer in="shaded" result="graded"><feFuncR type="linear" slope="1.05" intercept="0.02"/><feFuncG type="linear" slope="1.0" intercept="0.015"/><feFuncB type="linear" slope="0.95" intercept="0.01"/></feComponentTransfer><feTurbulence type="fractalNoise" baseFrequency="0.9 0.6" numOctaves="2" seed="31" result="warp"/><feDisplacementMap in="graded" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="woodBody2" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.11" numOctaves="4" seed="58" stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feDiffuseLighting in="height" surfaceScale="2.4" diffuseConstant="1.05" lighting-color="#ffe8c0" result="lit"><feDistantLight azimuth="40" elevation="30"/></feDiffuseLighting><feBlend in="lit" in2="SourceGraphic" mode="multiply" result="shaded"/><feComponentTransfer in="shaded" result="graded"><feFuncR type="linear" slope="1.05" intercept="0.02"/><feFuncG type="linear" slope="1.0" intercept="0.015"/><feFuncB type="linear" slope="0.95" intercept="0.01"/></feComponentTransfer><feTurbulence type="fractalNoise" baseFrequency="0.9 0.6" numOctaves="2" seed="58" result="warp"/><feDisplacementMap in="graded" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="woodSheen" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.11" numOctaves="4" seed="7" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feSpecularLighting in="height" surfaceScale="2.4" specularConstant="0.9" specularExponent="22" lighting-color="#ffe9c2" result="spec"><feDistantLight azimuth="40" elevation="52"/></feSpecularLighting><feComposite in="spec" in2="SourceGraphic" operator="in" result="specClip"/><feComponentTransfer in="specClip"><feFuncA type="linear" slope="0.55" intercept="0"/></feComponentTransfer></filter>
<filter id="woodGrain" x="-2%" y="-2%" width="104%" height="104%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.014 0.5" numOctaves="3" seed="9" stitchTiles="stitch" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0.8 0.8 0 -0.45"/></filter>
<filter id="woodFrame" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.018 0.13" numOctaves="5" seed="21" stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feDiffuseLighting in="height" surfaceScale="3.0" diffuseConstant="1.0" lighting-color="#f4d8aa" result="lit"><feDistantLight azimuth="40" elevation="30"/></feDiffuseLighting><feBlend in="lit" in2="SourceGraphic" mode="multiply" result="shaded"/><feTurbulence type="fractalNoise" baseFrequency="1.1 0.8" numOctaves="2" seed="21" result="warp"/><feDisplacementMap in="shaded" in2="warp" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="woodFrameH" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.13 0.018" numOctaves="5" seed="21" stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0.33 0.33 0 0" result="height"/><feDiffuseLighting in="height" surfaceScale="3.0" diffuseConstant="1.0" lighting-color="#f4d8aa" result="lit"><feDistantLight azimuth="40" elevation="30"/></feDiffuseLighting><feBlend in="lit" in2="SourceGraphic" mode="multiply" result="shaded"/><feTurbulence type="fractalNoise" baseFrequency="0.8 1.1" numOctaves="2" seed="21" result="warp"/><feDisplacementMap in="shaded" in2="warp" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="woodKnot" x="-40%" y="-40%" width="180%" height="180%" color-interpolation-filters="sRGB"><feTurbulence type="turbulence" baseFrequency="0.04 0.05" numOctaves="3" seed="4" result="swirl"/><feDisplacementMap in="SourceGraphic" in2="swirl" scale="14" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="panelAO" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="b"/><feOffset in="b" dx="-2.5" dy="3" result="aoOff"/><feFlood flood-color="#1a0f06" flood-opacity="0.55" result="aoCol"/><feComposite in="aoCol" in2="aoOff" operator="in" result="ao"/><feOffset in="b" dx="2" dy="-2" result="hiOff"/><feFlood flood-color="#ffdca0" flood-opacity="0.45" result="hiCol"/><feComposite in="hiCol" in2="hiOff" operator="in" result="hi"/><feMerge><feMergeNode in="ao"/><feMergeNode in="SourceGraphic"/><feMergeNode in="hi"/></feMerge></filter>
<filter id="brassSpec" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="1.1" result="bar"/><feSpecularLighting in="bar" surfaceScale="3" specularConstant="0.9" specularExponent="22" lighting-color="#fff7da" result="spec"><feDistantLight azimuth="40" elevation="55"/></feSpecularLighting><feComposite in="spec" in2="SourceAlpha" operator="in" result="specClip"/><feOffset in="SourceAlpha" dx="-1.5" dy="1" result="sh"/><feFlood flood-color="#3a2708" flood-opacity="0.5" result="shCol"/><feComposite in="shCol" in2="sh" operator="in" result="shadeC"/><feMerge><feMergeNode in="shadeC"/><feMergeNode in="SourceGraphic"/><feMergeNode in="specClip"/></feMerge></filter>
<filter id="steelHinge" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.9 0.02" numOctaves="2" seed="3" result="brush"/><feColorMatrix in="brush" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.3 0.3 0 0" result="bh"/><feSpecularLighting in="bh" surfaceScale="1.4" specularConstant="0.65" specularExponent="9" lighting-color="#eaf2ff" result="sp"><feDistantLight azimuth="40" elevation="42"/></feSpecularLighting><feComposite in="sp" in2="SourceAlpha" operator="in" result="spc"/><feBlend in="spc" in2="SourceGraphic" mode="screen"/></filter>
<filter id="stoneRelight" x="-5%" y="-30%" width="110%" height="160%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.16" numOctaves="5" seed="11" stitchTiles="stitch" result="rock"/><feColorMatrix in="rock" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0.34 0.34 0 0" result="rh"/><feDiffuseLighting in="rh" surfaceScale="1.8" diffuseConstant="1.0" lighting-color="#ffedcf" result="rl"><feDistantLight azimuth="40" elevation="28"/></feDiffuseLighting><feBlend in="rl" in2="SourceGraphic" mode="multiply"/></filter>
<filter id="contactShadow" x="-30%" y="-60%" width="160%" height="260%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="core"/><feFlood flood-color="#04100a" flood-opacity="0.65" result="coreCol"/><feComposite in="coreCol" in2="core" operator="in" result="coreS"/><feGaussianBlur in="SourceAlpha" stdDeviation="9" result="soft"/><feOffset in="soft" dx="-6" dy="5" result="softO"/><feFlood flood-color="#06160d" flood-opacity="0.3" result="softCol"/><feComposite in="softCol" in2="softO" operator="in" result="softS"/><feMerge><feMergeNode in="softS"/><feMergeNode in="coreS"/></feMerge></filter>
<filter id="turfNoise" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.05" numOctaves="3" seed="7" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.18 0 0 0 0 0.12 0 0 0 0 0.06 0 0 0 0.5 0" result="soil"/><feComposite in="soil" in2="SourceGraphic" operator="over"/></filter>
<filter id="filmGrain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" seed="7" result="n"/><feColorMatrix in="n" type="saturate" values="0" result="mono"/><feComponentTransfer in="mono"><feFuncA type="linear" slope="0.55" intercept="0"/></feComponentTransfer></filter>
<filter id="bloom" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceGraphic" result="brt"><feFuncR type="linear" slope="1.6" intercept="-0.55"/><feFuncG type="linear" slope="1.6" intercept="-0.55"/><feFuncB type="linear" slope="1.6" intercept="-0.55"/></feComponentTransfer><feGaussianBlur in="brt" stdDeviation="12" result="glow"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="glow"/></feMerge></filter>
<linearGradient id="grassBack" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#0a3a18"/><stop offset="1" stop-color="#2c5e34"/></linearGradient>
<linearGradient id="grassMid" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#0a4a1e"/><stop offset="0.6" stop-color="#347a3a"/><stop offset="1" stop-color="#8fce6a"/></linearGradient>
<linearGradient id="grassFront" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#0c5a24"/><stop offset="0.55" stop-color="#3a8a3a"/><stop offset="1" stop-color="#bfe488"/></linearGradient>
<radialGradient id="knotGrad" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#2e1c0c"/><stop offset="0.35" stop-color="#5a3a1c"/><stop offset="0.55" stop-color="#3a2410"/><stop offset="0.72" stop-color="#6b4423"/><stop offset="1" stop-color="#5e3d20"/></radialGradient>
`

type Blade = {
  row: 'back' | 'mid' | 'front'
  left: number
  h: number
  w: number
  tip: number
  lean: number
  rot: number
  blur: number
  bright: number
  sway: number
  delay: number
  dur: number
  lit: boolean
  path: string
}
type Mote = { left: number; size: number; duration: number; delay: number; drift: number; blur: number }

function makeBlade(row: Blade['row'], i: number): Blade {
  const tall = row === 'front' ? 46 : row === 'mid' ? 40 : 30
  const h = tall + Math.random() * 18
  const w = (row === 'front' ? 7 : row === 'mid' ? 6 : 5) + Math.random() * 2
  const tip = 4 + (Math.random() * 5 - 2.5)
  const lean = Math.random() * 2.4 - 1.2
  const path = `M0 ${h} Q ${2 + lean} ${h * 0.42} ${tip} 0 Q ${6 + lean} ${h * 0.42} 8 ${h} Z`
  const left = (i / (row === 'back' ? 9 : 13)) * 100 + (Math.random() * 5 - 2.5)
  return {
    row,
    left,
    h,
    w,
    tip,
    lean,
    rot: Math.random() * 6 - 3,
    blur: row === 'back' ? 2 : row === 'mid' ? 0.6 : 0,
    bright: 0.82 + Math.random() * 0.3,
    sway: (row === 'back' ? 1.4 : 2.2) + Math.random() * 1.2,
    delay: Math.random() * 1.5,
    dur: 3.6 + Math.random() * 1.8,
    lit: left > 48 && left < 96,
    path,
  }
}

export default function DoorAnimation() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(false)
  const [entered, setEntered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [opened, setOpened] = useState(false)
  const [textOut, setTextOut] = useState(false)
  const [pushing, setPushing] = useState(false)
  const [washing, setWashing] = useState(false)
  const [blades, setBlades] = useState<Blade[]>([])
  const [motes, setMotes] = useState<Mote[]>([])
  // Auto-upgrade to real photos when dropped into public/images; else stay procedural.
  const [doorPhoto, setDoorPhoto] = useState(false)
  const [grassPhoto, setGrassPhoto] = useState(false)
  const timers = useRef<number[]>([])

  const dismiss = () => {
    setShow(false)
    // Unlock scroll deterministically; onExitComplete is only a backup.
    document.body.style.overflow = ''
  }

  useEffect(() => {
    setShow(true)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const b: Blade[] = []
    for (let i = 0; i < 9; i++) b.push(makeBlade('back', i))
    for (let i = 0; i < 13; i++) b.push(makeBlade('mid', i))
    for (let i = 0; i < 13; i++) b.push(makeBlade('front', i))
    setBlades(b)

    setMotes(
      Array.from({ length: 10 }, () => ({
        left: 55 + Math.random() * 35,
        size: Math.random() * 1.8 + 1.2,
        duration: Math.random() * 5 + 6,
        delay: Math.random() * 4,
        drift: Math.random() * 30 - 15,
        blur: Math.random() > 0.5 ? 1 : 0,
      }))
    )

    const t = (ms: number, fn: () => void) => {
      timers.current.push(window.setTimeout(fn, ms))
    }
    if (reduced) {
      t(1000, dismiss)
    } else {
      t(120, () => setEntered(true))
      t(640, () => setClicked(true))
      t(900, () => setOpened(true))
      t(1600, () => setTextOut(true))
      t(2200, () => setPushing(true))
      t(2550, () => setWashing(true))
      t(2700, dismiss)
    }

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Probe for optional real photos (no broken-image render: a 404 simply leaves the flag false)
  useEffect(() => {
    const probe = (src: string, set: (v: boolean) => void) => {
      const img = new window.Image()
      img.onload = () => set(true)
      img.src = src
    }
    probe('/images/door.jpg', setDoorPhoto)
    probe('/images/grass.png', setGrassPhoto)
  }, [])

  const restoreScroll = () => {
    document.body.style.overflow = ''
  }

  const sceneScale = !reduced && pushing ? 1.5 : reduced || entered ? 1 : 0.985
  const doorRotateY = reduced ? 72 : opened ? 104 : 0
  const interiorOpacity = reduced ? 0.9 : opened ? 0.9 : 0
  const textOpacity = reduced ? 1 : textOut ? 0 : entered ? 1 : 0
  const washOpacity = reduced ? 0 : washing ? 0.85 : pushing ? 0.22 : 0
  const lit = reduced || opened

  const matStyle = { transform: 'translateZ(0)', isolation: 'isolate' as const }

  return (
    <AnimatePresence onExitComplete={restoreScroll}>
      {show && (
        <motion.div
          onClick={dismiss}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ perspective: '2400px', willChange: 'opacity, filter' }}
          initial={{ opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: reduced ? 0.5 : 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Procedural filter library (rendered once) */}
          <svg aria-hidden width="0" height="0" style={{ position: 'absolute' }}>
            <defs dangerouslySetInnerHTML={{ __html: FILTER_DEFS }} />
          </svg>

          {/* LAYER 0 — matte vestibule (never pure black) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(125% 120% at 50% 40%, #14241c 0%, #11201a 30%, #0e1c2f 60%, #070d0a 100%)',
            }}
          />
          {/* LAYER 1 — double off-center vignette (navy-teal, not black) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(135% 110% at 50% 46%, transparent 50%, rgba(8,16,12,0.55) 100%), radial-gradient(90% 90% at 50% 44%, transparent 70%, rgba(0,0,0,0.18) 100%)',
            }}
          />
          {/* LAYER 2 — far grove (deep DoF) */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[14%] opacity-40"
            style={{ background: 'rgba(7,18,11,0.6)', filter: 'blur(18px)' }}
          />
          {/* LAYER 3 — single warm key light (bloomed) */}
          <div
            className="pointer-events-none absolute right-[6%] top-[2%] h-[620px] w-[620px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,224,170,0.42) 0%, rgba(200,168,75,0.13) 50%, transparent 75%)',
              filter: 'url(#bloom) blur(120px)',
            }}
          />
          {/* LAYER 4 — cool fill (lower-left) */}
          <div
            className="pointer-events-none absolute bottom-[6%] left-[4%] h-[460px] w-[460px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(26,93,171,0.08), transparent 70%)', filter: 'blur(120px)' }}
          />
          {/* Volumetric warm haze in the key path */}
          <motion.div
            className="pointer-events-none absolute right-[18%] top-[6%] h-[70%] w-[60%]"
            style={{ background: 'radial-gradient(60% 100% at 70% 20%, rgba(255,228,176,0.22), transparent 72%)', filter: 'blur(40px)', mixBlendMode: 'screen' }}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: lit ? (reduced ? 0.4 : 0.6) : 0 }}
            transition={reduced ? { duration: 0 } : { duration: 1.4, delay: 0.3 }}
          />

          {/* ===== SCENE ===== */}
          <motion.div
            className="relative"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            initial={reduced ? false : { scale: 0.985, rotateX: 1.5 }}
            animate={{ scale: sceneScale, rotateX: reduced || entered ? 0 : 1.5, y: pushing ? -18 : 0, x: pushing ? 12 : 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    scale: { duration: pushing ? 0.9 : 0.52, ease: pushing ? [0.7, 0, 0.84, 0] : [0.22, 1, 0.36, 1] },
                    rotateX: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
                    default: { duration: 0.9, ease: [0.7, 0, 0.84, 0] },
                  }
            }
          >
            <div className="relative h-[480px] w-[280px] md:h-[640px] md:w-[380px]">
              {/* Interior reveal — clipped to aperture */}
              <div className="absolute inset-x-[18px] top-[18px] bottom-0 overflow-hidden rounded-t-[6px]" style={{ background: '#0a130d' }}>
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 52% 60%, #fff7e6 0%, #ffe4b0 24%, rgba(150,160,70,0.18) 56%, transparent 82%)',
                    filter: 'url(#bloom)',
                  }}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: interiorOpacity }}
                  transition={reduced ? { duration: 0 } : { duration: 1.1, delay: 0.25 }}
                />
                {/* single god-ray shaft */}
                <motion.div
                  className="absolute left-[20%] top-[-20%] h-[150%] w-[55%]"
                  style={{
                    background: 'linear-gradient(100deg, transparent, rgba(255,244,214,0.16), transparent)',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 72%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 72%)',
                  }}
                  initial={reduced ? false : { opacity: 0, rotate: -4 }}
                  animate={{ opacity: reduced ? 0.4 : opened ? 0.45 : 0, rotate: reduced ? 6 : opened ? 8 : -4 }}
                  transition={reduced ? { duration: 0 } : { duration: 1.4, delay: 0.25 }}
                />
              </div>

              {/* warm light-wedge across the sill */}
              <motion.div
                className="absolute bottom-0 left-[18px] right-[18px] h-[60px] origin-bottom"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,228,176,0.5), transparent 70%)', filter: 'blur(6px)' }}
                initial={reduced ? false : { opacity: 0, scaleX: 0.2 }}
                animate={{ opacity: lit ? 0.8 : 0, scaleX: lit ? 1 : 0.2 }}
                transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.3 }}
              />

              {/* ===== Hinged leaf ===== */}
              <div className="absolute inset-x-[18px] top-[18px] bottom-0 z-10" style={{ perspective: '1600px' }}>
                <motion.div
                  className="relative h-full w-full"
                  style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d', willChange: 'transform' }}
                  initial={reduced ? false : { rotateY: 0 }}
                  animate={{ rotateY: doorRotateY }}
                  transition={reduced ? { duration: 0 } : { duration: 1.5, ease: [0.65, 0, 0.2, 1] }}
                >
                  {/* FRONT face */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-t-[5px]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      boxShadow: 'inset 0 1px 0 rgba(255,220,170,0.18), inset 0 0 0 1px rgba(30,18,8,0.55), 14px 22px 50px rgba(0,0,0,0.5)',
                    }}
                  >
                    {/* warm walnut boards (4, varied tone) */}
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0"
                        style={{
                          left: `${i * 25}%`,
                          width: '25%',
                          background:
                            'linear-gradient(177deg, #8a5a32 0%, #71492a 38%, #5e3d20 72%, #4d3119 100%)',
                          filter: ['brightness(1.07) hue-rotate(-5deg)', 'brightness(0.97) hue-rotate(2deg)', 'brightness(1.03) hue-rotate(-2deg)', 'brightness(0.92) hue-rotate(4deg)'][i],
                        }}
                      />
                    ))}
                    {/* fine vertical wood grain */}
                    <svg className="absolute inset-0" preserveAspectRatio="none" style={{ mixBlendMode: 'multiply', opacity: 0.55 }}>
                      <rect width="100%" height="100%" fill="#341f0d" style={{ filter: 'url(#woodGrain)' }} />
                    </svg>
                    {/* plank grooves */}
                    {[25, 50, 75].map((p) => (
                      <div key={p} className="absolute top-0 bottom-0 w-[2px]" style={{ left: `${p}%`, background: 'rgba(0,0,0,0.4)', boxShadow: '1px 0 1.5px rgba(255,224,170,0.12)' }} />
                    ))}
                    {/* warm key-side sheen + edge depth */}
                    <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(250deg, rgba(255,226,176,0.20) 0%, transparent 46%)', mixBlendMode: 'soft-light' }} />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3" style={{ background: 'linear-gradient(180deg, rgba(255,228,182,0.14), transparent)' }} />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.3), transparent)' }} />

                    {/* knot */}
                    <svg className="absolute" width="42" height="42" style={{ left: '20%', bottom: '13%', filter: 'url(#woodKnot)', mixBlendMode: 'multiply', opacity: 0.5 }}>
                      <rect width="42" height="42" fill="url(#knotGrad)" />
                    </svg>

                    {/* Real door photo (auto-used when public/images/door.jpg exists) */}
                    {doorPhoto && (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'url(/images/door.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backfaceVisibility: 'hidden',
                        }}
                      />
                    )}

                    {/* Upper recessed panel — logo */}
                    <div className="absolute left-1/2 top-[7%] h-[44%] w-[74%] -translate-x-1/2" style={{ filter: 'url(#panelAO)' }}>
                      <div className="flex h-full w-full items-center justify-center rounded-[4px]" style={{ background: 'rgba(34,20,8,0.28)' }}>
                        <Image
                          src={LOGO_SRC}
                          alt="Vardhman Composites India"
                          width={150}
                          height={88}
                          priority
                          className="h-auto w-[58%] object-contain brightness-0 invert"
                          style={{ opacity: 0.92, filter: 'drop-shadow(0 0 1px rgba(255,224,170,0.4))' }}
                        />
                      </div>
                    </div>

                    {/* Lower recessed panel — embossed tagline */}
                    <div className="absolute bottom-[6%] left-1/2 h-[30%] w-[74%] -translate-x-1/2" style={{ filter: 'url(#panelAO)' }}>
                      <div className="flex h-full w-full items-center justify-center rounded-[4px]" style={{ background: 'rgba(34,20,8,0.28)' }}>
                        <p
                          className="text-center text-[10px] uppercase leading-relaxed tracking-[0.3em] text-amber-100/70"
                          style={{ fontFamily: 'var(--font-manrope)', textShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(255,214,150,0.15)' }}
                        >
                          Save Green
                          <br />
                          Live Green
                        </p>
                      </div>
                    </div>

                    {/* Brass handle (procedural only; a real door photo has its own) */}
                    {!doorPhoto && (
                      <motion.div
                        className="absolute left-[9px] top-1/2 h-16 -translate-y-1/2 md:h-20"
                        style={{ width: 8 }}
                        initial={reduced ? false : { rotate: 0 }}
                        animate={{ rotate: !reduced && clicked && !opened ? -2 : 0 }}
                        transition={reduced ? { duration: 0 } : { duration: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <svg width="8" height="100%" preserveAspectRatio="none" style={{ filter: 'url(#brassSpec)', ...matStyle }}>
                          <rect width="8" height="100%" rx="4" fill="#b8902f" />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  {/* BACK face */}
                  <div
                    className="absolute inset-0 rounded-t-[5px]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(0)',
                      background: 'linear-gradient(177deg, #4a2f15, #38230f)',
                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.4)',
                    }}
                  />
                </motion.div>
              </div>

              {/* ===== Stationary frame (darker matte walnut) ===== */}
              <div
                className="absolute left-0 right-0 top-0 z-20 h-[24px] rounded-t-[10px]"
                style={{ background: 'linear-gradient(180deg, #5a3a1c, #3f2814)', boxShadow: 'inset 0 2px 1px rgba(255,210,150,0.18), 0 6px 14px rgba(0,0,0,0.45)' }}
              />
              <div
                className="absolute bottom-0 left-0 top-0 z-20 w-[18px]"
                style={{ background: 'linear-gradient(90deg, #543517, #3a2412)', boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.4), inset 1px 0 0 rgba(255,210,150,0.12)' }}
              />
              <div
                className="absolute bottom-0 right-0 top-0 z-20 w-[18px]"
                style={{ background: 'linear-gradient(270deg, #543517, #3a2412)', boxShadow: 'inset 2px 0 3px rgba(0,0,0,0.4), inset -1px 0 0 rgba(255,210,150,0.12)' }}
              />
              {/* right-jamb rebate — lit reveal opening up */}
              <motion.div
                className="absolute left-[18px] top-[18px] bottom-0 z-[15] w-[6px] origin-left"
                style={{ background: 'linear-gradient(270deg, rgba(0,0,0,0.5), rgba(255,224,170,0.45))' }}
                initial={reduced ? false : { opacity: 0, scaleX: 0.2 }}
                animate={{ opacity: lit ? 1 : 0, scaleX: lit ? 1 : 0.2 }}
                transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.45 }}
              />
              {/* hinges */}
              <svg className="absolute right-[12px] top-[24%] z-30" width="8" height="36" style={{ filter: 'url(#steelHinge)', ...matStyle }}>
                <rect width="8" height="36" rx="1.5" fill="#8a8a8a" />
              </svg>
              <svg className="absolute right-[12px] bottom-[24%] z-30" width="8" height="36" style={{ filter: 'url(#steelHinge)', ...matStyle }}>
                <rect width="8" height="36" rx="1.5" fill="#8a8a8a" />
              </svg>

              {/* stone sill + contact shadow */}
              <svg className="absolute -bottom-[9px] left-[-6px] right-[-6px] z-20 h-[10px] rounded-sm" preserveAspectRatio="none" style={{ filter: 'url(#stoneRelight)', ...matStyle }}>
                <rect width="100%" height="100%" fill="#5a554e" />
              </svg>
              <div className="absolute -bottom-[8px] left-[-6px] right-[-6px] z-20 h-px" style={{ background: 'rgba(255,236,200,0.4)' }} />
              <svg className="pointer-events-none absolute -bottom-[20px] left-[-12%] right-[-12%] z-[5] h-9" preserveAspectRatio="none" style={matStyle}>
                <rect x="8%" y="20%" width="84%" height="40%" rx="14" fill="#04100a" style={{ filter: 'url(#contactShadow)' }} />
              </svg>

              {/* ===== Grass ===== */}
              <div className="pointer-events-none absolute -bottom-[7px] left-[-16%] right-[-16%] z-30 h-20" style={{ contain: 'paint' }}>
                {grassPhoto && (
                  <img
                    src="/images/grass.png"
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] w-full select-none"
                    style={{ height: '100%', objectFit: 'cover', objectPosition: 'bottom' }}
                  />
                )}
                {!grassPhoto && (
                  <>
                {/* soil */}
                <div className="absolute bottom-0 left-0 right-0 h-3" style={{ background: 'radial-gradient(120% 200% at 50% 0%, #2a1c10, #170e06)', filter: 'url(#turfNoise)', boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.55)' }} />
                {blades.map((bl, i) => (
                  <motion.svg
                    key={i}
                    className="absolute bottom-1"
                    width={bl.w}
                    height={bl.h}
                    viewBox={`0 0 8 ${bl.h}`}
                    preserveAspectRatio="none"
                    style={{
                      left: `${bl.left}%`,
                      transformOrigin: 'bottom center',
                      filter: `blur(${bl.blur}px) brightness(${bl.lit && lit ? bl.bright + 0.25 : bl.bright})`,
                      opacity: bl.row === 'back' ? 0.6 : 1,
                      zIndex: bl.row === 'front' ? 3 : bl.row === 'mid' ? 2 : 1,
                    }}
                    initial={reduced ? false : { rotate: bl.rot }}
                    animate={
                      reduced
                        ? { rotate: bl.rot }
                        : { rotate: [bl.rot - bl.sway * 0.6, bl.rot + bl.sway, bl.rot - bl.sway * 0.4, bl.rot + bl.sway * 0.7, bl.rot - bl.sway * 0.6] }
                    }
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { duration: bl.dur, repeat: Infinity, ease: 'easeInOut', delay: (bl.left / 100) * 0.9 + bl.delay, times: [0, 0.28, 0.52, 0.78, 1] }
                    }
                  >
                    <path d={bl.path} fill={`url(#grass${bl.row === 'back' ? 'Back' : bl.row === 'mid' ? 'Mid' : 'Front'})`} />
                  </motion.svg>
                ))}
                  </>
                )}
                {/* threshold light spill on the lawn */}
                <motion.div
                  className="absolute bottom-0 left-1/4 right-1/4 h-16"
                  style={{ background: 'radial-gradient(80% 120% at 50% 0%, rgba(255,228,176,0.45), transparent 70%)', mixBlendMode: 'screen' }}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: lit ? 0.7 : 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 1.2, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Dust motes — lit cone only, after open */}
          {!reduced &&
            motes.map((m, i) => (
              <motion.div
                key={i}
                className="pointer-events-none absolute rounded-full"
                style={{ left: `${m.left}%`, top: '38%', width: m.size, height: m.size, background: '#fff3d2', filter: m.blur ? 'blur(1px)' : 'none' }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: -300, x: m.drift, opacity: opened ? [0, 0.5, 0.7, 0] : 0 }}
                transition={{ duration: m.duration, repeat: Infinity, delay: m.delay, ease: 'easeInOut' }}
              />
            ))}

          {/* ===== Global optics plate (grade + grain) ===== */}
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,214,150,0.18), rgba(200,168,75,0.10) 45%, rgba(14,28,47,0.22))', mixBlendMode: 'soft-light' }} />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(120% 120% at 62% 30%, transparent 40%, rgba(14,28,47,0.35))', mixBlendMode: 'multiply' }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" style={{ mixBlendMode: 'overlay', opacity: 0.08 }}>
            <rect width="100%" height="100%" fill="#808080" style={{ filter: 'url(#filmGrain)' }} />
          </svg>

          {/* ===== Typography ===== */}
          <motion.div
            className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: textOpacity, y: textOpacity ? 0 : 8 }}
            transition={reduced ? { duration: 0 } : { duration: textOut ? 0.65 : 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[14px] tracking-[0.18em] md:text-[18px]" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 500, color: 'rgba(245,242,236,0.88)' }}>
              Vardhman Composites India
            </p>
            <div className="relative mt-4 h-px w-40 overflow-hidden" style={{ background: 'rgba(200,168,75,0.18)' }}>
              <motion.div
                className="h-full w-full origin-left"
                style={{ background: 'linear-gradient(90deg, transparent, #c8a84b, #fff4cf, #c8a84b, transparent)' }}
                initial={reduced ? false : { scaleX: 0 }}
                animate={{ scaleX: reduced || entered ? 1 : 0 }}
                transition={reduced ? { duration: 0 } : { duration: 2.4, ease: 'linear' }}
              />
            </div>
            <p className="mt-3 text-[9px] uppercase tracking-[0.34em] md:text-[10px]" style={{ fontFamily: 'var(--font-manrope)', color: '#c8a84b' }}>
              Save Green · Live Green
            </p>
          </motion.div>

          {/* ===== Warm exposure bloom / dissolve ===== */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(circle at 52% 46%, #fff7e6 0%, #ffe4b0 60%, transparent 100%)', filter: 'url(#bloom)', willChange: 'opacity' }}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: washOpacity }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, ease: [0.5, 0, 0.84, 0] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
