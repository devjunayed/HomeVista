import MongodbConnect from "@/database/mongodbConnect";
import ratingModel from "@/model/propertyRating";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const propertyId = params.propertyId;
    await MongodbConnect();
    const query = { propertyId };

    const allRating = await ratingModel.find(query);

    if (allRating.length > 0) {
      const noOfRating = allRating.length;

      const sumOfRating = allRating.reduce(
        (rating, currRating) => rating + currRating.rating,
        0,
      );

      const averageRating = Math.round(sumOfRating / noOfRating);

      return NextResponse.json({ data: averageRating });
    }

    return NextResponse.json({ message: "No property rating" });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ message: "Yeppie working" });
}
