import styles from './Favorites.module.css'

import { useFavoritesContext } from '../contexts/FavoritesContext'
import PokemonCard from './PokemonCard'

const Favorites = () => {
  const { favoritePokemons, dispatch } = useFavoritesContext()

  const handleDeleteFavorite = (p) => {
    dispatch({
      type: 'DELETE',
      payload: p
    })
  }

  return (
    <div className={styles['Favorites']}>
      <h2>I chose</h2>
      {favoritePokemons && favoritePokemons.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
              <button onClick={() => handleDeleteFavorite(pokemon)}>delete</button>
            </div>
          )
      })}
    </div>
  )
}

export default Favorites