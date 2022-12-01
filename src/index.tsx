import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './core/store/store'
import './index.scss'
import LoginComponent from './modules/auth/login'
import RegisterComponent from './modules/auth/register'
import StudentComponent from './modules/student'
import reportWebVitals from './reportWebVitals'
import AuthLayoutComponent from './core/layout/auth'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <App /> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomeComponent />} /> */}
        <Route path='/' element={<LoginComponent />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/auth' element={<AuthLayoutComponent />}>
          <Route path='register' element={<RegisterComponent />} />
          <Route path='*' element={<Navigate to={'/login'} replace />} />
          <Route path='' element={<Navigate to={'/login'} replace />} />
        </Route>
        <Route path='/student' element={<AuthLayoutComponent />}>
          <Route path='' element={<StudentComponent />} />
          <Route path='*' element={<Navigate to={'/login'} replace />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>

      {/* <Button type='primary' onClick={handleLogout}>
          logout
        </Button> */}
    </BrowserRouter>
    </PersistGate>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
