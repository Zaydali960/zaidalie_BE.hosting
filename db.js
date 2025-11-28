const mongoose = require('mongoose')

const URI = 'mongodb+srv://portfolio:OctwB3UdWuk3r4bm@cluster0.kmtbyot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set("strictQuery", false);
const connectToMongo = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongo