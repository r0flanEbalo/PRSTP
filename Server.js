var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  var html = `<html><head>omegalul</head>
<body>

  <p>Начало...</p>
  <script>
    alert( 'Самый русский текст' );
  </script>

  <p>...Конец</p>

</body>

</html>`
  res.end(html);
  console.log("I have done that")
}).listen(8080)