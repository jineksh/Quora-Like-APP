const express = require('express');
const bodyparser = require('body-parser');
const Apiroutes = require('./routes/index');
const connect = require('./config/db');
const {PORT} = require('./config/Server');
const server = async()=>{

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);
    app.listen(PORT,async()=>{
        console.log("Server Started");
        await connect();
        console.log('Mongo Connect');
    })

}

server();