'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const LOGO_SRC =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png'

const GREEN = '#14a84b'
const BLUE = '#1a5dab'
const GOLD = '#c8a84b'

type Mote = { size: number; left: number; duration: number; delay: number }

export default function DoorAnimation() {
  const [show, setShow] = useState(true)
  const [opened, setOpened] = useState(false)
  // Generated on the client only so the random positions don't cause a hydration mismatch.
  const [motes, setMotes] = useState<Mote[]>([])

  useEffect(() => {
    setMotes(
      Array.from({ length: 22 }, () => ({
        size: Math.random() * 4 + 1.5,
        left: Math.random() * 100,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 4,
      }))
    )

    // Hold a beat so the frame settles and the logo glows, then swing the door open.
    const openTimer = setTimeout(() => setOpened(true), 750)
    // Remove the splash once the door has swung open and the light has flooded in.
    const exitTimer = setTimeout(() => setShow(false), 3050)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 42%, #14263d 0%, #0a1525 45%, #050b14 100%)',
            perspective: '2200px',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.55) 100%)',
            }}
          />

          {/* Ambient brand glows behind the doorway */}
          <motion.div
            className="pointer-events-none absolute h-[640px] w-[640px] rounded-full blur-[150px]"
            style={{
              background: `radial-gradient(circle, ${GREEN}33, ${BLUE}1f 60%, transparent 75%)`,
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Drifting dust motes catching the light */}
          {motes.map((m, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute rounded-full"
              style={{
                width: m.size,
                height: m.size,
                background: 'rgba(255,255,255,0.7)',
                boxShadow: '0 0 6px rgba(255,255,255,0.6)',
                left: `${m.left}%`,
              }}
              initial={{ y: 320, opacity: 0 }}
              animate={{ y: -360, opacity: [0, 0.9, 0] }}
              transition={{
                duration: m.duration,
                repeat: Infinity,
                delay: m.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Camera push-through wrapper */}
          <motion.div
            className="relative"
            initial={{ scale: 0.92, rotateX: 6 }}
            animate={{
              scale: opened ? 1.22 : 0.97,
              rotateX: opened ? 0 : 4,
            }}
            transition={{
              scale: { duration: opened ? 2.2 : 0.9, ease: [0.5, 0, 0.2, 1] },
              rotateX: { duration: 0.9, ease: 'easeOut' },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ===================== STATIONARY DOOR FRAME ===================== */}
            <div
              className="relative h-[440px] w-[300px] md:h-[640px] md:w-[440px]"
              style={{
                borderRadius: '14px 14px 6px 6px',
                padding: '20px',
                background:
                  'linear-gradient(150deg, #6b5a2e 0%, #d8bd6f 18%, #9c8442 38%, #f0d898 52%, #8a7338 70%, #c8a84b 100%)',
                boxShadow:
                  '0 50px 120px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.5), inset 0 2px 3px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.4)',
              }}
            >
              {/* Inner frame trim (brand accent hairline) */}
              <div
                className="pointer-events-none absolute inset-[14px] rounded-[6px]"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${GREEN}66, inset 0 0 0 3px rgba(0,0,0,0.35)`,
                }}
              />

              {/* The opening — interior light lives here, clipped to the frame */}
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: '4px',
                  background: '#060c16',
                  boxShadow: 'inset 0 0 60px rgba(0,0,0,0.9)',
                }}
              >
                {/* Bright interior beyond the door */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 46%, #ffffff 0%, ${GREEN}22 30%, ${BLUE}1c 55%, transparent 78%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: opened ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 0.25 }}
                />

                {/* Volumetric god-rays fanning from the opening */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.10) 3deg, rgba(255,255,255,0) 9deg)',
                    maskImage:
                      'radial-gradient(circle at center, black 0%, transparent 70%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, black 0%, transparent 70%)',
                  }}
                  initial={{ opacity: 0, rotate: -8 }}
                  animate={{
                    opacity: opened ? [0, 0.9, 0.55] : 0,
                    rotate: opened ? 10 : -8,
                  }}
                  transition={{ duration: 2.4, delay: 0.3, ease: 'easeOut' }}
                />
              </div>

              {/* ===================== HINGED DOOR LEAF ===================== */}
              <div
                className="absolute inset-[20px]"
                style={{ perspective: '1600px' }}
              >
                <motion.div
                  className="relative h-full w-full"
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: opened ? -108 : 0 }}
                  transition={{
                    duration: 1.7,
                    delay: 0.05,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  {/* ---- Door FRONT face (carries the logo) ---- */}
                  <div
                    className="absolute inset-0 flex flex-col overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: '4px',
                      padding: '14px',
                      background:
                        'linear-gradient(150deg, #16273d 0%, #0d1c2e 55%, #0a1424 100%)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 0 0 1px rgba(200,168,75,0.22), 18px 28px 60px rgba(0,0,0,0.55)',
                    }}
                  >
                    {/* Top brand accent line */}
                    <div
                      className="mb-3 h-[3px] w-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${GREEN}, ${BLUE})`,
                        boxShadow: `0 0 12px ${GREEN}88`,
                      }}
                    />

                    {/* Upper raised panel — the logo */}
                    <div
                      className="relative flex flex-1 items-center justify-center rounded-[5px]"
                      style={{
                        background:
                          'linear-gradient(160deg, #1c3450 0%, #0f2034 100%)',
                        boxShadow:
                          'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(200,168,75,0.30), inset 0 24px 50px rgba(0,0,0,0.45)',
                      }}
                    >
                      <motion.div
                        animate={{
                          filter: [
                            'drop-shadow(0 0 14px rgba(255,255,255,0.25))',
                            'drop-shadow(0 0 28px rgba(20,168,75,0.55))',
                            'drop-shadow(0 0 14px rgba(255,255,255,0.25))',
                          ],
                        }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Image
                          src={LOGO_SRC}
                          alt="Vardhman Composites India"
                          width={170}
                          height={100}
                          priority
                          className="h-auto w-[120px] object-contain brightness-0 invert md:w-[170px]"
                        />
                      </motion.div>
                    </div>

                    {/* Lower raised panel — tagline + ornament */}
                    <div
                      className="relative mt-3 flex h-[78px] flex-col items-center justify-center rounded-[5px] md:h-[110px]"
                      style={{
                        background:
                          'linear-gradient(160deg, #1c3450 0%, #0f2034 100%)',
                        boxShadow:
                          'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(200,168,75,0.30), inset 0 24px 50px rgba(0,0,0,0.45)',
                      }}
                    >
                      <span
                        className="rotate-45"
                        style={{
                          width: 10,
                          height: 10,
                          background: GOLD,
                          boxShadow: `0 0 10px ${GOLD}aa`,
                          display: 'block',
                        }}
                      />
                      <p
                        className="mt-3 text-center text-[9px] uppercase tracking-[0.32em] md:text-[11px]"
                        style={{ color: GOLD }}
                      >
                        Save Green · Live Green
                      </p>
                    </div>

                    {/* Sheen sweep across the door */}
                    <motion.div
                      className="pointer-events-none absolute inset-y-0"
                      style={{
                        width: '45%',
                        background:
                          'linear-gradient(105deg, transparent, rgba(255,255,255,0.18), transparent)',
                        filter: 'blur(6px)',
                      }}
                      initial={{ x: '-160%' }}
                      animate={{ x: '320%' }}
                      transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
                    />

                    {/* Hinges on the left edge */}
                    <div className="absolute left-[3px] top-[22%] h-9 w-[6px] rounded-full"
                      style={{ background: `linear-gradient(90deg, #8a7338, ${GOLD}, #6b5a2e)` }} />
                    <div className="absolute left-[3px] top-[68%] h-9 w-[6px] rounded-full"
                      style={{ background: `linear-gradient(90deg, #8a7338, ${GOLD}, #6b5a2e)` }} />

                    {/* Handle near the free edge */}
                    <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
                      <div
                        className="h-16 w-[7px] rounded-full md:h-20"
                        style={{
                          background: `linear-gradient(90deg, #6b5a2e, ${GOLD} 45%, #fff3cf 55%, #8a7338)`,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        }}
                      />
                    </div>
                  </div>

                  {/* ---- Door BACK face (seen briefly as it swings) ---- */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: '4px',
                      background:
                        'linear-gradient(150deg, #0a1424 0%, #0d1c2e 60%, #14273d 100%)',
                      boxShadow: 'inset 0 0 0 1px rgba(200,168,75,0.15)',
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Light bloom that floods out as the door opens */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 30%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: opened ? [0, 0, 0.85] : 0,
              scale: opened ? [0.5, 0.8, 1.5] : 0.5,
            }}
            transition={{ duration: 2.2, delay: 0.3, ease: 'easeIn' }}
          />

          {/* Brand wordmark + loading shimmer */}
          <motion.div
            className="absolute bottom-12 flex flex-col items-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: opened ? 0 : 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.45em] md:text-sm"
              style={{ color: '#e6e0cf' }}
            >
              Vardhman Composites India
            </p>
            <div className="mt-4 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                }}
                animate={{ x: ['-120%', '380%'] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
