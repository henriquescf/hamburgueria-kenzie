import { toast } from "react-toastify";
import "../../../styles/ProductCard.scss"
import { useEffect, useState } from "react"

export const ProductCard = ({ product, cartList, setCartList}) => {

    const [disabled, setDisabled] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        if(disabled == false){
            setCartList([...cartList, product])
            toast.success(`${product.name} adicionado com sucesso ao carrinho.`)
        } else{
            const filteredCart = cartList.filter(cartProduct => cartProduct.id != product.id)
            setCartList(filteredCart)
            toast.success(`${product.name} removido com sucesso do carrinho.`)
        }
    }

    useEffect(() => {
        localStorage.setItem("@Cart", JSON.stringify(cartList))
        const findProduct = cartList.find(cartListProduct => cartListProduct.id == product.id)
        findProduct == undefined ? setDisabled(false) : setDisabled(true)
    }, [cartList])

    return(
        <>
        <li className="product-card">
            <div className="product-img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</p>
                <button className={disabled ? "disabledBtn" : "enabledBtn"} onClick={handleClick}>{disabled == true ? "Remover" : "Adicionar"}</button>
            </div>
        </li>
        </>
    )
}