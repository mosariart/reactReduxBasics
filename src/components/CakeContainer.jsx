import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
        <div>Number of cakes - {props.numOfCakes}</div>
        <button onClick={props.buyCake}>buy a cake</button>
    </div>
  )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes 
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)