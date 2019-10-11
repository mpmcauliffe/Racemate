const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const excerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    exerciseType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    notes: {
        type: String,
    },
    sets: [{
        type: Schema.Types.ObjectId,
        ref: 'Set',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})


module.exports = mongoose.model('Excerice', excerciseSchema);
