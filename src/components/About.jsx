import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-3 gap-10 items-center">
          <motion.img style={{ y }} src="https://images.unsplash.com/photo-1520975922361-7da6c59b67d2?q=80&w=1600&auto=format&fit=crop" alt="Bhoomi Arora" className="rounded-3xl w-full h-[520px] object-cover" />
          <div className="lg:col-span-2 space-y-6">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-700">About</p>
            <h2 className="text-3xl sm:text-4xl font-light">Poise. Precision. Presence.</h2>
            <p className="text-gray-700/90 leading-relaxed">
              Bhoomi Arora is a professional model with experience across beauty, editorial, and high-fashion campaigns. Her signature style blends effortless elegance with expressive movement, bringing a distinct presence to every frame.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{k:'Height',v:"5'9"},{k:'Bust',v:'32"'},{k:'Waist',v:'24"'},{k:'Hips',v:'35"'},{k:'Shoe',v:'39 EU'},{k:'Hair',v:'Black'}].map((it) => (
                <div key={it.k} className="p-4 rounded-2xl bg-white border border-gray-200">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{it.k}</p>
                  <p className="mt-1 text-gray-900">{it.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
