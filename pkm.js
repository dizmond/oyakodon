import Pokedex from 'pokedex-promise-v2';
import React from 'react'

//import Pokedex from 'C:\Users\Lam Ngo Jr\Documents\GitHub\oyakodon\node_modules\pokedex-promise-v2\types\index.js'
const p = new Pokedex();

// const zpkm = m.getPokemonSpeciesByName("piplup")
// //const zlog = (zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en'))
// const zlog = zpkm.flavor_text_entries
// console.log(zlog)
export async function asynccall() {
    const zpkm = await p.getPokemonSpeciesByName("piplup")
        //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
        //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
        const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
        console.log(bruh)
        return {bruh}
}

export async function zasynccall() {
    const zpkm = await p.getPokemonSpeciesByName("piplup")
        //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
        //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
        const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
        .then(response => response.json())
        console.log(bruh)
        return {bruh}
}

export async function xasynccall() {
    const zpkm = await p.getPokemonSpeciesByName("piplup")
        //const frenchName = zpkm.names.filter(pokeAPIName => pokeAPIName.language.name === 'es')[0].name
        //const bruh = zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en') //WORKS
        
        return zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en').filter(pokeAPIName => pokeAPIName.version.name === 'platinum')[0].flavor_text
        
}

export function pillow() {
    var ztest = "ayyo"
    return ztest
}
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







export function ztest() {
    console.log("ayyo")
    const pm = new Pokedex();
    const zpkm = pm.getPokemonSpeciesByName("piplup")
    console.log(zpkm)
    const zz = String(zpkm.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en'))
    return zz
}

export function ztestt() {
    return ("yeet");
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
//export {getName, ztest};