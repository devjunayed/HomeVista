import Banners from "@/components/Home/Banner/Banners";
import Brand from "@/components/Home/Brand/Brand";

import WhoWeAre from "@/components/Home/Who we are/WhoWeAre";
import OurService from "@/components/Home/Our Service/OurService";
import NavbarSignOut from "@/components/Nav/NavbarSignOut";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase.config";
import { NextResponse } from "next/server";

function MobileBanner() {
  return null;
}

export default async function Home() {
  return (
    <>
      <div className="">
        <NavbarSignOut />
        <Banners />
        <Brand />
        <WhoWeAre />
        {/*    property section*/}
        <OurService />
      </div>
    </>
  );
}
