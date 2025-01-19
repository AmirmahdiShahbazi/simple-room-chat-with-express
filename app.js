const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);
const server = app.listen(3000);