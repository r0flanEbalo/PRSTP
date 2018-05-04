var express = require('express');
var router = express.Router();
/*var app = require('express')(),
    bodyParser = require('body-parser');
*/

router.get('/', function(req, res, next) {
    res.render('playerspage');
});

module.exports=router;
    /*
    app.use('/Playerspage', bodyParser.urlencoded({
        extended: true
    }));

    function countPlayers() {
        var num = document.startform.numberofplayers.value;
        for (var i = 0; i === num; i++) {
            form = form + `<p>Имя игрока ` + (i + 1) + `: <input name=name type=text maxlength="50" pattern="[\\sа-яА-ЯёЁ]+" required title="Допустимы только кириллица и пробелы."></p>`
            document.getElementById("numofpl").innerHTML = form;
            res.render(form);
        }
    }
    countPlayers();
})
*/
    //TODO: Переделать страницу с вводом имен

