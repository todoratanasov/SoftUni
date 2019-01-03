$(document).ready(function () {
    const kinveyAppId = "kid_rk3Pn76AX"; //това го взимаме от url-а в dashboard на браузъра
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId; //url-а си е стандартен за kinvey
    const kinveyUsername = "peter";         //user-a го създадох ръчно
    const kinveyPassword = "0";             //паролата е създадена ръчно
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword); //паролата и user-а(който има право да прави съответната
                                                                    // операция се пишат така в този формат
    const authHeaders = { "Authorization": "Basic " + base64auth }; //това всъщност е хедър

    $("#btnLoadPosts").click(loadPostsClicked);

    function loadPostsClicked() {
        $.ajax(
            {
                method: "GET",
                url: serviceUrl + "/posts",         // след основния url пишем номера на app-а ни и пишем фолдърите
                headers: authHeaders,
            }
        ).then(loadDisplayPosts)                    //функция, която искаме да направи нещо с данните, които ще получим
            .catch(displayError)                    //функцията, с която искаме да направим нещо с error-a
    }
})