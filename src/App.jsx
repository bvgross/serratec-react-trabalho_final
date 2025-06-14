import { Rotas } from './Routes/Routes'
import './App.css'
import { CarrinhoProvider } from './context/carrinhoContext'


function App() {
  
  return (
    <CarrinhoProvider>
    <Rotas/>
    </CarrinhoProvider>
   
  )
}

export default App
