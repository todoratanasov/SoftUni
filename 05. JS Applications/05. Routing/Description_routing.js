//SammyJS:


//!!!!!!!!! всеки път когато ще се ползва sammy в папката на проекта се пише в терминала npm i --save sammy. Създава се
//папка в проекта

//!!в задача Tem Manager във файл app.js съм обяснил какво се случва

//включва се:
<script src:"...jquery..."
<script src:"node_modules/sammy/lib/sammy.js">;

//задължително това се пише в .js файла, който се стартира, за да може sammy да разбира от Handlebars и файловете
this.use('Handlebars', 'hbs');

const app=Sammy('#main',function () {               //така се инициализира #main е контейнера, в който ще се визуализира
    this.get('/index.html',()=>{                    //страницата. this е апликейшъна ми (Sammy)
        this.swap('index')                          //container-a е редно да е <section>
    })                                              //ВАЖНО! при иниц. да не се ползва arrow func
});
$(()=> app.run()); //по този начин се стартира

//пример:

this.route('get','#/about',function () {            //това ще замени url-а с в случая h2
    this.swap('<h2>Contact page</h2>');
});
//съкратен запис на горното:

this.get('#/catalog',loadBooks);                    //заявката, url и функцията, която връща нещо

this.post('#/login',userLogin);

this.put('#/catalog/:bookId',updateBook);

this.del('#/catalog/:bookId', deleteBook);

//пример: - файл example

//
this.get('#/catalog/:productId',(context)=>{        //context- дефакто е заявката и params са параметрите на заявката
    console.log(context.param.productId)
});

<form action="#/login" method="post">               //по този начин на формата задаваме адреса и метода

//ползване на sammy + handlebar plugin:

    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/x.y.z/handlebars.min.js"></script>
    <script src="node_modules/sammy/lib/plugins/sammy.handlebars.js"
    <script>;

//пример в example

//пример със заменяне с темплейти - файл greeter.hbs

//TIP!! в rout-a (отделен js файл, който да държи this.get('#/hello/:name',функция–име)) да присъства само
//самия rout, а всички функции в отделен js файл. Целия html да е в темплейт файлове

//partial templates в примера example в home

//redirect пример в about

//bind - в example

//plugins-и, които са ни useful в lib/plugins;

// 1. storage and session
// 2. OAuth2