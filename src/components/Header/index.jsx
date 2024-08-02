import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md"
import "../../styles/Header.scss"

export const Header = ({setModal, cartList}) => {

   const handleClick = (e) => {
      e.preventDefault()
      setModal(true)
   }

   return (
      <header className="header">
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button onClick={handleClick}>
            <MdShoppingCart size={21} />
            <span>{cartList.length}</span>
         </button>
      </header>
   );
};
