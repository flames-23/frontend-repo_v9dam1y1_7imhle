import { motion } from 'framer-motion'

const items = [
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Editorial' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Beauty' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Runway' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop', tag: 'Campaign' },
  { src: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop', tag: 'Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Studio' }
]

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-gray-700">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl font-light mt-2">Portfolio</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-block px-5 py-3 rounded-full border border-gray-900/30 text-gray-900 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition">Book Now</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} className="group relative overflow-hidden rounded-2xl bg-gray-100"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }}>
              <img src={it.src} alt={it.tag} className="h-80 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-3 text-white text-xs tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">{it.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
