import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { api } from "../../services/api"
import "../../styles/Main.scss"

export const HomePage = ({cartList, setCartList, modal, setModal}) => {
  const [productList, setProductList] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get("/products")
      data.map(product => product.quantity = 1)
      setProductList(data)
    }
    getProducts()
  }, [])

  return (
    <>
      <Header {...{modal, setModal, cartList}}/>
      <main className="main">
        <ProductList {...{productList, cartList, setCartList}} />
      </main>
    </>
  );
};
