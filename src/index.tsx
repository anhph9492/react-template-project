import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './core/store/store'
import './index.scss'
import App from './modules/app/App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
