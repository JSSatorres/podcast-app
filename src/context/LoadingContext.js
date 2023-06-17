import React, { createContext, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const setStateLoading = (value) => {
    setIsLoading(value)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setStateLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
