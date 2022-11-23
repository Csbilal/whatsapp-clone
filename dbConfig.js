const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDb connected: ${conn.connection.host}`);
    return conn;
  } catch (e) {
    console.error(e);
  }
};

connectDB();
