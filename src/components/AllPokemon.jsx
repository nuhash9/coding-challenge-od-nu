import styles from './AllPokemon.module.css'

import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"

const AllPokemon = ({ filterWord }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [displayedPokemons, setDisplayedPokemons] = useState([])
  
  useEffect(() => {
    console.log('pokemons', pokemons)

    const loadPokemons = async () => {
      setIsLoading(true)

      const initial = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const { count } = await initial.json()
      console.log('pokemon count:', count)
  
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
      const fetchedPokemons = await res.json()
      console.log('response.results:', fetchedPokemons.results)
  
      setPokemons(fetchedPokemons.results)
      setDisplayedPokemons(pokemons.slice(0, 20))
      setIsLoading(false)
    }

    loadPokemons()
  }, [])

  useEffect(() => {
    if (filterWord) {
      console.log('filter word:', filterWord)
      setDisplayedPokemons(() => {
        if (pokemons) {
          return pokemons.filter((pokemon) => {
            return pokemon.name.includes(filterWord)
          })
          .slice(0, 20)
        }
      })
    }
  }, [filterWord])

  return (
    <div>
      <h2>Pokedex</h2>
      {isLoading && <p>Loading...</p>}
      <div className={styles['cards']}>
        {displayedPokemons && displayedPokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
        })}
      </div>
    </div>
  )
}

export default AllPokemon