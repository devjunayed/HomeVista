import MongodbConnect from "@/database/mongodbConnect";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json();
    await MongodbConnect();
    await Property.findByIdAndUpdate(id, data);
    return NextResponse.json({ message: "Propeerty updated successfully" }, { status: 200 });
}
export async function GET(req, { params }) {
    const { id } = params;
    await MongodbConnect();
    const property = await Property.findOne({ _id: id });
    return NextResponse.json({ property}, { status: 200 });
}