//Работа с Express.js

//app.js файла е всичко набито в едно.

//mvc.js файла е с извадени настрани файлове




//1. Инсталиране на Express.js:

//В директорията, в която се намира package.json файла си пишем в терминала - npm install --save express също така и express-handlebars (за view engine);

//за учебна цел ползваме нещо като kinvey база в mlab. Имам регистрация и user-а е adnim, а паролата е a000000

//с 3Т студио мога посредством конект стринговете в тази база да се конектна към нея

//url-ds163054.mlab.com   port - 63054, authentication - това, което завършва на SHA-1 пишем паролата, юзъра и се конектваме през 3Т.

//за да се конекнем през драйвъра на mongoose в отделен файлс си копираме другия url и го пшем така:

const mongoose = require('mongoose');

module.exports = function initData(){
    mongoose.connect('mongodb://admin:a000000@ds163054.mlab.com:63054/expressjs-course')
}


//////////////tip///////////////
//const {Schema, model} = require('mongoose');
//това горе е деструкториране и е равно на:
//const mongoose = require('mongoose');
//const Schema=mongoose.Schema;
//един вид, за да не пишем навсякъде mongoose.Schema (което е метод на mongoose);
//////////// /tip /////////////////


/////////////tip//////////////
//когато стартираме сървъра да го стартираме с: nodemon index, а не с node защото по-този начин когато правим промени в js кода на касаещите js файлове само ще следи за ctrl.+s и ще рестартира сървъра
//преди това трябва да бъде инсталиран глобално (веднъж) с npm install nodemon -g
//дебъгването е по същия начин - nodemon --inspect-brk
//////////// /tip /////////////////

//2. Вдигане на APP с express:

const express = require('express');
const app = express();
const port= 3000

app.get('/', (req, res)=>{              //по този начин слуша за '/' заявка и рендерира res.send()
    res.status(200)
    res.send('Hello world');
})
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
});

//ROUTING

//post заявка:

app.post('/workoutlog', ()=>{

});

//символи в пътя, които го правят динамичен:

app.get("*",(req,res)=>{    //хваща всеки get рекуест към сървъра

});

app.get('/ab*cd',(req,res)=>{   //rout, който започва с ab има нещо по средата и завършва с cd

});

//параметри в пътищата

app.get('/users/:userId',(req,res)=>{   
    let paramsObj = req.params;
    res.send(paramsObj)
})


//3. Използване на статични файлове (връщане на файлове)
//всичко с app.use е middleware и се изпълнява при всяка заявка
app.use(express.static("./public/"))//по този начин казваме на app-a, че всичко в public папката (или която си искаме, но така е по конвенция) е статичен файл 

app.use("/static",express.static('./public/'))//по този начин пък казваме, че когато пътя е /static само за тях пък търси статични файлове в друга папка (в случая е същата, за да не създавам нова папка)

//!!! реално пътят казва на app-а какво да ни върне примерно: local.../snimka.jpg ще отиде да я търси точно тази снимка в указаната папка, че има статични файлове

//body-parser - 
const bodyParser = require('body-parser'); //така взимаме нещо, което ще ни позволи да вземем body-то на един request и да си го ползваме като обект;

app.use(bodyParser.urlencoded({extended:true})); //ако засече, че request-a има body ще го закачи към речуеста и ще си го ползваме с KVP и тогава req.body ще ни връща като обект body-то


//4. View engine - Handlebars. Инсталира се с npm install --save express-handlebars и трябва да се сетъпне, за да може експрес да го ползва!!!