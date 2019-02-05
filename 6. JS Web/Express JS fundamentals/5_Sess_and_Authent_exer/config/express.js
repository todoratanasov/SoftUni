const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = app => {
    
    app.engine('.hbs', handlebars({
        defaultLayout: 'main',
        extname: '.hbs'
    }));

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
        secret: '123456',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => { //това ние си го пишем и то вкарва в locals - user пропъртито, на което закачме данните на потребителя, за да можем после да ги ползваме от обекта user (в случая, за да можем да го подаваме на html-a,  за да го изписва отгоре)
        if (req.user) {
            res.locals.user = req.user;
        }
        next();
    });

    app.use((req, res, next) => {//същото като горното
        if (req.user) {
            res.locals.isAdmin = req.user.roles.indexOf('Admin') !== -1;
        }
        next();
    });

    app.set('view engine', '.hbs');

    app.use(express.static('./static'));
};