const mongoose = require('mongoose');


const DB_CONNECT = async (mongoUrl: string) => {
  await mongoose.connect(mongoUrl);
};

const DB_DISCONNECT = async () => {
  await mongoose.connection.close();
};

module.exports = { DB_CONNECT, DB_DISCONNECT };

