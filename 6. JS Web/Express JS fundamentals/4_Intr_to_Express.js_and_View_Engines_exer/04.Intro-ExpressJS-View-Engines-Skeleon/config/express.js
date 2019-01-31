const express = require('express');     
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
//тук се дефинира всякакъв вид thirdparty middleware 
module.exports = app => {
    app.engine('.hbs', handlebars({
        defaultLayout: 'main',      //тук сме оказали реално в кой таг И файл ще пълним съдържанието. Това е темплейта. Създавам папка layouts и в нея файл main.hbs, в който ще сложа повтарящите се неща и трия всичко от main tag-a
        extname: '.hbs'
    }));
    //от index.html пък трием това, което е в темплейта по-горе и оставаме само main съдържанието в случая (без tag-a main)
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('view engine', '.hbs');
    app.use(express.static('./static'));
};