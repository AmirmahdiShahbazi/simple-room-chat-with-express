require('dotenv').config();
const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');

app.use(session({
    secret: crypto.randomBytes(20).toString('hex'),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    })
}));
app. set("views", path. join(__dirname, "views"))
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));  
app.use('/', homeRoutes);

const server = app.listen(process.env.PORT || 3000);