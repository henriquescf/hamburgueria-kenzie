import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react"
import { CartModal } from "./components/CartModal"
import { HomePage } from "./pages/HomePage"
import "./styles/reset.scss"
import "./styles/global.scss"

function App() {
  const localCartList = localStorage.getItem("@Cart")
  const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : [])
  const [modal, setModal] = useState(false)

  return (
    <>
      <ToastContainer position="bottom-right" transition={Slide} autoClose={2000}/>
      <HomePage {...{cartList, setCartList, setModal}}/>
      {modal ? <CartModal {...{cartList, setCartList, setModal}}/> : null}
    </>
  )
}

import "./styles/responsive.scss"

export default App