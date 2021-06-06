 module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query('SELECT * FROM asignaturas', funcion)
  },

 insertar: function (conexion, datos, funcion) {
    conexion.query('INSERT INTO asignaturas (materia, fecha_entrega, estatus, descripcion) VALUES (?, ?, ?, NULL)' ,[datos.Materia, datos.Entrega, datos.Estatus, datos.Descripcion], funcion)
    },
    retomarDatosMATERIA: function   (conexion, materia, funcion) {
      conexion.query('SELECT * FROM asignaturas WHERE materia=?',[materia],funcion)
      },
 eliminar: function   (conexion, materia, funcion) {
  conexion.query('DELETE FROM asignaturas WHERE materia=?', [materia], funcion)
  },   
  }
