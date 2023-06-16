import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getAllPodcasts } from './services/podcastService'

function App () {
  const [podcasts, setPodcasts] = useState([])
  console.log(podcasts)
  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const fetchedPodcasts = await getAllPodcasts()
        setPodcasts(fetchedPodcasts)
      } catch (error) {
        console.log('Error fetching podcasts:', error)
      }
    }

    getPodcasts()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{process.env.REACT_APP_PRODUCTION}</h1>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
