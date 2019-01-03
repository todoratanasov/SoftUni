//Mustache

//Използване:
//сваля се файл mustache.js, който се сваля от github на mustache като се взима кода с копи пейст и се добавя в отделен <script>
//в html добавяме:

<script id="template" type="x-tmpl-mustache">                   //създаваме си template
    <p>Use the <strong>{{power}}</strong>, {{name}}!</p>
</script>;

let template = document.getElementById("template").innerHTML;   //така ще вземем елемента, който е в script файла

Mustache.parse(template);                                       //parse-ва ме това, което сме взели като темплейт
let rendered = Mustache.render(template, {name:"Luke",power:"force"});  //наливаме си данните от обект

document.getElementById("target").innerHTML = rendered;         //казваме къде го искаме



//използване с jquery:

<script id="jq-template" type="text/xtemplate">                   //създаваме си template
    <li>
    Name: <span data-content="name"></span>, Age: <span data-content="age"></span>
    </li>
</script>;

$(function () {
    const template = $('#')
});

//handlebars:
//използване през cdn
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>
//teplate:

<script type="text/x-handlebars-template" id="something">
<div class="entry">
    <h1>{{ title }}</h1>
    <div class="body">
    {{ body }}
    </div>
</div>
</script>

//template в отделен файл:
//създаваме си файла с разширение template.hbs
//в .js файла където ни е логиката, за да си вземем темплейта правим:

async function render(){                            //правиме го асинхр. защото искаме да изчакаме да зареди
let source=await $.get('template.hbs')              //source-то първо
};


//ползване:

$(function () {

let source = $("#something").html();                    //по този начин си взимаме темплейта
let template = Handlebars.compile(source)               //по този начин компилираме за използване с handlebar
                                                        //като template е функция, на която подаваме параметри

let context = {
    title:"this is the title",
    body:"this is the body"
};
let html=template(context)                              //така подаваме на функцията параметрите като обект и резултата
                                                        //е html-a, който можем да append-ваме където си поискаме
//или директно:

$("#container").html(template(context));                //и ще влезне в #container

})

//for-loops

let contacts = {
    data: [
        {name:"ivan ivanov",email:"ivan@abv.bg"},{name:"todor atanasov",email:"to@abv.bg"}
    ]};

<script type="text/x-handlebars-template" id="somethingElse">
    {{#each data}}                                  //#each е отварящ таг. Подаваме КЛЮЧА на масива (в случая data)
    <li>{{name}}: {{email}}</li>
    {{/each}}                                           // each е затварящ таг и всичко между тях ще се извърти
</script>;

//if/else:

        {{#if sunny}}                                   //sunny е true или false
        The sky is clear
        {{else}}
        The sky is overcast
        {{/if}};

//Partials:

let source=$("#contact-template").html();                        //влизмаме си темплейта
Handlebars.registerPartial('contact', $("#template"));          //подаваме името contacts и стойността му (от template)

            let contacts = {
                data: [
                    {name:"ivan ivanov",email:"ivan@abv.bg"},{name:"todor atanasov",email:"to@abv.bg"}
                ]};

        <script type="text/x-handlebars-template" id="somethingElse">
                {{#each data}}                                  //#each е отварящ таг. Подаваме КЛЮЧА на масива (в случая data)
        {{> contact}}                                           //подаваме partial-а и стават template в template
            {{/each}}                                           // each е затварящ таг и всичко между тях ще се извърти
            </script>;

//ако искаме да не се escape-ва инфото, което попада в template-а слагаме {{{html}}} три къдрави скоби

