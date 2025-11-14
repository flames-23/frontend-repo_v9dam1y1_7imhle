import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[110vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-700">Model • Beauty • Editorial</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
              Bhoomi Arora
            </h1>
            <p className="text-gray-700/80 max-w-xl leading-relaxed">
              International fashion model specializing in beauty, editorial, and luxury campaigns. Available for runway, commercial, and brand collaborations.
            </p>
            <div className="flex gap-3">
              <a href="#portfolio" className="px-5 py-3 rounded-full bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition">View Work</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-gray-900/30 text-gray-900 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition">Book Now</a>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
