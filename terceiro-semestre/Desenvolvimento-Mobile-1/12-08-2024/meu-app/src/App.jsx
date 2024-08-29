import { useState } from 'react'
import Header from './components/Header'
import "./app.css"
import Card from './Components/Card'
import Banner from './Components/Banner'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Form />
    <Banner
    titulo = "Sejam bem-vindos ao meu site!" 
    subTitulo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ratione incidunt, soluta aliquid cum velit" 
    />
    <Card /> 

    </>
  )
}

export default App
