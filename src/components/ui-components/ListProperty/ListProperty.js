import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ListProperty = ({ data }) => {
  return (
    <div>
      <div className="mx-10 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((property) => (
          <div key={property._id} className="card card-compact w-full bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-blue-600 hover:duration-500">
            <figure className="h-60">
              <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                {property.image.map((imgSrc, index) => (
                  <div key={index} className="carousel-image-container">
                    <Image
                      src={imgSrc}
                      width={500}
                      height={500}
                      alt="Property Image"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Carousel>
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
