import React, { createContext, useReducer } from 'react'
import { ACTIONS } from '../utils/constants'

export const LoadingContext = createContext()

const initialState = {
  isLoading: false
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.SET_LOADING) {
    return {
      isLoading: action.payload
    }
  }
  return state
}

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = {
    state,
    dispatch
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  )
}
