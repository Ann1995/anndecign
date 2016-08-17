$(document).ready(function () {

    var cookieValue = $.cookie("annDesign"); // получили имя пользователя в переменную.

    if (cookieValue) {
        $("#unregistered").replaceWith( // заменили кусок разметки.
            '<ul class="nav navbar-nav navbar-right" id="registered"><li><a href="#">' +
            '<span class="glyphicon glyphicon-user"></span> Привет '+cookieValue+'!</a></li>' +
            '<li id="exit"><a href="#"><span class="glyphicon glyphicon-log-out"></span> Выйти</a></li>');

        $("#exit").on("click", logOut);
    }
});   

function logOut() {
    $.removeCookie("annDesign"); //  удалить куки.
    location.reload(); // перезагрузить страницу.
}