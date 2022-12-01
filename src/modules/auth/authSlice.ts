import { createSlice } from '@reduxjs/toolkit'
import { AuthStateType } from 'APP_MODULE'
import { loginAPI } from './reducer'

const initialState: AuthStateType = {
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state: AuthStateType) => {
      state.jwt = undefined
      state.user = undefined
      state.loading = false
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(loginAPI.pending, (state: any, action: any) => {
      state.isLoading = true
    })
    builder.addCase(loginAPI.fulfilled, (state: any, action: any) => {
      state.isLoading = false
      const user = action.payload.user
      const jwt = action.payload.jwt
      state.user = user
      state.jwt = jwt
    })
    builder.addCase(loginAPI.rejected, (state: any, action: any) => {
      state.isLoading = false
      // state.errorMessage = action.payload.message
    })
  }
})

const { actions, reducer } = authSlice

export const { authLogout } = actions

export default reducer
