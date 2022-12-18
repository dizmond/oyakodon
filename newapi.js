

//import * as P from 'https://unpkg.com/pokeapi-js-wrapper/dist/index.js';
//import {Pokedex} from 'C:\Users\Lam Ngo Jr\Documents\GitHub\oyakodon\node_modules\pokedex-promise-v2\types/index.d.ts'
//const tes = new P.Pokedex();

import Pokedex from 'pokedex-promise-v2';

//import Pokedex from 'C:\Users\Lam Ngo Jr\Documents\GitHub\oyakodon\node_modules\pokedex-promise-v2\types\index.js'
const P = new Pokedex();

// async function load() {
//     let bruh = await import Pokedex from 'pokedex-promise-v2';
//     const P = new Pokedex();
// }

// load();
//document.getElementById("testy").innerHTML = 6969;
//document.getElementById("testy2").innerHTML = 420;
//console.log("TESTITESTITESTITEST")

// P.getPokemonByName(['eevee']) // with Promise
//   .then((response) => {
//     console.log(response)
//     console.log("start")
//     console.log(response['abilities'])
//     console.log(response[3][1])
//   })
//   .catch((error) => {
//     console.log('There was an ERROR: ', error);
//   });

//var inn = "pipulp";


  (async () => { // with Async/Await
    try {
        //const allz = await P.getVersionGroupsList
        const zpkm = await P.getPokemonSpeciesByName("piplup")
        //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
        //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
        const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
        //console.log(bruh)
        console.log(bruh)
    } catch (error) {
        throw error
    }
})()



//CANT GET POKEDEX TO WORK BUT OTHERWISE SEEMS OKAY?????????

// (async () => {

//     let modd = await import('pokedex-promise-v2');
//     const yeet = new modd.Pokedex();
  
//     console.log("YUH")
  
//   })();

//document.getElementById("testy").innerHTML = 6969;
//document.getElementById("testy2").innerHTML = 420;