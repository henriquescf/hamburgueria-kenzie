import { ProductCard } from "./ProductCard"
import "../../styles/ProductList.scss"

export const ProductList = ({ productList, cartList, setCartList}) => {
   return (
      <>
      <ul className="products-list">
         {productList.map((product) => (
            <ProductCard key={product.id} {...{product, cartList, setCartList}} />
         ))}
      </ul>
      </>
   );
};
