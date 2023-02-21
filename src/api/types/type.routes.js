const TypeRoutes = require('express').Router();
const { getAll, getOne } = require('./type.controller');

TypeRoutes.get('/', getAll);
TypeRoutes.get('/:id', getOne);

module.exports = TypeRoutes;
