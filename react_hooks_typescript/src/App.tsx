import { UseStateComponent } from 'UseState'
import { UseEffectComponent } from 'UseEffect'
import { UseContextComponent } from 'UseContext'
import { UseReducerComponent } from 'UseReducer'
import { UseRefComponent } from 'UseRef'

function App() {
  return (
    <div>
      <h1>UseRef</h1>
      <UseRefComponent />

      <h1>UseReducer</h1>
      <UseReducerComponent />

      <h1>UseContext</h1>
      <UseContextComponent />

      <h1>UseEffect</h1>
      <UseEffectComponent />

      <h1>UseState</h1>
      <UseStateComponent />
    </div>
  )
}

export default App
