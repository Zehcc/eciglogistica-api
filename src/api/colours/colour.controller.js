const { connection } = require('../../utils/db/db');

const getAll = async (req, res, next) => {
  try {
    const sql = 'SELECT * FROM colours';
    connection.query(sql, (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM colours WHERE id=${id}`;
    connection.query(sql, (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getOne,
};
