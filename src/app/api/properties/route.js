import mongodbConnect from "@/database/mongodbConnect";
import property from "@/model/storeProperty";
import Properties from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    await mongodbConnect();
    await property.create(data);
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function GET() {
  try {
    await mongodbConnect();
    const homeVistaDB = await property.find();
    console.log(homeVistaDB);
    return NextResponse.json({message: homeVistaDB});
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await mongodbConnect();
  await Properties.findByIdAndDelete(id);
  return NextResponse.json({ message: "property deleted" }, { status: 200 });

}
