import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
//import  store  from './redux/cake/cakeStore'
import rootStore from './redux/rootStore'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
const App = () => {
  return (
    <Provider store={rootStore}>
      <div className='App'>
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  )
}

export default App