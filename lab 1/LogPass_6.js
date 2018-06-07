
var login = prompt("Назови себя");

if(login === null){
    alert("Вход отменен");
}else{
    if(login === "Админ"){
        var pass = prompt("Пароль");
        if(pass === null){
            alert("Вход отменен");
        }else {
            if(pass === "Чёрный Властелин"){
                alert("Welcome!");
            }else{
                alert("Неверный пароль");
            }
        }
    }else {
        alert("Не знаю такого");
    }
}
