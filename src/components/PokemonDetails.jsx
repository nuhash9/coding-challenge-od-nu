import {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"

const PokemonDetails = () => {
  const { id: pkId } = useParams()
  const [pokemonDescription, setPokemonDescription] = useState({})

  useEffect(() => {

    console.log('pkId', pkId)
    const loadPokemon = async () => {
      console.log('pkId', pkId)
      if (pkId) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkId}`)
        const { name, types, sprites, height, weight, id } = await res.json()
  
        setPokemonDescription({ name, types, sprites, height, weight, id })
      }
    }

    loadPokemon()
  }, [])

  return (
    <>
      <Link to='/'> {"<- home"}</Link>
      <h2>{pokemonDescription.name}</h2>
      <div>
      {pokemonDescription.sprites && 
      <img src={pokemonDescription.sprites.front_default} alt="sprite front" />
      }
      <p>Types:</p>
      {pokemonDescription.types && pokemonDescription.types.map((type) => <span key={type.type.name}>•{type.type.name}•</span>)}
      <br />
      <span>Height: {pokemonDescription.height} • </span>
      <span> Weight: {pokemonDescription.weight}</span>
      <p>No. {pokemonDescription.id}</p>
      </div>
    </>
  )
}

export default PokemonDetails