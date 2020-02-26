const mongoose = require('mongoose')

const Schema = mongoose.Schema


const SetSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    isWeighted: Boolean,
    usesDistance: Boolean,
    distanceUnit: String,
    exUnitStr: String,
})


module.exports = SetSchema
