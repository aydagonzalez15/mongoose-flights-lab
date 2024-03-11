const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum:  ['American', 'Southwest', 'United', 'Delta', 'Jetblue'],

    },
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: { 
        type: Number,
        required: true,
        min: 10,
        max: 9999,

    },
    departs: {
        type: Date,
        default: function() {
            const yearFromCurrDate = new Date();
            yearFromCurrDate.setFullYear(yearFromCurrDate.getFullYear() + 1);
            return yearFromCurrDate
        },
    }
}, {
    timestamps: true
  })


module.exports = mongoose.model('Flight', flightSchema)