const express = require('express');
const cors = require('cors');
const { connect } = require('./src/utils/db/db');
const logger = require('morgan');
const products = require('./src/api/products/product.routes');
const users = require('./src/api/users/user.routes');
const sizes = require('./src/api/sizes/size.routes');
const colours = require('./src/api/colours/colour.routes');
const types = require('./src/api/types/type.routes');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

connect();
const app = express();
//MORGAN
app.use(logger('dev'));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

//DATA LIMIT
app.use(express.json({ limit: '5mb' }));

//URI
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

app.use('/products', products);
app.use('/users', users);
app.use('/sizes', sizes);
app.use('/colours', colours);
app.use('/types', types);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
