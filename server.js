const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const expressValidator = require('express-validator');
const path = require('path');

//routes path
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const vehicleRoutes = require('./routes/vehicle');

//Read Config
dotenv.config();

//Express Server
const app = express();

//connect to DB
const connectDB = require('./config/db');
connectDB();

//middleware
app.use(cors());
app.use(cookieparser());
app.use(expressValidator());
app.use(bodyparser.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/vehicle', vehicleRoutes);

// Unauthorized Message in case of  Invalid Tokens
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.get('/', function (req, res) {
  console.log('Home Route ');
  res.status(400).send({ message: 'Home Route Hit' });
});
//Serve static assets in production

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT} - Environment = ********* ${process.env.NODE_ENV} *********`
  );
});
