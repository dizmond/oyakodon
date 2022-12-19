//arigato aniki
import express from 'express'
import { asynccall, zasynccall, xasynccall, pillow } from './pkm.js';

const app = express();
const port = process.env.PORT || 5000;


const router = express.Router();

//const index = require('./routes/index');
//app.use('/', index);

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send(err.message);
//   });

//app.get("/pkm_name")

// React.useEffect(() => {
//     fetch("/flavor")
//       .then((res) => res.json())
//       .then((zdata) => zsetData(zdata.message));
//   }, []);

app.get("/flavor", (req, res) => {
    var ztest = pillow()
    //ztest = zasynccall()
    res.json({ message: ztest});
    res.status(200).send("200 OK")
  });


app.get("/gt", (req, res) => {
    res.json({ message: "Hello from server!" });
    res.status(200).send("200 OK")
  });


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
    res.status(200).send("200 OK")
  });


app.listen(port, () => {
    console.log(`bruhmachine listening on port num ${port}`);
  });