import { useState } from "react"
import Navbar from "./components/navbar"
import News from "./components/news"


function App() {

  const[category,setCategory]=useState("top");
  

  return (
    <>
      <Navbar setCategory={setCategory}/>
   <News category={category}/>
    </>
  )
}

export default App
