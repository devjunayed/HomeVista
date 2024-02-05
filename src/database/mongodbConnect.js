import mongoose from "mongoose";

const MongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(" not connect",error);
  }
};

export default MongodbConnect;
