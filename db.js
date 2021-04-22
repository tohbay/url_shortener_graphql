const mongoose = require("mongoose");
require('dotenv').config();


const db = `${process.env.mongoURI}`;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
