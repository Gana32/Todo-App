//require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');
//const cors= require('cors');
const getMongoUri = require('./configs/dbConfig');
const mongoose=require('mongoose');
//dotenv.config();
const routes=require('./routes/todoRoutes')

const app = express();
app.use(bodyParser.json());
//app.use(cors());
app.use('/todo',routes);

const port = process.env.PORT;

mongoose.connect(getMongoUri(),{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>console.log('Connected to the mongodb successful')).
catch((err)=>console.log('Error connecting to the mongodb',err));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})