// modules =================================================
var express         = require('express');
var fs              = require('fs');
var app             = express();

// configuration ===========================================
	
// config files
app.set('port', (process.env.PORT || 3000)); // set our port

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users


// views is directory for all template files
app.set('views', __dirname + '/public');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('main');
});



// start app ===============================================
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

exports = module.exports = app;                         // expose app