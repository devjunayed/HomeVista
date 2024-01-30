const { Schema, default: mongoose } = require("mongoose");

const propertyRatingSchema = new Schema(
    {
        userId: String,
        propertyId: String,
        rating: Number
    }
);

const ratingModel = mongoose.models.review ||  mongoose.model("review", propertyRatingSchema);

export default ratingModel;