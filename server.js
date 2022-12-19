//arigato aniki
import express from 'express'
import { majikes } from './pkm.js';

const app = express();
const port = process.env.PORT || 5000;


const router = express.Router();

//const index = require('./routes/index');
//app.use('/', index);

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send(err.message);
//   });



app.get("/flavor", (req, res) => {
    const ztest = majikes();
    console.log(ztest);
    res.json({message: ztest});
  });



app.get("/api", (req, res) => {
    //res.status(200).send("200 OK")
    res.json({ message: "Hello from server!" });
    
  });


app.listen(port, () => {
    console.log(`bruhmachine listening on port num ${port}`);
  });