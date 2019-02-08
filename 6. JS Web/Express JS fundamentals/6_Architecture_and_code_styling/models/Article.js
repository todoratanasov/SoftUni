const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    title: {type: String, required:true},
    content: {type: String, required: true},
    date:{type: String},
    author: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});

const article = mongoose.model('Article', articleSchema);
module.exports = article;