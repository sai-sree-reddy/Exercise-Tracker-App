const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');


require('dotenv').config();

const app=express();
const port=process.env.PORT || 8080;


app.use(cors());
app.use(express.json());


const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection is established successfully");
})




const exercisesRouter = require('./routes/exercises');
const usersRouter=require('./routes/users');


app.use('/exercises' , exercisesRouter);
app.use('/users', usersRouter);




app.listen(port,()=> {
    console.log('Server is runnning on port: ${port}');
})