import axios from 'axios'
import { authLogout } from '../../modules/auth/authSlice'
import store from '../store/store'
import APP_CONFIG from './appConfig'

const HttpService = () => {
  const axiosInstance = axios.create({
    // baseURL: APP_CONFIG.BASE_URL,
    baseURL: APP_CONFIG.BASE_URL,
    headers: {
      Authorization: `Bearer ${store.getState().auth.jwt}`
      //   Content-Type: "application/json",
      //   timeout : 1000,
    }
    // .. other options
  })
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      store.dispatch(authLogout())

      return Promise.reject(error)
    }
  )

  return axiosInstance
}

const HttpServiceNoAuth = () => {
  const axiosInstance = axios.create({
    baseURL: APP_CONFIG.BASE_URL
  })
  return axiosInstance
}

export { HttpService, HttpServiceNoAuth }
