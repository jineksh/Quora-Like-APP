const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
},{ 
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Topics = mongoose.model('Topics',topicSchema);

module.exports = Topics;
