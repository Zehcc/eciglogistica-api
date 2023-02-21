const ColourRoutes = require('express').Router();
const { getAll, getOne } = require('./colour.controller');

ColourRoutes.get('/', getAll);
ColourRoutes.get('/:id', getOne);

module.exports = ColourRoutes;
