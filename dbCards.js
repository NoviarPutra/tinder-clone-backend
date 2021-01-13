const mongoose = require("mongoose");

const connection_url =
  "mongodb+srv://admin:VyctRE4HHPmVGfAj@cluster0.p5vdo.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

const Cards = mongoose.model("cards", cardSchema);

module.exports = Cards;

// export default mongoose.model("cards", cardSchema);
