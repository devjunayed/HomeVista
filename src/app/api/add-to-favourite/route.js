import MongodbConnect from "@/database/mongodbConnect";
import favModel from "@/model/favouriteProperty";
import { NextResponse } from "next/server";

// Get API to check if property is already favorite
export async function GET(req) {
  try {
    // Getting ids from search params
    const propertyId = req.nextUrl.searchParams.get("propertyId");
    const userId = req.nextUrl.searchParams.get("userId");

    // Connecting to the database
    MongodbConnect();

    // Query for checking if id is in the database
    const query = { propertyId, userId };

    // Finding user favorite for this property
    const isExist = await favModel.findOne(query);
    const allFav = await favModel.find({ propertyId });
    const allFavLength = allFav.length;

    // Sending response for result
    if (isExist) {
      return NextResponse.json({
        favCount: allFavLength,
        isFound: true,
        status: "ok",
      });
    } else {
      return NextResponse.json({
        favCount: allFavLength,
        isFound: false,
        status: "ok",
      });
    }
  } catch (err) {
    // Catching err if one
    console.error("GET request error:", err);
    return NextResponse.error(500, "Internal Server Error");
  }
}

// PUT API for adding property to favorite
export async function PATCH(req) {
  try {
    // Getting search params from url
    const propertyId = req.nextUrl.searchParams.get("propertyId");
    const userId = req.nextUrl.searchParams.get("userId");

    // Connecting to the database
    MongodbConnect();

    // Query for checking if the data is already inserted
    const query = { propertyId, userId };

    // Searching for data in database
    const isFavExist = await favModel.findOne(query);

    // If data is not available then create one else send message
    if (!isFavExist) {
      const res = await favModel.create({ propertyId, userId });
      if (res) {
        return NextResponse.json({
          status: "ok",
          message: "Added to favorite",
        });
      } else {
        return NextResponse.error(500, "Failed to add to favorite");
      }
    } else {
      const res = await favModel.deleteOne(query);

      if (res) {
        return NextResponse.json({
          status: "ok",
          message: "Removed from favorite",
        });
      } else {
        return NextResponse.error(500, "Failed to remove from favorite");
      }
    }
  } catch (err) {
    console.error("PUT request error:", err);
    return NextResponse.error(500, "Internal Server Error");
  }
}
