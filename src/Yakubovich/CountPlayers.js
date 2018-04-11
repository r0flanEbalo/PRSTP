var app= require('./app');

function PlayersNum() {
    for(var i = 0;i===9; i++){
        form = form + `<p>Имя игрока ` + (i+1) + `: <input name=name type=text maxlength="50" pattern="[\\sа-яА-ЯёЁ]+" required title="Допустимы только кириллица и пробелы."></p>`
        document.getElementById("numofpl").innerHTML = form;
    }
}
renderHTML(form,responce);
