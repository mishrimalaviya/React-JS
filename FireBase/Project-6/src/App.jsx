import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sign from './Components/Signup'
import { BrowserRouter } from 'react-router'
import R from './Routes/Routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <R></R>
      </BrowserRouter>
    </>
  )
}

export default App
