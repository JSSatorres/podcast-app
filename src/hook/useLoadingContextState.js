import { useContext } from 'react'
import { LoadingContextState } from '../context/LoadingContext'

export const useLoadingContextState = () => {
  const context = useContext(LoadingContextState)
  if (context === undefined) {
    throw new Error(
      'LoadingContextState must be used within a LoadingContext'
    )
  }
  return context
}
