import { useContext } from 'react'
import { LoadingContextDispatch } from '../context/LoadingContext'

export const useLoadingContextDispatch = () => {
  const context = useContext(LoadingContextDispatch)

  if (context === undefined) {
    throw new Error(
      'LoadingContextDispatch must be used within a LoadingContext'
    )
  }
  return context
}
