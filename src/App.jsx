import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import PortfolioGrid from './components/PortfolioGrid'
import Clients from './components/Clients'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section aria-label="scrolling marquee" className="border-y border-gray-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4">
          <Marquee items={[
            'Beauty', 'Editorial', 'Runway', 'Campaigns', 'Commercial', 'Luxury', 'Fashion Week', 'Studio', 'On-Location'
          ]}
          />
        </div>
      </section>

      <About />
      <PortfolioGrid />
      <Clients />
      <Contact />

      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bhoomi Arora. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900">Top</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="hover:text-gray-900">Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
