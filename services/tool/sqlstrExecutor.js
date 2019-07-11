// mySql connection test
var mysql = require('mysql')

exports.executeQuery = function(sqlStr) {
  return new Promise((resolve, reject) => {
    var connection = createConnection();
    connection.connect();
    connection.query(sqlStr, function(err, results, fields) {     
      if (err) reject(err);
      resolve(results);
    });
    connection.end();
  })
}

function createConnection(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwe123456',
    database: 'dbcms'
  });
}

