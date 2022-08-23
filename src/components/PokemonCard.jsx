import { useEffect, useState } from "react"
import { useFavoritesContext } from "../contexts/FavoritesContext"
import { Link } from "react-router-dom"

const PokemonCard = ({pokemon}) => {
  const [pokemonDescription, setPokemonDescription] = useState({})
  const {dispatch} = useFavoritesContext()

  useEffect(() => {
    const loadPokemon = async () => {
      const res = await fetch(pokemon.url)
      const { name, types, sprites, height, weight, id } = await res.json()

      setPokemonDescription({ name, types, sprites, height, weight, id })
    }

    loadPokemon()
  }, [])

  const handleAddFavorite = () => {
    dispatch({
      type: 'ADD',
      payload: pokemon
    })
  }

  return (
    <div>
      <Link to={`/pokemon/${pokemonDescription.id}`}>
        <h3>{pokemonDescription.name}</h3>
      </Link>
      {pokemonDescription.sprites && 
      <img src={pokemonDescription.sprites.front_default} alt="sprite front" />
      }
      <button onClick={handleAddFavorite}>Favorite</button>
      <p>Types:</p>
      {pokemonDescription.types && pokemonDescription.types.map((type) => <span key={type.type.name}>•{type.type.name}•</span>)}
      <p>No. {pokemonDescription.id}</p>
    </div>
  )
}

export default PokemonCard