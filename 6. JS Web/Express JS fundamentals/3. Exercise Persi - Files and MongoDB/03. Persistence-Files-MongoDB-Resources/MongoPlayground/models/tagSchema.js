const mongoose = require("mongoose");

const tagShema = new mongoose.Schema({
    name: {type:mongoose.SchemaTypes.String},
    creationDate:{type:mongoose.SchemaTypes.Date, required: true, default: Date.now},
    images:[{type:mongoose.SchemaTypes.ObjectId, ref:"Image"}]
});

module.exports=mongoose.model("Tag", tagShema);