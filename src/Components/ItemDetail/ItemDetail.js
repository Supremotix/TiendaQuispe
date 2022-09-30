import { useState } from 'react'

import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

const InputCount = ({ onAdd, stock, initial = 0, }) => {


    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        setCount(e.target.value)
    }
    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>)
}

const ButtonCount = ({ onAdd, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)
    const decrement = () => {
        if (count > 0) setCount(count - 1)
    }
    const increment = () => {
        if (count < stock) setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(parseInt(count))}>Agregar al carrito</button>
        </div>)
}


const ItemDetail = ({ id, name, price, img, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
  //  const [inputType, SetInputType] = useState('button')

    // const changeCount = () => {
    //      const input = inputType === 'button' ? 'input' : 'button'
    //      SetInputType(input)
    //  }

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${name}`);
        addItem({ id, name, price, quantity })
        setQuantityAdded(quantity)

    }

    return (
        <>
            <h2>Card de detalle</h2>
            <div>
                <img className="pictures" src={img} alt={name} />
                <p>{name}</p>
                <p>$/.{price}.00</p>
                {/* <button onClick={changeCount}>Cambiar Contador</button>*/}
                {/*{inputType === 'button'
                    ? <ButtonCount onAdd={handleOnAdd} stock={stock} /> :
                    <InputCount onAdd={handleOnAdd} stock={stock} />
                } */}
                <footer className='ItemFooter'>
                    {quantityAdded === 0  ? <ItemCount stock={stock} onAdd={handleOnAdd} />
                        : <Link to='/cart'>Terminar compra</Link>
                    }
                </footer>
            </div>
        </>
    )
}


export default ItemDetail