import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    let raf
    const speed = 0.5
    const step = () => {
      start -= speed
      if (start <= -el.scrollWidth / 2) start = 0
      el.style.transform = `translateX(${start}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-6">
      <div ref={ref} className="flex gap-10 whitespace-nowrap will-change-transform">
        {doubled.map((it, i) => (
          <span key={i} className="text-xs tracking-[0.3em] uppercase text-gray-500/80">{it}</span>
        ))}
      </div>
    </div>
  )
}
