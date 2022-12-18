
//@jest-environment jsdom;


//const Pokedex = require("pokeapi-js-wrapper")
//const P = new Pokedex.Pokedex()
import Pokedex from "https://unpkg.com/pokeapi-js-wrapper/dist/index.js";
const P = new Pokedex.Pokedex()

var pkmweight = 420;
var pkmheight = 421;
console.log(pkmweight)
console.log(pkmheight)
//pkm = pb.pokemon(tpkm)

///P.getPokemonByName("empoleon").then(function(response) {
    //console.log(response)
    // console.log("Start")
    // console.log(response['base_experience'])   //239
    // console.log(response['weight'])   //845
    // console.log(response['height']) //17
    // console.log(response['abilities'])

    // console.log("end")
    ///pkmweight = response['weight'];
    ///pkmheight = response['height'];
    //console.log(response[1])
    //console.log(response['weight'])
    //////pkmweight = response['weight']
    //////pkmheight = response['height']
    //console.log(response['height'])
    //console.log(response['abilities'])
///})
//console.log(pkmweight)
//console.log(pkmheight)


//BIGEND

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
//document.getElementById("testy").innerHTML = 6969;
//document.getElementById("testy2").innerHTML = 420;


//<script src="https://unpkg.com/pokeapi-js-wrapper/dist/index.js"></script>