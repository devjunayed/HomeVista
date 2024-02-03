import mongodbConnect from "@/database/mongodbConnect";
import Property from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    await mongodbConnect();
    await Properties.create(data);
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function GET() {
  try {
    await mongodbConnect();
    const homeVistaDB = await Property.find();
    return NextResponse.json({ message: "property Created"},{status:201});
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await mongodbConnect();
  await Property.findByIdAndDelete(id);
  return NextResponse.json({ message: "property deleted" },{status:200});

}
