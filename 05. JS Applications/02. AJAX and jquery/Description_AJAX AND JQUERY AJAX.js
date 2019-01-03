заявките са:
get
post
put
options
delete;

//////////////

//handle-ване на ресурс пратен от сървъра

function load() {                                               //това е стария метод
    let req=new XMLHttpRequest();

    req.onreadystatechange=()=> {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("id").textContent = this.responseText;
        }
    }
    req.open("GET","https://url-a–който искаме да GET-нем",true);
    req.send();
}

//след 2014-та се ползва това:
let xhr=new XMLHttpRequest();
xhr.open('GET','myserv ice/рекуеста в общи линии');
xhr.onload = ()=>{
    //каквото искаме да се случи
}
xhr.send();

/////////////

//jquery and ajax

jQuery.ajax()                                               //това е метода, който позволява асинхронни заявки

jQuery.ajaxPrefilter()                                      //промяна на настройките на ajax();

jQuery.get()                                                //зарежда ресурси посредством HTTP GET request

jQuery.getJSON()                                            //зарежда JSON тип ресурс от сървъра

jQuery.getScript()                                          //зарежда JS файл от сървъра

jQuery.post()                                               //

.load()                                                     //зарежда ресур от сървъра като HTML

/////////

//основни заявки за GET


//ВАРИАНТ 1
function ajaxCall() {
    $.ajax({
        url,
        success:display,
        error:throwError
    });
    function display(something) {

    }
    function throwError(err) {

    }
};

//ВАРИАНТ 2

function someFun() {
    $.get(someServiceUrl + '.json')
        .then(displayContent)
        . catch(displayError);
}

////////

//POST

$.ajax({
    method: "POST",
    url: BASE_URL + '.json',
    data: JSON.stringify({name, phone})                             //в този случай key ще е name и person, а value стойността им
    //или data: JSON.stringify({"first":person, "second":phone})  -- в този случай аз си конкретизирам име на key
}).then(function () {
    PERSON.val("")
    PHONE.val("")
}).catch(handleError);

//DELETE
$.ajax({
    method: "DELETE",
    url: BASE_URL + "/" + id + ".json"
}).then(function () {
    li.remove()
}).catch(handleError)