//arigato aniki
import express from 'express'
import { gmajikes, pipmajikes } from './pkm.js';
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



app.get("/flavor", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");
    const ztest = await gmajikes().then(function(val) {
            console.log(val['natural_gift_power']);
            return val['natural_gift_power']
        });
    return res.json({ message: ztest });


  } catch (err) {
    res.status(400).json(err);
  }
});


app.get("/pip", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");
    const ztest = await pipmajikes().then(function(val) {
            console.log(val);
            return val;
        });

    return res.json({ message: ztest });


  } catch (err) {
    res.status(400).json(err);
  }
});

//  app.get("/ztemp", (req, res) => {
//     // const ztest = majikes();
//     // console.log(ztest);
//     res.json({message: "yuh"});
//   });


// app.get("/flavor", (req, res) => {
//     const ztest = majikes();
//     console.log(ztest);
//     res.json({message: ztest});
//   });



app.get("/api", (req, res) => {
  //res.status(200).send("200 OK")
  res.json({ message: "Hello from server!" });

});


app.listen(port, () => {
  console.log(`bruhmachine listening on port num ${port}`);
});