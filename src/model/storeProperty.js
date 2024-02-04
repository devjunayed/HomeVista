import mongoose, { Schema } from "mongoose";

const StorePropertySchema = new Schema({
  rentCheckbox: Boolean,
  saleCheckbox: Boolean,
  division: String,
  district: String,
  area: String,
  image: Array,
  title: String,
  description: String,
  street: String,
  price: Number,
},
  {
    timestamps: true,
  });

const property =
  mongoose.models.property || mongoose.model("property", StorePropertySchema);

export default property;
