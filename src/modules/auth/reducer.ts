import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthStateType } from 'APP_MODULE'
import API from '../../api'
import { HttpServiceNoAuth } from '../../core/config/httpService'

const logout = (state: AuthStateType, _action: PayloadAction) => {
  state.jwt = undefined
  state.user = undefined
}

export const loginAPI: any = createAsyncThunk(
  'auth/loginAPI', // type
  async (data: any, thunkAPI) => {
    const res = await HttpServiceNoAuth().post(API.LOGIN, data)
    if (res.data) {
      return {...res.data}
    } else {
      return thunkAPI.rejectWithValue({})
    }
  }
)

export { logout }
