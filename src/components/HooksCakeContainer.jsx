import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Num of Cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer