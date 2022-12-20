//arigato aniki
import express from 'express'
//import { majikes } from './pkm.js';
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
//const index = require('./routes/index');
//app.use('/', index);

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send(err.message);
//   });

app.get("/flavor", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    // const ztest = await majikes();
    // console.log(ztest);
    return res.json({ message: await majikes() });
  } catch (err) {
    res.status(400).json(err);
  }
});


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