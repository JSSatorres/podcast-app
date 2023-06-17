import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import PodcastPage from './pages/PodcastPage'
import EpisodePage from './pages/EpisodePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastPage />
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <EpisodePage />
      }
    ]
  }
])

function Router () {
  return <RouterProvider router={router} />
}

export default Router
