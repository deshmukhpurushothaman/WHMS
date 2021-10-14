const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let mongo_db_URI = process.env.MONGO_URI_DEV;

    // if (process.env.NODE_ENV === "production") {
    //   mongo_db_URI = process.env.MONGO_URI_PROD;
    // } else if (process.env.NODE_ENV === "staging") {
    //   mongo_db_URI = process.env.MONGO_URI_STAGE;
    // } else if (process.env.NODE_ENV === "development") {
    //   mongo_db_URI = process.env.MONGO_URI_DEV;
    // }
    // console.log(mongo_db_URI);
    const connection = await mongoose.connect(mongo_db_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected : ${connection.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
