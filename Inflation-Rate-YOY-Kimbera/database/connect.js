const mongoose = require("mongoose");
// Connect to mongodb database
const connectDB = async (url) => {
  return await mongoose
    .connect(url, {})
    .then(() => console.log("DBConnection Successfull!"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
