import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import "./devpanel.css";

export default () => {
  
  const [pokemonList, setPokemonList] = useState(null)
  const [selectedPokemonSpriteURL, setSelectedPokemonSpriteURL] = useState("")

  const selectPokemon = async (pokemon) => {
    const result = await fetch(pokemon.url);
    const pokemonData = await result.json()
    const spriteURL = pokemonData.sprites.front_default
    setSelectedPokemonSpriteURL(spriteURL)
  }

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      const dataJSON = await response.json()
      const result = Array.from(dataJSON.results)
      setPokemonList(result)
    }
    if (pokemonList == null) fetchPokemonList()
  }, [])

  const pokemonListAll = () => {
    const items = []
    for (var x = 0; x < pokemonList.length; x++) {
      const pokemon = pokemonList[x]
      items.push(<Button key={x} onClick={() => selectPokemon(pokemon)}>{pokemon.name}</Button>)
    }
    return items
  }

  const pokedex = () => {
    return (
      <div className="table">
        <div className="left-table">
          <img src={selectedPokemonSpriteURL} />
        </div>
        <div className="right-table">
          {pokemonListAll()}
        </div>
      </div>
    )
  }

  return (
    <div >
      {pokemonList === null ? <h3>Loading</h3> : pokedex()}
    </div>
  )
}
