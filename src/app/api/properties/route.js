import MongodbConnect from "@/database/mongodbConnect";
import propertyModel from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    await MongodbConnect();
    await propertyModel.create(data);
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function GET() {
  try {
    await MongodbConnect();
    const data = await propertyModel.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await MongodbConnect();
  await Properties.findByIdAndDelete(id);
  return NextResponse.json({ message: "property deleted" }, { status: 200 });

}
