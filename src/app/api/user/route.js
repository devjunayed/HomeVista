import { NextResponse } from "next/server";
import User from "@/model/user";
import mongodbConnect from "@/database/mongodbConnect";

export async function POST(req) {
  try {
    const { userName, email } = await req.json();
    console.log(userName, email);
    await mongodbConnect();
    const exist = await User.findOne({ email });
    if (exist) {
      return NextResponse.json({ error: "User already exist" });
    } else {
      const result = await User.create({ userName, email });
      return NextResponse.json({ result });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
