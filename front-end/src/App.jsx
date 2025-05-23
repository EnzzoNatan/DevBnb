import Header from "./componentes/Header"
import Home from "./componentes/pages/Home"
import Login from "./componentes/pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter> 
    
    <Header />
    
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
