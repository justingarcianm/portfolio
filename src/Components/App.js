import React from 'react'
import '../App.css'
import Nav from './Nav'
import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const navFunction = (event) => {
    console.log(event.target)
  }
  return (
    <main id="home" className="center" onScroll={navFunction}>
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}
export default App;
