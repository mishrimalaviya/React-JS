import Counter from "./Components/Counter"
import { stor } from "./Storage/Store"
import {Provider} from 'react-redux'

function App() {

  return (
    <>
      <Provider store={stor}>
          <Counter></Counter>
      </Provider>
    </>
  )
}

export default App
