const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const ConnectDB = async()=>{
    try{
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("Mongodb Connnect Successfully")})
    }catch(error){
        console.log("Faild to load ")
    }

}
module.exports = ConnectDB