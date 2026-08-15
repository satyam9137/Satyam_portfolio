import Navbar from './components/navbar'
import Home from './components/Home'
import About from './About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Feedback from './components/Feedback'
// ...


function App() {
  return (
    <section id="center" className="min-h-screen w-full bg-[#020617]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
     <Feedback />
      <Footer />
    </section>
  )
}

export default App
