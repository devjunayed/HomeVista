import mongodbConnect from "@/database/mongodbConnect";
import Property from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await mongodbConnect();
    await Property.create({ title, description });
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
    return NextResponse.json({ message: homeVistaDB });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
