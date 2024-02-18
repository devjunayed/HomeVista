import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft, FaEye } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ListProperty = ({ data }) => {
  return (
    <div>
      <div className="mx-4 md:mx-10 gap-6 grid grid-cols-1 md:grid-cols-3 ">
        {data.map((property) => (
          <div
            key={property._id}
            className="card card-compact w-full bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-gray-200 hover:duration-500"
          >
            <figure>
              <div className="h-40 w-full relative z-0">
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  interval={2000}
                  infiniteLoop={true}
                  showArrows={false}
                >
                  {property.image.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="w-full h-40 carousel-image-container"
                    >
                      <Image
                        src={imgSrc}
                        fill
                        alt="Property Image"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className=" flex  gap-2  m-2 absolute top-0 right-0">
                  <Tooltip title="Edit" color={"green"}>
                    <button
                      className="btn text-white hover:bg-green-800 items-center border-none flex bg-green-700"
                    >
                      <FaEdit />
                    </button>
                  </Tooltip>

                  <Tooltip title="Delete" color={"red"}>
                    <button className="btn text-white hover:bg-red-700 border-none flex bg-red-600">
                      <BiTrash />
                    </button>
                  </Tooltip>
                </div>
                <div className="bottom-2   absolute z-10 w-full">
                  <div className="flex justify-between mx-2 ">
                    <p className="badge badge-sm bg-secondary border-none text-white p-4">
                      {property?.rentCheckbox ? "Rent" : "Sale"}
                    </p>
                    <p className="badge badge-sm bg-secondary border-none text-white p-4">
                      <TbCurrencyTaka />
                      {property.rentCheckbox
                        ? `${property?.price}/day`
                        : property?.price}
                    </p>
                  </div>
                </div>
              </div>
            </figure>

            <div>
              <div className=" p-3">
                <h2 className="text-md md:text-base">{property?.title}</h2>
                <p className="text-sm text-gray-400">
                  {property?.area}, {property?.district}, {property?.division}
                </p>
              </div>
              <p className="px-3 text-sm">Area: {property?.size} (sqft)</p>
              <div className="card-actions justify-center py-4">
                <Link
                  href={`/properties/${property._id}`}
                  className="btn btn-sm btn-primary"
                >
                  <FaEye />
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProperty;
