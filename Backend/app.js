var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");
var cors = require('cors');

//var auth = require("./auth/main_auth")

var productosRouter = require('./routes/productos.router');
var usuariosRouter = require('./routes/usuario.router');
var tiendasRouter = require('./routes/tiendas.router');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Mongo connection
database.mongoConnect();

app.use('/usuarios', usuariosRouter);
//app.use(auth)

//Router
app.use('/registro_productos', productosRouter);
app.use('/productos', productosRouter);
app.use('/tiendas', tiendasRouter);

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

module.exports = app;
