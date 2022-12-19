//import Pokedex from 'pokedex-promise-v2';
const dex = require("pokeapi-js-wrapper");

(async () => {
  const P = new dex.Pokedex();
  // const golduck = await P.getPokemonByName("golduck");
  // console.log(golduck);
  P.getPokemonByName("eevee").then(function (response) {
    console.log(response['weight'])
  })
})();

function brent() {
  const P = new dex.Pokedex();
  // const golduck = await P.getPokemonByName("golduck");
  // console.log(golduck);
  P.getPokemonByName("eevee").then(function (response) {
    console.log(response['weight']);
  });
};

//const P = new Pokedex
// })()
// function majikes() {

//   const P = new dex.Pokedex();

//   P.getBerryByName('cheri')
//     .then(function (response) {
//       const yuh = response;
//       //console.log(yuh);
//       return yuh;
//     })
//     .catch((error) => {
//       console.log('There was an ERROR: ', error);
//     });

// };

// const yeet = majikes();
// console.log(yeet);

// export async function dothing() {
//     let res = await majikes();
//     return res;
// };


// export function ayyo(){
//     return 69;
// };





// export function prasun() {
//     return new Promise(function(resolve, reject) {
//         const P = new Pokedex();
//         P.getBerryByName('cheri')})
//     .then(function(result) {
//         const yuh = result['natural_gift_power'];
//         return yuh
//     })
//   }

