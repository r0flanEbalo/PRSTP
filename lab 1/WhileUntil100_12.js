while(true){
    var a = prompt("Введите число большее 100");

    if(a === null){
        alert("Выход");
        break;
    }
    else if(a>100){
        alert("Верно");
        break;
    }else{
        alert("Неверно");
    }
}