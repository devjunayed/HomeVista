import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListProperty = ({ data }) => {
  return (
    <div>
      <div className="mx-10 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((property) => (
          <div key={property._id} className="card card-compact w-full bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-blue-600 hover:duration-500">
            <figure className="h-1/2">
              {property.image.map((imgSrc, index) => (
                <Image
                  key={index}
                  src={imgSrc}
                  alt="Album"
                  width={500}
                  height={500}
                />
              ))}
            </figure>
            <div>
              <div className="flex justify-between p-3">
                <h2 className="card-title">{property?.title}</h2>
                <p className="card-title">BDT-{property?.price}</p>
              </div>
              <div className="px-3">
                <p>{property?.division}</p>
                <p>{property?.district}</p>
                <p>{property?.area}</p>
                <p>{property?.street}</p>
              </div>
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
