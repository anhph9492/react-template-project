import { Button, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { authLogout } from '../../../modules/auth/authSlice'
import SideBarComponent from '../../components/molecules/sidebar'
// import { useAppDispatch } from '../../store/store'
import RequireAuthLayout from '../require-auth'

const AuthLayoutStyed = styled.div`
  display: flex;
  .app-sticky-header {
    position: fixed;
    top: 0;
    width: 100%;
  }
`

const ContentStyled = styled.div`
  width: 100%;
`

const RowHeaderStyled = styled(Row)`
  height: 70px;
  background-color: #ebf5d1;
  width: 100%;
`

const AuthLayoutComponent: React.FC = () => {

  // const dispatch = useAppDispatch()
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    window.onscroll = function () {
      myFunction()
    }
    const header = document.getElementById('app-header')
    const sticky = header?.offsetTop || 0
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header?.classList.add('app-sticky-header')
      } else {
        header?.classList.remove('app-sticky-header')
      }
    }
  }, [])

  const handleLogout = () => {
    dispatch(authLogout())
  }

  return (
    <RequireAuthLayout>
      <AuthLayoutStyed>
        <SideBarComponent />
        <ContentStyled>
          <RowHeaderStyled id='app-header'>

            <Button onClick={handleLogout}> logout </Button>
          </RowHeaderStyled>
          <Row>
            <Outlet />
          </Row>
        </ContentStyled>
      </AuthLayoutStyed>
    </RequireAuthLayout>
  )
}

export default React.memo(AuthLayoutComponent)
