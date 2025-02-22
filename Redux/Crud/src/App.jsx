import { stor } from './Storage/Store'
import {Provider} from 'react-redux'
import Cr from './Components/Crud'

function App() {
  return (
    <>
      <Provider store={stor}>
          <Cr></Cr>
      </Provider>
    </>
  )
}


export default App
