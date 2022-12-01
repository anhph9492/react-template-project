import { AuthStateType } from 'APP_MODULE'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';

const RequireAuthLayout: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  const authState: AuthStateType = useSelector((state: any) => state.auth)
  if (authState.jwt) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}

export default RequireAuthLayout
