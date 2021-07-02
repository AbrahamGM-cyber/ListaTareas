var mysql = require('mysql')
var con = mysql.createConnection({
  host: 'bngb9exy1u7bs8uztth2-mysql.services.clever-cloud.com',
  user: 'ucoislwlf7roz22s',
  password: 'lhEYcO93PcR1cS6ZIeiT',
  database: 'bngb9exy1u7bs8uztth2'
})

con.connect(
  (err) => {
    if (!err) {
      console.log('conexion establecida')
    } else {
      console.log('error de conexion')
    }
  })
module.exports = con
