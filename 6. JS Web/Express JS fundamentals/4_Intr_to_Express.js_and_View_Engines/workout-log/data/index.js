const mongoose = require('mongoose');
//export-ваме функция, с която после в index.js файла като я извикаме ще се вържем директно към базата
module.exports = function initData(){
    mongoose.connect('mongodb://admin:a000000@ds163054.mlab.com:63054/expressjs-course')
}