'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function BookAnimation() {
  const [show, setShow] = useState(true)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    // Open book quickly
    const openTimer = setTimeout(() => {
      setOpened(true)
    }, 80)

    // Remove splash fast
    const exitTimer = setTimeout(() => {
      setShow(false)
    }, 2300)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at center, #102038 0%, #08111f 100%)',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute w-[550px] h-[550px] rounded-full blur-[120px]"
            style={{
              background:
                'radial-gradient(circle, rgba(20,168,75,0.18), rgba(26,93,171,0.10))',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Floating particles */}
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 5 + 2,
                height: Math.random() * 5 + 2,
              }}
              initial={{
                x: Math.random() * 900 - 450,
                y: 250,
                opacity: 0,
              }}
              animate={{
                y: -300,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Main Book */}
          <motion.div
            className="relative"
            style={{
              perspective: '2500px',
            }}
            initial={{ scale: 0.88 }}
            animate={{
              scale: opened ? 1 : 0.9,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="relative w-[320px] h-[220px] md:w-[520px] md:h-[340px]">

              {/* Center Light Burst */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  width: 180,
                  height: 180,
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.6), rgba(255,255,255,0))',
                }}
                animate={{
                  opacity: opened ? [0, 1, 0.6] : 0,
                  scale: opened ? [0.6, 1.4, 1] : 0,
                }}
                transition={{
                  duration: 0.9,
                }}
              />

              {/* Left Cover */}
              <motion.div
                className="absolute left-0 top-0 w-1/2 h-full rounded-l-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                style={{
                  background:
                    'linear-gradient(135deg, #1a5dab 0%, #14a84b 100%)',
                  transformOrigin: 'right center',
                  transformStyle: 'preserve-3d',
                  zIndex: 20,
                }}
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: opened ? -165 : 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Cover shine */}
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    x: ['-120%', '120%'],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  style={{
                    transform: 'skewX(-20deg)',
                    width: '40%',
                    filter: 'blur(10px)',
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-5xl md:text-6xl mb-4">
                    📖
                  </div>

                  <p className="uppercase tracking-[0.3em] text-sm md:text-base font-light">
                    Discover
                  </p>
                </div>
              </motion.div>

              {/* Right Cover */}
              <motion.div
                className="absolute right-0 top-0 w-1/2 h-full rounded-r-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                style={{
                  background:
                    'linear-gradient(135deg, #14a84b 0%, #1a5dab 100%)',
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  zIndex: 20,
                }}
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: opened ? 165 : 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png"
                    alt="BVW Logo"
                    width={150}
                    height={90}
                    className="brightness-0 invert object-contain"
                  />
                </div>
              </motion.div>

              {/* Inside Book */}
              <motion.div
                className="absolute inset-5 rounded-2xl bg-white shadow-[0_25px_80px_rgba(255,255,255,0.12)] overflow-hidden flex flex-col items-center justify-center"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: opened ? 1 : 0,
                  scale: opened ? 1 : 0.85,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
              >
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{
                    y: opened ? 0 : 15,
                    opacity: opened ? 1 : 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.4,
                  }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png"
                    alt="BVW"
                    width={180}
                    height={100}
                    className="object-contain"
                  />

                  <p className="mt-4 text-slate-600 tracking-[0.3em] uppercase text-xs md:text-sm">
                    Save Green Live Green
                  </p>
                </motion.div>
              </motion.div>

              {/* Spine */}
              <motion.div
                className="absolute left-1/2 top-0 z-30 h-full w-[10px] -translate-x-1/2 rounded-full shadow-2xl"
                style={{
                  background:
                    'linear-gradient(to bottom, #14a84b, #1a5dab)',
                }}
                animate={{
                  scaleY: opened ? 0.95 : 1,
                }}
              />
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            className="absolute bottom-14 text-white/70 tracking-[0.35em] uppercase text-xs md:text-sm"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.4,
            }}
          >
            Vardhman Composites India
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}