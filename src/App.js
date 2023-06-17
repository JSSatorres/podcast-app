import React from 'react'
import Router from './Router'
import './App.css'
import { LoadingProvider } from './context/LoadingContext'

function App () {
  return (
    <LoadingProvider>
      <Router />
    </LoadingProvider>
  )
}

export default App
