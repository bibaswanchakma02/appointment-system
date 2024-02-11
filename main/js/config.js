const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/database');

connect.then(()=>{
    console.log("database connected!");
}).catch(()=>{
    console.log("database connection failed");
})

//Schema

const loginSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})