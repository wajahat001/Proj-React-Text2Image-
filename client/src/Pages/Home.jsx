import React from "react"
import Description from "../Components/Description"
import GenerateBtn from "../Components/GenerateBtn"
import Header from "../Components/Header"
import Steps from "../Components/Steps"


const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
