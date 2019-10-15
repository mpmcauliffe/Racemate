const mongoose = require('mongoose')

const Schema = mongoose.Schema


const SetSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    reps: [Number],
    weight: [Number],
    distance: Number,
    time: Number,
})


module.exports = SetSchema
