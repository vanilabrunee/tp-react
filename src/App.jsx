import { useState } from 'react'
import ListaUsuarios from './components/listaUsuarios.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaUsuarios/>
    </>
  )
}

export default App
