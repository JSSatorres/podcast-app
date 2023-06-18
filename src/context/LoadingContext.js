import React, { createContext, useCallback, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState()

  const setStateLoading = useCallback((value) => {
    setTimeout(() => {
      setIsLoading(value)
    }, 1000)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setStateLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
