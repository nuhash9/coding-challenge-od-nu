import { createContext, useContext, useEffect, useReducer } from "react";

const FavoritesContext = createContext()

export const useFavoritesContext = () => useContext(FavoritesContext)

const fpReducer = (state, action) => {
  console.log('state:', state)
  console.log('payload:', action.payload)
  switch (action.type) {
    case 'LOAD POKEMONS':
      return action.payload
    case 'ADD':
      if (state.includes(action.payload)) {
        return state
      }
      localStorage.setItem('favoritePokemons', JSON.stringify([...state, action.payload]))
      return [...state, action.payload]
    case 'DELETE':
      let filtered = state.filter((pokemon) => pokemon !== action.payload)
      localStorage.setItem('favoritePokemons', JSON.stringify(filtered))
      return filtered
    default:
      return state
  }
}


const FavoritesContextProvider = ({children}) => {
  const [favoritePokemons, dispatch] = useReducer(fpReducer, [])

  useEffect(() => {
    const savedPokemons = JSON.parse(localStorage.getItem('favoritePokemons'))
    console.log('saved pokemons:', savedPokemons)
    if (savedPokemons) {
      dispatch({
        type: 'LOAD POKEMONS',
        payload: savedPokemons
      })
    }
  }, [])

  return (
    <FavoritesContext.Provider value={{favoritePokemons, dispatch}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider