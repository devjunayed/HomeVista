import Link from "next/link";
import React from "react";

const ListProperty = ({ data }) => {
  return (
    <div>
     <div className="mx-10 gap-4 flex flex-col">
     {data.map((property, index) => (
        <div key={property._id} className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-1/4">
            {
                property.image.map((imgSrc, index)=>  <img
                key={index}
                src={imgSrc}
                alt="Album"
              />)
            }
           
          </figure>
          <div className="card-body">
            <h2 className="card-title">{property.title}</h2>
            <p>{property.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/properties/${property._id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ListProperty;
