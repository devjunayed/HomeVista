import MongodbConnect from "@/database/mongodbConnect";
import propertyModel from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    await MongodbConnect();
    await propertyModel.create(data);
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function GET(req) {
  try {
    const title = req.nextUrl.searchParams.get("title");
    await MongodbConnect();
    console.log(title);
    if (title === 'undefined') {
      const data = await propertyModel.find();
      console.log(data);
      if (data) {
        return NextResponse.json({ data });
      }
      return NextResponse.json({ message: "error" });
    } else {
      const data = await propertyModel.find({title});
      return NextResponse.json({ data });
    }
  } catch (error) {
    return NextResponse.json({ data: [], error: error.message });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await MongodbConnect();
  await Properties.findByIdAndDelete(id);
  return NextResponse.json({ message: "property deleted" }, { status: 200 });
}
