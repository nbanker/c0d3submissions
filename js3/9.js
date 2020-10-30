const fetch = require('node-fetch')
const fs = require('fs')


fetch('https://pokeapi.co/api/v2/pokemon/').then((pokemon)=>{
  return pokemon.json()
}).then((pokemonData)=>{
  const nameAndPicPokemon = pokemonData.results.map((thisPokemon)=>{
    return fetch(thisPokemon.url).then((thisPokemonUrl)=>{
     return thisPokemonUrl.json()
    })
  })
  Promise.all(nameAndPicPokemon).then((results)=>{
    const htmlStr = results.reduce((acc, el)=>{
    return `${acc}<div><p>${el.name}</p><img src="${el.sprites.front_default}"/><div>`;
    },'');
    fs.writeFile('9.html', htmlStr, ()=>{``});

  })
})