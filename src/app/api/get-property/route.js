import { NextResponse } from "next/server";
import { mongoClient } from "@/database/database";

export async function GET(req, res) {
  try {
    const homeVistaDB = await mongoClient
      .db("homeVistaDB")
      .collection("Estates");

    const result = await homeVistaDB.find().toArray();
    console.log(result);
    return NextResponse.json({ message: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
