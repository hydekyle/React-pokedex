export const getPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    const dataJSON = await response.json()
    const pokemonList = Array.from(dataJSON.results)
    return pokemonList
}
