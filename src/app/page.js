import Banner from "@/components/Banner/Banner";
import { mongoClient } from "@/database/database";

export default async function Home() {
  const data = await getState();
  console.log(data);
  return (
    <>
      <div>
        <Banner />
      </div>
    </>
  );
}
const getState = async () => {
  "use server";
  const homeVistaDB = await mongoClient.db("homeVistaDB").collection("Estate");
  return await homeVistaDB.find().toArray();
};
