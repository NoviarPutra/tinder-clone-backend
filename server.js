const express = require("express");
const Cors = require("cors");
const Cards = require("./dbCards.js");
// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/tinder/cards", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status("500").send(err);
    } else {
      res.status("201").send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status("500").send(err);
    } else {
      res.status("200").send(data);
    }
  });
});
// Listener
app.listen(port, () => {
  console.log(`listening on localhost : https://localhost/${port}`);
});
