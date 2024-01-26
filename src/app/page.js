import Banners from "@/components/Banner/Banners";
import Brand from "@/components/Brand/Brand";
import TabProperty from "@/components/TabPropety/TabProperty";
export default async function Home() {
  const data = await fetch(
    "https://home-vista.vercel.app/api/get-property",
  ).then((res) => res.json());
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
