
import { useContext } from "react"

import CartContext from "../Context/CartContext"


const CartWidget =()=>{
const {getCartQuantity , totalQuantity} = useContext(CartContext)
//const totalQuantity = getCartQuantity()
    return(
        <div className='Container-img'>
            <img  className="img" src='/images/carrito2.png'/>
        {totalQuantity}
        </div>
    )
}
export default CartWidget