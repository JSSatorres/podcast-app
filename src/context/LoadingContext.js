import React, { createContext, useReducer } from 'react'
import { ACTIONS } from '../utils/constants'

export const LoadingContextState = createContext()
export const LoadingContextDispatch = createContext()

const initialState = {
  isLoading: true
}

const setLoading = (state, payload) => {
  return {
    ...state,
    isLoading: payload
  }
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.SET_LOADING) {
    return setLoading(state, action.payload)
  }
  return state
}

export const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LoadingContextState.Provider value={state}>
      <LoadingContextDispatch.Provider value={dispatch}>
        {children}
      </LoadingContextDispatch.Provider>
    </LoadingContextState.Provider>
  )
}
