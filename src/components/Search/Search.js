import React from 'react'
import styles from './search.module.css'

const Search = ({ handleChange }) => {
  return (
    <div className={styles.searchContainer}>
      <h3 className={styles.searchTitle}>100</h3>
      <input
        type='text'
        placeholder='Filter podcasts...'
        onChange={(e) => handleChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  )
}

export default Search
