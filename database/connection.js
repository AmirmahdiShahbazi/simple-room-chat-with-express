const mongoose = require('mongoose');  

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)  
  .then(() => {})  
  .catch(err => console.error('Database connection error:', err));
  
module.exports = mongoose;