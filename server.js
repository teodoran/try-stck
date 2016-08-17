var express = require('express');
var app = express();
var port = process.env.PORT || 1704;

app.use(express.static('./'));

app.listen(port, function () {
    console.log('Server running on http://localhost:' + port + '/');
});