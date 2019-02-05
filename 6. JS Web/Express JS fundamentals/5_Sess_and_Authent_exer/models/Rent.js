const{Schema, model} = require('mongoose');

const rentSchema = new Schema({
    days: {type: Number, required: true},
    car: {type: Schema.Types.ObjectId, ref: 'Car', required: true},//По този начин казваме тук към кой model ще има рефренции
    user: {type: Schema.Types.ObjectId, ref: 'User', required:true}// по този начин казваме, че ще реферира към user model-а
});

const Rent = model('Rent', rentSchema);

module.exports = Rent;