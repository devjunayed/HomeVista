import React from 'react'

const Page = () => {
  return (
    <div>
      page
    </div>
  )
}

export default Page;



// import ListProperty from "@/components/ListProperty/ListProperty";
// import doFetch from "@/lib/doFetch";
// import React from "react";

// const Page = async () => {
//   const propertyData = await GetProperty();
//   return <ListProperty data={propertyData} />;
// };

// export default Page;

// const GetProperty = async () => {
//   try {
//     const res = await doFetch("/properties");
//     const data = await res.json();
//     console.log('null from where');
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching properties", error);
//     throw error; // Propagate the error
//   }
// };
