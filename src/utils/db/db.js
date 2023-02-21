const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3300,
  user: 'root',
  password: '',
  database: 'eciglogistica',
});
const connect = async () => {
  try {
    connection.connect((error) => {
      if (error) throw error;
      console.log('DB server runing');
    });
  } catch (error) {
    console.error('Database connection failed', error);
  }
};
module.exports = { connect, connection };
