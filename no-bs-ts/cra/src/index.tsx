import ReactDOM from 'react-dom'
import 'index.css'
import App from 'components/App'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { JustTodos } from 'components/justTodos'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <JustTodos />
  </Provider>,
  document.getElementById('root')
)
