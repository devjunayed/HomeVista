import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await property();
  console.log(data);
  return (
    <div>
      <ul className="flex gap-3 flex-wrap p-5">
        {data?.message?.map((item) => (
          <li key={item._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.photoUrl} alt="property" />
              </figure>
              <div className="card-body flex">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.description}</p>
                <p>{item.division}</p>
                <p>{item.district}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`property/${item._id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

const property = async () => {
  const data = await fetch("https://home-vista.vercel.app/api/property", {
    next: { tags: ["property"], revalidate: 2 },
  });
  return data.json();
};
