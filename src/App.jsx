import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import  store  from './redux/cake/cakeStore'
import HooksCakeContainer from './components/HooksCakeContainer'
const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer/>
        <HooksCakeContainer/>
      </div>
    </Provider>
  )
}

export default App