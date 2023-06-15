const uri = "mongodb://127.0.0.1:27017";
const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const cors = require('cors')
const dokterroute = require('./router/doterrouter')


app.use(cors())
app.use(express.json())

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const connect = async () => {
    try {
        mongoose.connect(uri);
        console.log('Connected to mongoDB!')
    } catch (error) {
        throw error
    } 
}



mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB disconnected!')
});
app.use('/api',dokterroute)
app.listen(PORT, () => {
    connect()
    console.log(`Server is running on port ${PORT}`);
  });