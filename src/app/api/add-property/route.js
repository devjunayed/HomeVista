import { NextResponse } from "next/server";
import { mongoClient } from "@/database/database";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const homeVistaDB = await mongoClient
      .db("homeVistaDB")
      .collection("Estates");
    const result = await homeVistaDB.insertOne(data);
    return NextResponse.json({ message: result });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}
