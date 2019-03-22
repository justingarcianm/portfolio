import React from 'react'
import '../App.css'
import Nav from './Nav'
import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'

function App() {


  return (
    <main id="home" className="center">
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}
export default App;
