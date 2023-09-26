require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { default: mongoose } = require('mongoose');
const routes = require('./routes');
const dbURL = 'mongodb://localhost:27017/meanauth';
const bodyParser= require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./src/sw.json');






mongoose.connect(dbURL);


const app = express();
app.use(helmet());
//app.use(morgan('tiny'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/apis-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));



app.listen(3000, () => console.log("Server is Running"));