const{Schema, model} = require('mongoose');

const CarSchema = new Schema({
    model: {type: String, required: true},
    imageUrl: {type: String, required: true},
    pricePerDay: {type: String, required: true},
    isRented:{type:Boolean, required: true, default: false} 
});

const Car = model('Car', CarSchema);
module.exports = Car;