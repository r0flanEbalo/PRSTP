function countPlayers() {
    var numberofplayers =document.getElementById("startgame").numberofplayers;
    var form;

    for(var i = 0;i==numberofplayers; i++){
        form =`<p>Имя игрока ` +(i+1)+ `: <input name=name type=text maxlength="50" pattern="[\\sа-яА-ЯёЁ]+" required title="Допустимы только кириллица и пробелы."></p>`
    }
    document.getElementById("startgame").innerHTML = form;
    
}