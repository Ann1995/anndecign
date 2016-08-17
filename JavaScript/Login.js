$(document).ready(function () {

    $("#submit").on("click", login);
});

function login() {

    var email = $("#email").val();
    var password = $("#password").val();

    var loginModel = {
        email: email,
        password: password
    };
    var submit = document.getElementById("submit");
    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";
    $.ajax({

        url: 'info/api/Login',
        type: "POST",
        data: loginModel,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (data) {
            // data - информация, переданная обратно в теле ответа
            // textStatus - статус операции
            // xhr - обьект XMLHttpRequest
            $.cookie("annDesign", data, { expires: 1 }); //Добавили пользователю куки!)
            window.location.replace("index.html");
            
        },
        error: function (data) {

            $("#errorMessage").html(data.responseText);
            $("#errorMessage").css("color", "red");
            //document.getElementById("spinner").style.visibility = "hidden";
        }

    });

}