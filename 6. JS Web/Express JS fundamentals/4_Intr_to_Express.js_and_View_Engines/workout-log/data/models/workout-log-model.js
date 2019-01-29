const {Schema, model} = require('mongoose');
//това горе е деструкториране и е равно на:
//const mongoose = require('mongoose');
//const Schema=mongoose.Schema;
//един вид, за да не пишем навсякъде mongoose.Schema (което е метод на mongoose);

const workoutLogSchema = new Schema({
    name: String,
    date: Date,
    exercises:[
        {
            name: String,
            reps: Number,
            sets: Number
        }
    ]
});

module.exports = model('workoutLog', workoutLogSchema)