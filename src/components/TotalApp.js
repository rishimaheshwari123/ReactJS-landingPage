import React from 'react'
import Home from "../components/Home"
import About from './About'
import Info from './Info'
import Timer from './Timer'
import Action from './Action'
import Form from "../components/Form"

function TotalApp() {
  return (
    <div>
        <Home />
        <About/>
        <Info/>
        <Timer/>
        <Action/>
        <Form />
    </div>
  )
}

export default TotalApp