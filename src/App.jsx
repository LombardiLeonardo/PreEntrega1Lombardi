import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Cartwidget from './components/NavBar/CartWidget'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div><h1>Hola Mundo</h1>
    <div>
      <NavBar />
      <ItemListConteiner greeting={"Buenas Noches"}/>
    </div>

    </div>
  )
}

export default App
