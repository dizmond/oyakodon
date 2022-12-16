const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
(async () => {
    const golduck = await P.getPokemonByName("golduck")
    console.log(golduck)
  })()

document.getElementById("testy").innerHTML = golduck;




//<script src="https://unpkg.com/pokeapi-js-wrapper/dist/index.js"></script>