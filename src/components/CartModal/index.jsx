import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import "../../styles/modal.scss"
import { useEffect, useState } from "react"

export const CartModal = ({ cartList, setCartList, setModal}) => {
   const initialTotal = cartList.reduce((prevValue, product) => {
      return prevValue + product.price * product.quantity;
   }, 0);

   const [total, setTotal] = useState(initialTotal)


   const handleRemoveAllClick = (e) => {
      e.preventDefault()
      cartList.map(product => product.quantity = 1)
      setCartList([])
      setModal(false)
   }

   const handleCloseModal = (e) => {
      e.preventDefault()
      setModal(false)
   }


   useEffect(() => {
      function handleEscapeKey(event) {
        if (event.code === "Escape") {
          setModal(false)
        }
      }
   
      document.addEventListener("keydown", handleEscapeKey)
      return () => document.removeEventListener("keydown", handleEscapeKey)
    }, [])


   return (
      <div role="dialog" className="modalOverlay" onClick={() => setModal(false)}>
         <div className="modalBox" id="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
            <h2>Carrinho de compras</h2>
            <button aria-label="close" title="Fechar" onClick={handleCloseModal}>
               <MdClose size={21} />
            </button>
            </div>
               {cartList.length > 0 ?
               <>
               <div className="modal-product__list">
                  <ul>
                     {cartList.map((product, index) => (
                        <CartItemCard key={index} {...{product, cartList, setCartList, setTotal}} />
                     ))}
                  </ul>
               </div>
               <div className="modal-total">
               <div className="modal-total__total">
                  <span>Total</span>
                  <span>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
               </div>
                  <button onClick={handleRemoveAllClick}>Remover todos</button>
               </div>
               </>

               
               : <p className="empty-cart">O carrinho está vazio.</p>}
         </div>
      </div>
   );
};
