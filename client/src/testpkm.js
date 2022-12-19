import Pokedex from 'pokedex-promise-v2';

//import Pokedex from 'C:\Users\Lam Ngo Jr\Documents\GitHub\oyakodon\node_modules\pokedex-promise-v2\types\index.js'
const P = new Pokedex();

function ztest() {
    const zpkm = P.getPokemonSpeciesByName("piplup")
    return zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') 
}

// (async () => { // with Async/Await
//     try {
//         //const allz = await P.getVersionGroupsList
//         const zpkm = await P.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
//         //console.log(bruh)
//         console.log(bruh)
//     } catch (error) {
//         throw error
//     }
// })()


const getName = () => {
    return 'Jim';
  };
  
//exports.getName = getName;
export {getName, ztest};