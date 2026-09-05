import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Schedule from './components/Schedule.jsx'
import Clubs from './components/Clubs.jsx'
import Partners from './components/Partners.jsx'
import Register from './components/Register.jsx'
import Team from './components/Team.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <About />
        <Events />
        <Schedule />
        <Clubs />
        <Partners />
        <Register />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
