var express = require('express');
var router = express.Router();
const AsignaturasControllers = require('../controllers/AsignaturaControllers')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("Bienvenido a la Mochila");
});

module.exports = router;
