const express = require('express');
const connect = require('./config/db');
const {PORT} = require('./config/Server');
const server = async()=>{

    const app = express();


    app.listen(PORT,async()=>{
        console.log("Server Started");
        await connect();
        console.log('Mongo Connect');
    })

}

server();