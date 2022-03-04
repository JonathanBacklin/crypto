const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 mongoose.connect('mongodb://127.0.0.1/crypto-project', {
    useUnifiedTopology: true, useNewUrlParser: true
 });

// const url = "mongodb+srv://JonathanBacklin:ratweet131@todo.bpvkz.mongodb.net/test";
// const connectionParams={
//  useNewUrlParser: true,
// //  useCreateIndex: true,
//  useUnifiedTopology: true
// }
// mongoose.connect(url,connectionParams)
//  .then( () => {
//  console.log('Connected to database ')
//  })
//  .catch( (err) => {
//  console.error(`Error connecting to the database. \n${err}`);
//  })

const todoSchema = new Schema({
    Watchlist: String
})

const Watchlist = mongoose.model('Watchlist', todoSchema);


module.exports = {
    Watchlist: Watchlist
}