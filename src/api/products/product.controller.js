const { connection } = require('../../utils/db/db');

const getAll = async (req, res, next) => {
  try {
    const sql = 'SELECT * FROM products';
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
    const sql = `SELECT * FROM products WHERE id=${id}`;
    connection.query(sql, (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    return next(error);
  }
};

const postOne = async (req, res, next) => {
  const sql = 'INSERT INTO products SET ?';

  const product = {
    name: req.body.name,
    colour_id: req.body.colour_id,
    type_id: req.body.type_id,
    size_id: req.body.size_id,
    stock: req.body.stock,
    description: req.body.description,
  };

  connection.query(sql, product, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

const updateOne = async (req, res, next) => {
  const { id } = req.params;
  const product = {
    name: req.body.name,
  };
  const sql = `UPDATE products SET Name = '${product.name}' WHERE id = ${id}`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

const deleteOne = async (req, res, next) => {
  const { id } = req.params;
  const sql = `DELETE FROM products WHERE id=${id}`;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

module.exports = {
  getAll,
  getOne,
  postOne,
  updateOne,
  deleteOne,
};
