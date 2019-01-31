//const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const model = mongoose.model;


const cubeSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    description:{type: mongoose.Schema.Types.String, required: true},
    image:{type: mongoose.Schema.Types.String, required: true},
    difficulty: {type: mongoose.Schema.Types.Number, required: true}
});

cubeSchema.path('name')
    .validate(function(){
        return this.name.length >= 3 && this.name.length <=15
}, 'Name must be between 3 and 15 symbols!');
cubeSchema.path('description')
    .validate(function(){
        return this.description.length >= 20 && this.name.length <=300
}, 'Description must be between 20 and 300 symbols!');
// cubeSchema.path('image')
//     .validate(function(){
//         return this.image.startsWith('http')&&(this.image.endWith('.jpg')||this.image.endsWith('.png'))
// }, 'Image must starts with http and ends with .jpg or .png');

module.exports = mongoose.model('cube', cubeSchema);