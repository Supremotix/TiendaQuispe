//import { useContext } from 'react'
import { Link } from 'react-router-dom'
//import { Context } from '../../App'

const Item = ({ id, name, img, price }) => {

/*

 const handleClick = (event) =>{
    event.stopPropagation()
    console.log('Hice click');
 }*/

    return (
        <li>
            <img className="pictures" src={img} alt={name} />
            <p>{name}</p>
            <p>$/.{price}.00</p>
            <Link  className="btn btn-success"  to={`/detail/${id}`}>ver detalle</Link>
        </li>
    )
}
export default Item