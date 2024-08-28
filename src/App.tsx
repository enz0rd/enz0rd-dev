import About from './components/About'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 h-fit'>
        <Experiences />
        <Skills />
      </div>
      <Footer />
    </>
  )
}

export default App
