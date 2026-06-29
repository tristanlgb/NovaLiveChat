import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Chat from './components/Chat'
import LiveChat from './components/LiveChat'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-shell">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Chat />
        <LiveChat />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
