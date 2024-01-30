import MongodbConnect from "@/database/mongodbConnect";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try{
        await MongodbConnect();
        
    }catch(err){

    }
  return  NextResponse.json({message: "Yeppie working"});
}

