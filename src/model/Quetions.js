const mongoose = require('mongoose');

const queSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true,
    },
    topics : [{
        type : mongoose.Schema.Types.ObjectId ,
        required : true,
        ref : 'Topics'
    }],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
},{ 
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Quetions = mongoose.model('Questions',queSchema);

module.exports = Quetions;
