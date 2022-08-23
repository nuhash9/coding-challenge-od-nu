import { useState } from 'react'
import styles from './App.module.css'
import AllPokemon from './components/AllPokemon'
import Favorites from './components/Favorites'
import Search from './components/Search'
import PokemonDetails from './components/PokemonDetails'

import {Routes, Route} from 'react-router-dom'


function App() {
  const [searchWord, setSearchWord] = useState('')

  // get all pokemon

  return (
    <div className={styles['App']}>
      <header>
        <h1>Pokepick</h1>
      </header>

      <Routes>
        <Route path='/' element={
          <>
            <section className={styles['top']}>
              <Search setSearchWord={setSearchWord}/>
            </section>
            <section className={styles['main']}>
              <AllPokemon filterWord={searchWord}/>
              <Favorites />
            </section>
          </>
        } />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>

    </div>
  )
}

export default App
