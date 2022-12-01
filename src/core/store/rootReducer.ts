import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../../modules/auth/authSlice'
import { studentReducer } from '../../modules/student/slice'

const authPersistConfig = {
  key: 'auth',
  storage: storage
  // whitelist: ['isLoggedIn']
}
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  studnet: studentReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
