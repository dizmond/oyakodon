import Pokedex from 'pokedex-promise-v2';


//const P = new Pokedex();


// function ztest() {
//     const P = new Pokedex()
//     const zpkm = P.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text

//         console.log(bruh)
// }

// (async () => { // with Async/Await
//     try {
//         const zpkm = await P.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text

//         console.log(bruh)
//     } catch (error) {
//         throw error
//     }
// })()
export function majikes() {
    const P = new Pokedex()
    P.getBerryByName('cheri')
.then((response) => {
  console.log(response['natural_gift_power']);
})
.catch((error) => {
  console.log('There was an ERROR: ', error);
});
}

majikes()