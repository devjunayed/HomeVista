import MongodbConnect from "@/database/mongodbConnect";
import ratingModel from "@/model/propertyRating";
import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";

export async function PUT(req, res) {
  try {
    const data = await req.json();
    await MongodbConnect();

    const query = { propertyId: data.propertyId, userId: data.userId };

    const ifRatingAvailable = await ratingModel.findOne(query);

    if (ifRatingAvailable) {
      await ratingModel.updateOne(query, {
        $set: {
          rating: data.rating,
        },
      });
      return NextResponse.json({ message: "Rating updated" });
    } else {
      await ratingModel.create(data);
      return NextResponse.json({ message: "Rating created" });
    }
  } catch (err) {
    console.log(err);
  }
}


export async function GET(req, res) {
  try {
    const propertyId = req.nextUrl.searchParams.get("propertyId");
    const userId = req.nextUrl.searchParams.get("userId");

    console.log(propertyId);
    console.log(userId);

    await MongodbConnect();

    const query = {propertyId, userId};

    const isRated = await ratingModel.findOne(query);

    if (isRated) {
      console.log(isRated.rating, "this is rating");
      return NextResponse.json({data: isRated.rating});
    }
    return NextResponse.json({ data: 5 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "something went wrong" });
  }
}

