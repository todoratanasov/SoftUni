const express = require('express');
const app = express();
const handlebars = require('express-handlebars')//казваме, че ще работим с view engine Handlebars
const initData=require('./data'); //взимаме си функцията, която ни дава връзката с базата
const bodyParser = require('body-parser'); //така взимаме нещо, което ще ни позволи да вземем body-то на един request и да си го ползваме като обект
const workoutLogRouter = require('./data/routes/workout-log-route') //тук си взимаме реално държавния обект express.Router(), но със закачени към него rout-овете ни!!!! 
const port= 3000

initData();//извикваме си връзката към базата

//
app.engine('.hbs', handlebars({ //по този начин след като сме инсталирани express-handlebars казваме на app-а express какъв view engine ще ползва и какъв тип файлове всъщност И избираме handlebars, който вече горе сме require-нали
    extname:'.hbs'
}));
app.set('view engine','.hbs');
app.set('views','./views/'); //така му казваме в коя папка ще търси view-тата
//

//app.use се задават middleware-ите и се изпълняват при всяка заявка

app.use(express.static("./public/"))//по този начин казваме на app-a, че всичко в public папката (или която си искаме, но така е по конвенция) е статичен файл. Ще потърси от тук index.html за '/' пътя когато е get

app.use("/static",express.static('./public/'))//по този начин пък казваме, че когато пътя е /static само за тях пък търси статични файлове в друга папка (в случая е същата, за да не създавам нова папка)

app.use(bodyParser.urlencoded({extended:true})); //ако засече, че request-a има body ще го закачи към речуеста и ще си го ползваме с KVP и тогава req.body ще ни връща като обект body-то. ВАЖНО е да се слага това преди там където ще се ползва (в този случай това отдолу)

app.use('/workoutlog',workoutLogRouter);    //по този начин казваме, че app ще ползва като prefix на rout-овете  /workoutlog и след това всичко в workoutLogRouter, което реално е всичко във файла ./routes/workout-log-route.js


app.get('/', (req, res)=>{              //по този начин слуша за '/' заявка и рендерира res.send() като ЗАДЪЛЖИТЕЛНО req и res са в този ред!!!!
//принципно си взима в папка public щом съм я обявил за express.static по-горе index.html-а и го рендерира прескачайки това
    console.log(req.body)       //заради app.use(bodyParser.urlencoded({extended:true})) по-горе ще ни върне директно Body-то на рекуеста като обект. И ако в него има някакъв model направо си го ползваме
    res.status(200)
    res.send('Hello world');
});



app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})