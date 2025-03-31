var express = require('express');
var router = express.Router();

// Існуючий маршрут
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Новий маршрут для cool-users
router.get('/cool', function(req, res, next) {
  res.render('cool-users', { title: 'Cool Users' });
});

module.exports = router;
