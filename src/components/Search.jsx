import styles from './Search.module.css'

const Search = ({ setSearchWord }) => {
  return (
    <div className={styles['Search']}>
      <input type="text" placeholder='Search' onChange={(e) => setSearchWord(e.target.value)}/>
    </div>
  )
}

export default Search