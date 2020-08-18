import React, { createContext, useState } from 'react'

export const AppContext = createContext({ navbarActiveClass: '' })

const AppContextProvider = ({ children }) => {
  const [navbarActiveClass, toggleNavbarActiveClass] = useState('')

  return (
    <AppContext.Provider value={{ navbarActiveClass, toggleNavbarActiveClass }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
