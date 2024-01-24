import Banner from "@/components/Banner/Banner";
import { mongoClient } from "@/database/database";
import TabProperty from "@/components/TabPropety/TabProperty";
export default function Home() {
  return <>
    <div className='pt-24'>
      <Banner />
      <TabProperty />
    </div>
  </>;
}
const getState = async () => {
  "use server";
  const homeVistaDB = await mongoClient.db("homeVistaDB").collection("Estate");
  return await homeVistaDB.find().toArray();
};
