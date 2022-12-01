import React from 'react'

export type AppContextType = {
  testAppContext: string,
  setTestAppContext: any
}

export const AppContext = React.createContext<AppContextType>({
  testAppContext: '',
  setTestAppContext: null
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [testAppContext, setTestAppContext] = React.useState('')

  const value = { testAppContext, setTestAppContext }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
