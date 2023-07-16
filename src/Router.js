import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import PodcastPage from './pages/PodcastPage'
import Episode from './components/Episode'
import EpisodeList from './components/EpisodeList'
import NoMatchPage from './pages/NoMatchPage'

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
        element: <PodcastPage />,
        children: [
          {
            index: true,
            element: <EpisodeList />
          },
          {
            path: 'episode/:episodeId',
            element: <Episode />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NoMatchPage />
  }
])

function Router () {
  return <RouterProvider router={router} />
}

export default Router
