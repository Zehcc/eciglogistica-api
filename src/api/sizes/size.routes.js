const SizeRoutes = require('express').Router();
const { getAll, getOne } = require('./size.controller');

SizeRoutes.get('/', getAll);
SizeRoutes.get('/:id', getOne);

module.exports = SizeRoutes;
