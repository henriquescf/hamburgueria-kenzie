import { MdDelete } from "react-icons/md"

export const CartItemCard = ({ product, cartList, setCartList, setTotal}) => {

   const handleRemoveClick = (e) => {
      e.preventDefault()
      const filteredCart = cartList.filter(cartProduct => cartProduct.id != product.id)
      setCartList(filteredCart)
      setTotal((prev) => prev - product.price * product.quantity)
   }

   const onIncrement = (e) => {
      e.preventDefault()
      setTotal((prev) => prev + product.price)
      product.quantity++
      localStorage.setItem("@Cart", JSON.stringify(cartList))
   }

   const onDecrement = (e) => {
     if(product.quantity > 1){
        e.preventDefault()
          setTotal((prev) => prev - product.price)
          product.quantity--
          localStorage.setItem("@Cart", JSON.stringify(cartList))
     } else{
      product.quantity = 1
     }
   }

   const totalPrice = product.price * product.quantity;
   
   return (
      <li className="modal-product">
         <div className="modal-product__div">
            <div className="modal-product__img">
               <img src={product.img} alt={product.name} />
            </div>
            <div className="modal-product__info">
               <h3>{product.name}</h3>
               <p>{totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</p>
               <div className="qty-box">
                  <span className="dec" onClick={onDecrement}>-</span>
                  <span className="qty">{product.quantity}</span>
                  <span className="inc" onClick={onIncrement}>+</span>
               </div>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={handleRemoveClick}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
