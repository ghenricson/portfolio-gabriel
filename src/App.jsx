import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import Main from './components/main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  return (
    <div>
      <Nav />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
