import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import { sto } from './Store/Store'
import F from './Components/StudentForm'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {

  return (
    <>
      <Provider store={sto}>
          <F></F>
      </Provider>
    </>
  )
}

export default App
