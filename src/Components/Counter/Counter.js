import { useState, useEffect } from 'react'
//import Button from '../Button/Button'

const Counter = (props) => {

    // const { initial, title } = props
    //console.log(props);
    const [count, setCount] = useState(props.initial)
    const [result, setResult] = useState(0)

    //console.log(count)
    //console.log(setCount)

    useEffect(() => {
        console.log('El componente fue montado')
    }, [])

    useEffect(() => {
        console.log('se ejecuta despues del montaje y cuando actualiza todo')
    }, [count])

    useEffect(() => {
        setResult(count*2)
    },[count])
    const decrement = () => {
        setCount(prev => prev - 1)
        // for (let i = 0; i < 2; i++) {
        //   setCount(count - 1)
        //}
      
    }
    const increment = () => {
        count < props.stock && setCount(count + 1)
       
    }

    const reset = () => {
        setCount(props.initial)
   
    }
    console.log('antes del montaje y cada render(actuliza)');
    return (
        <div>
            <h1>{props.tittle}</h1>
            <h1>Count * 2 : {result} </h1>
            {/*<button>-</button>*/}
            {/*<Button handleclick={() => console.log('restar')} label='-' />*/}
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            {/*<button onClick={props.handleIncrement}>+</button>*/}

            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
            {/*<Button onClick={reset}><h1>reset</h1></Button>*/}
            {/*<Button handleclick={() => console.log('sumar')} label='+' />*/}
        </div>)
}
export default Counter