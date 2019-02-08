const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const articleController = require('../controllers/article');
const pageRestrictions = require('../config/auth');

module.exports = (app) => {
    app.get('/', homeController.index);
    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);

    app.get('/user/logout', userController.logout);
    //TODO Add other app routes and restrict certain pages using auth.js

    app.get('/article/create', pageRestrictions.isAuthed, articleController.articleGet);
    app.post('/article/create', articleController.articlePost);
    app.get('/article/details/:id', articleController.articleDetailsGet);
    app.get('/article/edit/:id', articleController.articleEditGet);
    app.post('/article/edit/:id', articleController.articleEditPost)
    app.get('/article/delete/:id', articleController.articleDeleteGet);
    app.post('/article/delete/:id', articleController.articleDeletePost);
};

