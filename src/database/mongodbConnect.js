import mongoose from "mongoose";

const MongodbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hzlter2.mongodb.net/homeVistaDB?retryWrites=true&w=majority`,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default MongodbConnect;
// mongodb+srv://<username>:<password>@cluster0.hzlter2.mongodb.net/?retryWrites=true&w=majority
