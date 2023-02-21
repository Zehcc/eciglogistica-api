const ProductRoutes = require('express').Router();
const {
  getAll,
  getOne,
  postOne,
  updateOne,
  deleteOne,
} = require('./product.controller');

ProductRoutes.get('/', getAll);
ProductRoutes.get('/:id', getOne);
ProductRoutes.post('/', postOne);
ProductRoutes.patch('/:id', updateOne);
ProductRoutes.delete('/:id', deleteOne);

module.exports = ProductRoutes;
