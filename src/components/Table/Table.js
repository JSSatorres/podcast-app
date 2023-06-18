import React from 'react'
import styles from './table.module.css'

const Table = ({ episodes, handleEpisode }) => {
  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th className={styles.firstColumn}>Title</th>
          <th>Date</th>
          <th className={styles.centerAlign}>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode, index) => (
          <tr key={index} onClick={() => handleEpisode(episode.id)}>
            <td className={styles.title}>{episode.title}</td>
            <td>{episode.date}</td>
            <td className={styles.centerAlign}>{episode.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
