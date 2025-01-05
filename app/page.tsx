import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

