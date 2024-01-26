import Banners from "@/components/Banner/Banners";
import Brand from "@/components/Brand/Brand";
import TabProperty from "@/components/TabPropety/TabProperty";
export default async function Home() {
  const data = await fetch("http://localhost:3000/api/get-property").then(
    (res) => res.json(),
  );
  console.log(data);

  return (
    <>
      <div className="">
        <Banners />
        <TabProperty />
        <Brand />
      </div>
    </>
  );
}
