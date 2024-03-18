//require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');
//const cors= require('cors');
const getMongoUri = require('./configs/dbConfig');
const mongoose=require('mongoose');
//dotenv.config();
const routes=require('./routes/todoRoutes');
const cors=require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/todo',routes);

const port = process.env.PORT;

mongoose.connect(getMongoUri(),{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>console.log('Connected to the mongodb successful')).
catch((err)=>console.log('Error connecting to the mongodb',err));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


// # This is on the backup branch.I will simply try to commit what is there on the backup bracnh to to the main branch
// # lets see what happens.if it is successful then I am also successful.Thank you