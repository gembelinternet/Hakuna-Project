Config = require('./app/config/config');
Socketio = require('socket.io')({ path : '/bote' });
Helpers = {};

var fs = require('fs');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');
var async = require('async');
var pathinfo = require('locutus/php/filesystem/pathinfo');
var cookieParser = require('cookie-parser');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var moment_duration_format = require('moment-duration-format');
var logger = require('morgan');
var app = express();
var server = http.createServer(app);

async.waterfall([
	function load_helpers(callback) {
		var target = __dirname+'/app/helpers/';

		fs.readdirSync(target).filter(file => {
			return (file.slice(-3) === '.js');
		}).forEach(file => {
			Object.assign(Helpers, {[pathinfo(file).filename] : require(path.join(target, file))});
		});

		callback(null, callback);
	}

], (error, success) => {
	if (error) {
		console.log(error);
		process.exit(0);
	}
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin : (origin, callback) => { callback(null, true) }, credentials: true }));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

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

Socketio.sockets.setMaxListeners(0);
Socketio.listen(server.listen(process.env.PORT || Config.port));