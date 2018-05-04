var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var playerspageRouter = require('./routes/playerspage');

var app = express();
/*
var app = require('express')(),
    bodyParser = require('body-parser');
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/playerspage', playerspageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Обратите внимание на используемый путь. Именно он задается в атрибуте action формы
/*app.use('/Playerspage', bodyParser.urlencoded({
    extended: true
}));
*/

/*app.post('/Playerspage', function(req, res, next) {
    // Объект req.body содержит данные из переданной формы
    function countPlayers(){
        var num = document.startform.numberofplayers.value;
        for(var i = 0;i===num; i++){
            form = form + `<p>Имя игрока ` + (i+1) + `: <input name=name type=text maxlength="50" pattern="[\\sа-яА-ЯёЁ]+" required title="Допустимы только кириллица и пробелы."></p>`
            document.getElementById("numofpl").innerHTML = form;
            res = renderHTML(form,responce);
        }
    }
    console.dir(req.body);
});
*/

module.exports = app;
