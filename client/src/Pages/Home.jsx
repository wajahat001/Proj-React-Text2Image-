import React from "react"
import Description from "../Components/Description"
import GenerateBtn from "../Components/GenerateBtn"
import Header from "../Components/Header"
import Steps from "../Components/Steps"
import Testimonials from "../Components/Testimonials"

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
