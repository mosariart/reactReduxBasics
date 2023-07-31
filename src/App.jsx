import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import  store  from './redux/cake/cakeStore'
const App = () => {
  return (
    <Provider store={store}>
      <CakeContainer/>
    </Provider>
  )
}

export default App