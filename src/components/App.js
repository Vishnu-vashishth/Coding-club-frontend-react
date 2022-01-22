import React from 'react'
import Navbar from './Navbar'
import WelcomeText from './WelcomeText'
import Signupcontainer from './register/Signupcontainer'
import Quote from './Quote'
import OurTeam from './OurTeam'
import Othermembers from './Othermembers'
import Registeration from './Registeration'
import Footer from './Footer'
function App() {
  return (
    <>
      <div className="main-container">
      <Navbar/>
      <WelcomeText/>
      </div>
      <Quote/>
      <OurTeam/>
      <Othermembers/>
      <Registeration/>
      <Footer/>
    </>
  )
}

export default App
