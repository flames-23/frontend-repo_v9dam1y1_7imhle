import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-700">Booking</p>
          <h2 className="text-3xl sm:text-4xl font-light">Get in touch</h2>
          <p className="text-gray-700/80 mt-3">For bookings, campaigns, and collaborations.</p>
        </div>
        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid sm:grid-cols-2 gap-4 bg-white border border-gray-200 rounded-3xl p-6">
          <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input placeholder="Company / Brand" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <input placeholder="Project Type (Editorial, Beauty, Runway...)" className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <textarea rows={5} placeholder="Tell us about your project" className="sm:col-span-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-gray-500">Response within 24 hours.</p>
            <button className="px-5 py-3 rounded-full bg-rose-500 text-white text-sm tracking-widest hover:bg-rose-600 transition">Send</button>
          </div>
          {sent && <p className="sm:col-span-2 text-center text-rose-600">Thank you. We will be in touch shortly.</p>}
        </motion.form>
      </div>
    </section>
  )
}
