import Pokedex from 'pokedex-promise-v2';
import React from 'react'


//TODO IMPORTANT for this TODO
//these functions all return a PROMISE and we can filter it
//BUT we will call .then on the return of these functions in server.js
//NOT in the function definition in here tho!

export async function cheriberri() {
  const P = new Pokedex();

  const promise = P.getBerryByName('cheri')
  return promise
}

export async function flavor(name) {
  const P = new Pokedex();

  const species = await P.getPokemonSpeciesByName(name)
  const bruh = species.flavor_text_entries.filter(pokeAPIName => pokeAPIName.language.name === 'en')[1].flavor_text
  return bruh;
}

export async function tempimagefunction(name) {
  const P = new Pokedex();

  const thespecies = await P.getPokemonByName(name)  //gets all data abt a pokemon from its name 

  const imageurl = thespecies.sprites['front_default'] //data is returned in a mixed dictionary, not sure how this interacts w multiple generations yet!
  return imageurl;
}

