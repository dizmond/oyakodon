//arigato aniki
import express from 'express'
import { cheriberri, piplupflavor, tempimagefunction } from './pkm.js';
import Pokedex from 'pokedex-promise-v2';

const app = express();
const port = process.env.PORT || 5000;


const router = express.Router();
const P = new Pokedex();

async function majikes() {
  await P.getBerryByName('cheri')
    .then(function (response) {
      const yuh = response['natural_gift_power'];
      console.log(yuh);
      return yuh;
    })
    .catch((error) => {
      console.log('There was an ERROR: ', error);
    });
};



app.get("/cheri", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");


    const berrynum = await cheriberri().then(function(val) {
            console.log(val['natural_gift_power']);
            return val['natural_gift_power']
        });
    return res.json({ message: berrynum });


  } catch (err) {
    res.status(400).json(err);
  }
});


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


//new
app.get("/tempimage/:pkmname", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");
    const theName = req.params.pkmname;
    const pkmspritestring = await tempimagefunction(theName).then(function(val) {
            console.log(val);
            return val;
        });

    return res.json({ message: pkmspritestring });


  } catch (err) {
    res.status(400).json(err);
  }
});




app.get("/api", (req, res) => {
  //res.status(200).send("200 OK")
  res.json({ message: "Hello from server!" });

});


app.listen(port, () => {
  console.log(`bruhmachine listening on port num ${port}`);
});