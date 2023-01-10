import React from 'react'
import Header from "./components/header/Header"
import Navigator from "./components/navigator/Navigator"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header/>
      <Navigator/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App