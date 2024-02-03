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

const Properties =
  mongoose.models.Properties || mongoose.model("Properties", StorePropertySchema);

export default Properties;
