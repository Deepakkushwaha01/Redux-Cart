import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Cart from "./Components/Cart"

function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}  />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
