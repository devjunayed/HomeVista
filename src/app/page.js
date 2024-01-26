import Banners from "@/components/Banner/Banners";
export default async function Home() {
  const data = await fetch("http://localhost:3000/api/get-property").then(
    (res) => res.json(),
  );
  console.log(data);

  return (
    <>
      <div className="">
        <Banners />
      </div>
    </>
  );
}
