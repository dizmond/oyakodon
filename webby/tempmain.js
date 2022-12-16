const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

var pkmweight = 0;
var pkmheight = 0;
//pkm = pb.pokemon(tpkm)

P.getPokemonByName("empoleon").then(function(response) {
    //console.log(response[0])
    //console.log(response[1])
    console.log(response['weight'])
    console.log(response['height'])
    console.log(response['abilities'])
})
// console.log(pkm)
// const interval = {
//     offset: 24,
//     limit: 10,
//   }
//   P.getPokemonsList(interval).then(function(response) {
//     console.log(response)
//     console.log(response[1][1])
//   })

// (async () => {
//     const pkms = await P.getPokemonByName("golduck")
//     console.log(pkms)
//   })()

// P.getPokemonByName("eevee")
//   .then(function(response) {
//     console.log(response)
//   })

//var golduck = P.getPokemonByName("golduck");
//console.log(golduck)

//golduck = "asdfasdf"


//THIS ALONE WORKS
//var sparky = "sparky"
//document.getElementById("testy").innerHTML = sparky;
//document.getElementById("testy").innerHTML = golduck;


//<script src="https://unpkg.com/pokeapi-js-wrapper/dist/index.js"></script>