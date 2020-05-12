const express = require('express');
const router = express.Router();

router.get('/json', function (req, res, next) {
    const data = {
        'text': 'hello there!',
        'name': 'hung',
        'location': 'san antonio'
    }
    res.json(data);
})
router.get('/html', function (req, res, next) {
    const html =
        `<html>
        <h1 style="color: red">This is an HTML response</h1>
        </html>`;
    res.send(html);
})
// get query
router.get('/query', function (req, res, next) {
    const query = req.query;
    console.log(query);
    res.json(query);
})
// get params passed in
router.get('/params/:name/:location/:occupation', function (req, res, next) {
    const params = req.params;
    res.json({
        'params': params
    });
})

/* GET home page. */
router.get('/', function (req, res, next) {
    const data = {
        name: 'Home',
        date: 'May 12, 2020'
    }
    res.render('index.hjs', data);

    // res.render('test', null)
});

module.exports = router;