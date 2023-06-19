import React from 'react'
import styles from './episodePlayer.module.css'

// al notener acceso a CORS no he metido ningun mp3
// para suministrar datos al src estando episode?.audioFile
// vacio sin poder reproducirse nada

const EpisodePlayer = ({ episode }) => {
  return (
    <div>
      <audio controls className={styles.audioPlayer}>
        <source
          className={styles.audioElement}
          src={episode?.audioFile}
          type='audio/mpeg'
          style={{ borderRadius: '0.5rem', textAlign: 'center' }}
        />
      </audio>
    </div>
  )
}
export default EpisodePlayer
