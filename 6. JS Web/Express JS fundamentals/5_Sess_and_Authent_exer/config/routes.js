const restrictedPages = require('./auth'); //това е написан middleware, който има за цел да не позволява, ако сме логнати да можем отново да логваме или регистрираме потребители. Описан е в ./auth
const router = require('express').Router();//по този начин може да си ползвам router-а както в първото приложение
const homeController = require('../controllers/home');
const userController=require('../controllers/user');
const carController = require('../controllers/car');

module.exports = app => {
    app.get('/', homeController.index);
    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);//посредата можем да си дефинираме колкото си искаме middleware, който в случая с restrictedPages.isAnonymous проверява дали в момента сме логнати (дали сме получили кукито и токена). Можем да си напишем сами middleware, който да проверява дали сме admin, student, user и пр. В общи линии всичко, което ще се филтрира през тази функция
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);
    app.get('/user/login',restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginPost);
    app.post('/user/logout', userController.logout)//интересен начин има на logout, който е описан в <a href="javascript:document.getElementById('logout-form').submit()"></a> бутона директно!!!
    app.get('/user/rents', restrictedPages.isAuthed, userController.myRents);
    app.get('/car/add', restrictedPages.hasRole('Admin'), carController.addGet); //тук пускам да провери дали е администратор и ако е да продължи към изпълнението на carController.addGet или самия middleware ще редиректне.
    app.post('/car/add', restrictedPages.hasRole('Admin'), carController.addPost);
    app.get('/car/all', carController.allCars);
    app.get('/car/rent/:id', restrictedPages.isAuthed, carController.rentGet);
    app.post('/car/rent/:id', restrictedPages.isAuthed, carController.rentPost)
    app.get('/car/edit/:id', restrictedPages.hasRole('Admin'), carController.editGet);
    app.post('/car/edit/:id', restrictedPages.hasRole('Admin'), carController.editPost);

    app.all('*', (req, res) => {//това тук е ако се напише какъвто и да е грешен път (различен от тези горе) да се изпълнява това долу. Може и ние сами да си напишем някаква страница за 404
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};