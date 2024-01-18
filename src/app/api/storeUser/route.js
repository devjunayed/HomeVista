import { NextResponse } from "next/server";
import { mongoClient } from "@/database/database";

export async function POST(req, res) {
  try {
    const body = await req.json();

    const homeVistaDB = await mongoClient.db("homeVistaDB").collection("users");

    const checkExistsUser = await homeVistaDB.findOne({
      email: body.email,
    });
    if (checkExistsUser) {
      return NextResponse.json({ error: "User already exists" });
    } else {
      const result = await homeVistaDB.insertOne(body);
      console.log(result);
      return NextResponse.json({ message: result });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
