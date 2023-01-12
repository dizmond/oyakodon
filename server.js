//arigato aniki
import express from 'express'
import { cheriberri, comprehensiveapi} from './pkm.js';

const app = express();
const port = process.env.PORT || 5000;


const router = express.Router(); //prob navigates between pages?



//gets berry data, mostly for debugging!
//this is OUTDATED because we can filter the contents of the promise
//from inside the function that returns the promise - pretty cool!
app.get("/cheri", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*");


    const berrynum = await cheriberri().then(function (val) {
      //console.log(val['natural_gift_power']);
      return val['natural_gift_power']
    });
    return res.json({ message: berrynum });


  } catch (err) {
    res.status(400).json(err);
  }
});

//gets flavor text, important for proof-of-concept and reference!
app.get("/comprehensiveapi/:pkmname", async (req, res) => {
  try {

    res.header("Access-Control-Allow-Origin", "*"); //lowkey idk what this does lol
    const theName = req.params.pkmname;
    const [flavtxt, id, species, types, color, imageurl] = await comprehensiveapi(theName).then(function (val) {
      return val;
    });

    return res.json({ message: flavtxt, num: id, name: species, types: types, color: color, imageurl: imageurl });

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