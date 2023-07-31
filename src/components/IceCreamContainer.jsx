import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

const HooksCakeContainer = () => {
    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Num of Cakes - {numOfIceCream}</h2>
        <button onClick={()=> dispatch(buyIceCream())}>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer