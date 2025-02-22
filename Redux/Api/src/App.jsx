import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { stor } from './Storage/Store'
import {Provider} from 'react-redux'
import Fec from './Components/Fetching'


function App() {

  return (
    <>
      <Provider store={stor}>
            <Fec></Fec>
      </Provider>
    </>
  )
}

export default App
