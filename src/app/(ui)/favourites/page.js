"use client";

import { authContext } from "@/context/authContext/AuthProvider";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaEye } from "react-icons/fa6";
import { TbHeartOff } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useSWR from "swr";

const Favourites = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const { uid } = useContext(authContext);
  const url = `/api/favourite?userId=${uid}`;
  const {
    data: favourites,
    isLoading,
    mutate: fetchFav,
  } = useSWR(url, GetFavouriteProperty);

  console.log(uid);

  console.log(favourites);

  const handleUnfavourite = (propertyId) => {
    fetch(`/api/favourite?propertyId=${propertyId}&userId=${uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          messageApi.open({
            type: "success",
            content: data.message,
          });
          fetchFav();
        } else {
          messageApi.open({
            type: "error",
            content: data.message,
          });
          fetchFav();
        }
      });
  };

  return (
    <div className="mx-4 lg:mx-10 justify-center flex flex-col">
      {contextHolder}
      {favourites?.length !== 0 && (
        <h2 className="text-center text-3xl text-gray-500 my-6">
          Favourite Property
        </h2>
      )}
      {isLoading && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <span className="loading loading-bars loading-md"></span>
        </div>
      )}
      <div className="grid justify-center grid-cols-1  md:grid-cols-3 mb-6">
        {favourites !== undefined &&
          favourites.map((singleData) => (
            <div
              key={singleData._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <Carousel
                  className="w-full h-52"
                  autoPlay={true}
                  showArrows={true}
                >
                  {singleData.image.map((singleImg, index) => (
                    <div key={index} className="w-full h-52">
                      <Image
                        objectFit="cover"
                        fill
                        src={singleImg}
                        alt={`Image ${index}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div className="badge bg-secondary text-white p-4 ">
                    ${singleData.price}
                  </div>
                </div>
                <h2 className="card-title">{singleData.title}</h2>
                <p>{singleData.description}</p>
                <div className="flex gap-2 justify-center">
                  <Link
                    href={`/properties/${singleData?._id}`}
                    className="btn bg-secondary hover:bg-blue-800 text-white"
                  >
                    <FaEye /> View
                  </Link>
                  <button
                    onClick={() => handleUnfavourite(singleData._id)}
                    className="btn bg-secondary hover:bg-blue-800 text-white"
                  >
                    <TbHeartOff /> Unfavourite
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {favourites?.length === 0 && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className=" text-center text-red-400 md:text-3xl">
            No favoruite data
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;

const GetFavouriteProperty = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};
