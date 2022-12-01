import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayoutComponent from '../../core/layout/auth'
import LoginComponent from '../auth/login'
import RegisterComponent from '../auth/register'
import StudentComponent from '../student'
import './App.scss'

function App() {
  // const { testAppContext, setTestAppContext } =
  //   React.useContext<AppContextType>(AppContext)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const authState: AuthStateType = useSelector((state: any) => state.auth)

  // // React.useEffect(() => {
  // //   if (!authState.jwt) {

  // //     navigate('/login')
  // //   }
  // // }, [authState.jwt])

  // const handleLogout = () => {
  //   dispatch(authLogout())
  // }

  return (
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
  )
}

export default App
