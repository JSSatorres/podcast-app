import React from 'react'
import styles from './table.module.css'

const Table = ({ episodes, handleEpisode }) => {
  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode, index) => (
          <tr key={index} onClick={() => handleEpisode(episode.id)}>
            <td>{episode.title}</td>
            <td>{episode.date}</td>
            <td>{episode.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
