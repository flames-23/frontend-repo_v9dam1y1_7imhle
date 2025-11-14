import { motion } from 'framer-motion'

const brands = ['Dior', 'Chanel', 'Gucci', 'Armani', 'Prada', 'YSL', 'Fenty Beauty', 'Zara']

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-rose-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-gray-700">Trusted By</p>
            <h2 className="text-3xl sm:text-4xl font-light mt-2">Clients</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {brands.map((b, i) => (
            <motion.div key={b} className="h-24 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-lg tracking-wider"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
