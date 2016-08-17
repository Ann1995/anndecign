$(document).ready(function () {

    $("#confirmButton").on("click", PostWithUser);
});


function PostWithUser() {

    var name = $("#first_name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password_confirmation = $("#password_confirmation").val();

    var userViewModel =
    {
        "name": name,
        "email": email,
        "password": password,
        "ConfirmPassword": password_confirmation
    };

    $.ajax({

        url: 'info/api/Register',
        type: "POST",
        data: userViewModel,
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",
        success: function (data) {
            // data - информация, переданная обратно в теле ответа
            // textStatus - статус операции
            // xhr - обьект XMLHttpRequest
            $.cookie("annDesign", data, { expires: 1 }); //Добавили пользователю куки!)
            window.location.replace("goodregister.html");
            massageSend();
        },
        error: function (data) {

            $("#errorMessage").html(data.responseText);
            $("#errorMessage").css("color", "red");
        }
    });
    function massageSend() {
        var userEmail =
        {
            "name": name,
            "email": email,
            "text": "Уважаемый " + name + "!!!" + "Вы успешно зарегистрированлись на нашем сайте. С этого момента, у вас есть преимущество - вы будете в курсе всех наших событий и станите частичкой нашего мира."

        };
        $.ajax({

            url: 'info/api/Email',
            type: "POST",
            data: userEmail,
            dataType: "json",
            error: function (data) {
                alert(data);
            }
        });
    };
};

// url: 'info/api/Email',  имя   текст  адрес  




