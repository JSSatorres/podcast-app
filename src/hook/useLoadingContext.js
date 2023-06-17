import { useContext } from 'react'
import { LoadingContext } from '../context/LoadingContext'

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}
