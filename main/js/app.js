//express server

const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/database')
const db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post('/register',(req,res)=>{

    const username = req.body.username
    const email= req.body.email
    const password= req.body.password
    const name=req.body.name
    const role= req.body.role

    const data = {
        "username": username,
        "email" : email,
        "password" : password,
        "name": name,
        "role" : role
    }

})

app.get('/', (req,res)=>{
    res.send('server connection successful')
}).listen(5500);

console.log("listening on port");

