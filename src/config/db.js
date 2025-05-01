const mongoose = require('mongoose');
const {URL} = require('./Server');


const connect = async()=>{
    await mongoose.connect(URL);
}

module.exports = connect;