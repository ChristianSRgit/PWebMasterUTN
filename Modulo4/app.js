var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var serviciosRouter = require('./routes/servicios');
var contactoRouter = require('./routes/contacto');
var faqRouter = require('./routes/faq');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/servicios',serviciosRouter);
app.use('/contactoRouter',contactoRouter);
app.use('/faq',faqRouter);

app.get('/prueba', function(req,res){
  res.send('soy la pag de PRUEBA')
})

app.get('/servicios', function(req,res){
  res.render('servicios');
})

app.get('/faq', function(req,res){
  res.render('faq');
})

app.get('/contacto', function(req,res){
  res.render('contacto');
})

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
