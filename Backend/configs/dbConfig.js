require('dotenv').config();

const getMongoUri=()=>{
    return process.env.MONGODB_URI;
}

module.exports=getMongoUri;