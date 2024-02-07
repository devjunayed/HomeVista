import MongodbConnect from "@/database/mongodbConnect";
import favModel from "@/model/favouriteProperty";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const propertyId = req.nextUrl.searchParams.get("propertyId");
    const userId = req.nextUrl.searchParams.get("userId");
    MongodbConnect();
    const query = { propertyId, userId };
    const isFavExist = await favModel.findOne(query);

    if (!isFavExist) {
      await favModel.create({ propertyId, userId });
      return NextResponse.json({ status: "ok", message: "Added to favourite" });
    } else {
        console.log('yo');
      return NextResponse.json({ message: "Already added to favourite" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}

export async function DELETE(req) {
  const propertyId = req.nextUrl.searchParams.get("propertyId");
  const userId = req.nextUrl.searchParams.get("userId");
  MongodbConnect();
  const res = await favModel.findOneAndDelete({ propertyId, userId });

  if (res) {
    return NextResponse.json({
      deleted: true,
      message: "Removed form favourite",
    });
  }
  return NextResponse.json({ message: "property not found" });
}
