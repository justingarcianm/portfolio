import React from 'react'
import '../App.css'
import Nav from './Nav'
import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  return (
    <main className="center" >
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}
export default App;
