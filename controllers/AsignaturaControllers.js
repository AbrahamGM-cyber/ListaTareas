var conexion= require('../config/conexion');
var asignatura = require('../model/Asignatura')
var borrar = require('fs')

module.exports= {

  index: function(req, res) {

    asignatura.obtener(conexion, function (err,datos){
       
      console.log(datos);

      res.render('Asignaturas/index', { title: 'Aplicacion con NODEJS', Asignaturas:datos });
    });
  },
  crear:function (req, res) {
    res.render('Asignaturas/crear')
  },
  guardar:function (req, res) {
    console.log(req.body);
    asignatura.insertar(conexion,req.body, function (err){  
     res.redirect('/Asignaturas');
    })
  },
  eliminar:function (req, res) {
    console.log("Recepcion de Datos")
    console.log(req.params.materia);

    asignatura.retomarDatosMATERIA(conexion, req.params.materia, function (err, registros){
      
    if(borrar.existsSync(req.params.materia)){
      borrar.unlinkSync(req.params.materia)
    }
   console.log(req.params.materia)
    });
    asignatura.eliminar(conexion, req.params.materia, function (err){  
     res.redirect('/Asignaturas');
    })
  }
  }

