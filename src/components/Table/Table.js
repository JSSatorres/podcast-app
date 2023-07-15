import React from 'react'
import styles from './table.module.css'
import { formatDate, formatDuration } from '../../utils/timesUtils'

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
        {episodes && episodes.map((episode, index) => (
          <tr
            key={index} onClick={() => handleEpisode(episode?.id)}
          >
            <td className={styles.title}>{episode?.title}</td>
            <td>{formatDate(episode.date)}</td>
            <td className={styles.centerAlign}>{formatDuration(episode?.duration)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
