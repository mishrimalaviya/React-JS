import Form from './Components/form'
import { sto } from './storage/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={sto}>
        <Form></Form>
      </Provider>
    </>
  )
}

export default App
