// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;


const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
    res.send('This is the response!');
})
app.get('/json', function(req, res, next) {
    const data = {
        'text': 'hello there!',
        'name': 'hung',
        'location': 'san antonio'
    }
    res.json(data);
})
app.get('/html', function(req, res, next) {
    const html =
        `<html>
        <h1 style="color: red">This is an HTML response</h1>
        </html>`;
    res.send(html);
})
// get query
app.get('/query', function(req, res, next) {
    const query = req.query;
    console.log(query);
    res.json(query);
})
// get params passed in
app.get('/params/:name/:location/:occupation', function(req, res, next) {
    const params = req.params;
    res.json({
        'params': params
    });
})


app.listen(5000);
console.log('Server running on port 5000');

