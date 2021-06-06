var express = require('express');
var router = express.Router();
const AsignaturasControllers = require('../controllers/AsignaturaControllers')

/* GET home page. */
router.get('/', AsignaturasControllers.index);
router.get('/crear', AsignaturasControllers.crear);
router.post("/", AsignaturasControllers.guardar);
router.post('/eliminar/:materia', AsignaturasControllers.eliminar);

module.exports = router;