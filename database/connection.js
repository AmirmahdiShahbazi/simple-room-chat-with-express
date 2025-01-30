const mongoose = require('mongoose');

if (!mongoose.connection.readyState) {
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));
}

module.exports = mongoose;