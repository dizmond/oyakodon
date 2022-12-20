import Pokedex from 'pokedex-promise-v2';
import React from 'react'

export function majikes() {

    const P = new Pokedex();

     P.getBerryByName('cheri')
.then(function(response) {
   const yuh = response['natural_gift_power'];
   console.log(yuh);
   return yuh;
})
.catch((error) => {
  console.log('There was an ERROR: ', error);
});
};


export async function amajikes() {
  const P = new Pokedex();

  await P.getBerryByName('cheri')
  .then((response) => {
    console.log(response['natural_gift_power']);
    const yuh = response['natural_gift_power'] + 12;
    console.log(yuh)
  })

};


export async function emajikes() {

  const promise = Promise.resolve(17468);
 
  promise.then(function(val) {
      console.log(val);
      return val
  });
}

export async function fmajikes() {

  const promise = Promise.resolve(17468);
  return promise;
 
  
}

//majikes();
// export async function asynccall() { //WORKS LOCALLY BUT NOT W SENDING
//     const zz = new Pokedex();
//     const zpkm = await zz.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
//         console.log(bruh)
//         return {bruh}
// }

// export async function zasynccall() {
//     const zz = new Pokedex();
//     const zpkm = await zz.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
//         .then(response => response.json())
//         console.log(bruh)
//         return {bruh}
// }

// export function xasynccall() {
//     const zz = new Pokedex();
//     const zpkm = zz.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
//         console.log(bruh)
//         return bruh
        
// }

// export function pillow() {
//     var ztest = "ayyo"
//     return ztest
// }
//response => response.json()
///asynccall();
// (async () => { // with Async/Await
//     try {
//         //const allz = await P.getVersionGroupsList
//         const zpkm = await p.getPokemonSpeciesByName("piplup")
//         //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
//         //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
//         const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
//         //console.log(bruh)
//         console.log(bruh)
//     } catch (error) {
//         throw error
//     }
// })()







// export function ztest() {
//     console.log("ayyo")
//     const pm = new Pokedex();
//     const zpkm = pm.getPokemonSpeciesByName("piplup")
//     console.log(zpkm)
//     const zz = String(zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en'))
//     return zz
// }

// export function ztestt() {
//     return ("yeet");
// }
    
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


// const getName = () => {
//     return 'Jim';
//   };
  
//exports.getName = getName;
//export {getName, ztest};