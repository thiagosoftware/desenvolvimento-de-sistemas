import { useState } from 'react'
import Header from './components/Header'
import "./app.css"
import Card from './Components/Card'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Card /> 
    <Banner />
  
    </>
  )
}

export default App
