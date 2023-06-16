import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Podcast from './pages/Podcast/Podcast'
import Episode from './pages/Episode/Episode'

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
        element: <Podcast />
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <Episode />
      }
    ]
  }
])

function Router () {
  return <RouterProvider router={router} />
}

export default Router
