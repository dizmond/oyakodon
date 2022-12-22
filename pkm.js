import Pokedex from 'pokedex-promise-v2';
import React from 'react'


//TODO IMPORTANT for this
//these functions all return a PROMISE and we can filter it
//BUT we will call .then on the return of these functions in server.js
//NOT in the function definition in here tho!

export async function cheriberri() {
  const P = new Pokedex();

  const promise = P.getBerryByName('cheri')
  return promise
}

export async function piplupflavor(name) {
  const P = new Pokedex();

  const pipspecies = await P.getPokemonSpeciesByName(name)
  const bruh = pipspecies.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en')[0].flavor_text
  return bruh;
}

export async function tempimagefunction(name) {
  const P = new Pokedex();

  const thespecies = await P.getPokemonByName(name)  //gets all data abt a pokemon from its name 

  const bruh = thespecies.sprites['front_shiny'] //data is returned in a mixed dictionary, not sure how this interacts w multiple generations yet!
  return bruh;
}

