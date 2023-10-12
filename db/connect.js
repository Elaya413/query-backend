const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(`${process.env.dbUrl}`);
    console.log("Db connection has been established...");
  } catch (error) {
    console.log("Error while connecting DB: ", error);
  }
};

module.exports = db;