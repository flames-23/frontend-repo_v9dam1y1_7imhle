import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase = 'text-sm tracking-wide uppercase hover:opacity-100 transition-opacity opacity-80'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-widest text-gray-900">Bhoomi Arora</a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className={linkBase}>About</a>
            <a href="#portfolio" className={linkBase}>Portfolio</a>
            <a href="#clients" className={linkBase}>Clients</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-rose-500 text-white text-xs tracking-widest shadow hover:shadow-md">Book</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-4">
            <a onClick={() => setOpen(false)} href="#about" className={linkBase}>About</a>
            <a onClick={() => setOpen(false)} href="#portfolio" className={linkBase}>Portfolio</a>
            <a onClick={() => setOpen(false)} href="#clients" className={linkBase}>Clients</a>
            <a onClick={() => setOpen(false)} href="#contact" className="px-4 py-2 rounded-full bg-rose-500 text-white text-xs tracking-widest shadow w-max">Book</a>
          </div>
        </div>
      )}
    </header>
  )
}
