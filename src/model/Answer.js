const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
    }
}, { 
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;