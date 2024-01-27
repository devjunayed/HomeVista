import mongoose, { Schema } from "mongoose";

const StorePropertySchema = new Schema({
  title: String,
  description: String,
});

const Property =
  mongoose.models.property || mongoose.model("property", StorePropertySchema);

export default Property;
