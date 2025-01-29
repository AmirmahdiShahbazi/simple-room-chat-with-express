require('dotenv').config();
const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const loginRoutes = require('./routes/login');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');
const { Server } = require("socket.io");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
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
app.use('/login', loginRoutes)
const server = app.listen(process.env.PORT || 3000);
const io = new Server(server);
require('./socket')(io);
