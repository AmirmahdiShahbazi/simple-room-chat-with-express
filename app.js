require('dotenv').config();
const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const path = require('path');

app. set("views", path. join(__dirname, "views"))
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));  
app.use('/', homeRoutes);

const server = app.listen(process.env.PORT || 3000);