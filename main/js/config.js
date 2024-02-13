const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/database');

connect.then(()=>{
    console.log("database connected!");
}).catch(()=>{
    console.log("connection failed");
})

//database Schema

const loginSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true
    },
    email: {
        type:String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

const collections = new mongoose.model("Collection1",loginSchema);

module.exports=collections;