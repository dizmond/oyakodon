//arigato aniki
import express from 'express'
import { cheriberri, piplupflavor, tempimagefunction } from './pkm.js';
import Pokedex from 'pokedex-promise-v2';

const app = express();
const port = process.env.PORT || 5000;


const router = express.Router(); //prob navigates between pages?

// const P = new Pokedex();

//OLD STUFF
// async function majikes() {
//   await P.getBerryByName('cheri')
//     .then(function (response) {
//       const yuh = response['natural_gift_power'];
//       console.log(yuh);
//       return yuh;
//     })
//     .catch((error) => {
//       console.log('There was an ERROR: ', error);
//     });
// };


//gets berry data, mostly for debugging!
//this is OUTDATED because we can filter the contents of the promise
//from inside the function that returns the promise - pretty cool!
app.get("/cheri", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");


    const berrynum = await cheriberri().then(function(val) {
            //console.log(val['natural_gift_power']);
            return val['natural_gift_power']
        });
    return res.json({ message: berrynum });


  } catch (err) {
    res.status(400).json(err);
  }
});

//gets flavor text, important for proof-of-concept and reference!
app.get("/piplup/:pkmname", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");
    const theName = req.params.pkmname;
    const piplupft = await piplupflavor(theName).then(function(val) {
            //console.log(val);
            return val;
        });

    return res.json({ message: piplupft });


  } catch (err) {
    res.status(400).json(err);
  }
});


//new stuff, gets sprite of a pokemon!
//TODO make this the val of the entered pokemon
app.get("/tempimage/:pkmname", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");

    const theName = req.params.pkmname; //gets the name of the pokemon from client-side input 

    const pkmspritestring = await tempimagefunction(theName).then(function(val) { //invokes the function in pkm.js
            console.log(val);
            return val;
        });

    return res.json({ message: pkmspritestring });


  } catch (err) {
    res.status(400).json(err);
  }
});



//important canary to make sure client is talking to the server at all
app.get("/api", (req, res) => {
  //res.status(200).send("200 OK")
  res.json({ message: "Hello from server!" });

});


app.listen(port, () => {
  console.log(`bruhmachine listening on port num ${port}`);
});