/* eslint-disable @next/next/no-img-element */
"use client";
import { message } from "antd";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";

import { TbCurrencyTaka } from "react-icons/tb";
import "./propertyStyle.css";
import Review from "@/components/ui-components/Review/Review";
import { CiMenuKebab } from "react-icons/ci";
import ReportProperty from "@/components/ui-components/ReportProperty/ReportProperty";
import React, { useContext, useEffect, useState } from "react";
import ResponsiveSlider from "@/components/ui-components/ResponsiveSlider/ResponsiveSlider";
import useSWR from "swr";
import { authContext } from "@/context/authContext/AuthProvider";
import AddToFav from "@/components/ui-components/AddToFav/AddToFav";
import HandleAddToCart from "@/components/ui-components/HandleAddToCart/HandleAddToCart";

const Page = ({ params }) => {
  const propertyId = params.propertyId;
  const { uid } = useContext(authContext);
  const [messageApi, contextHolder] = message.useMessage();

  const SingleUrl = `/api/properties/${propertyId}`;
  const ratingUrl = `/api/property-rating/${propertyId}`;
  const favUrl = `/api/favourite?userId=${uid}&propertyId=${propertyId}`;
  const likeUrl = `/api/like?userId=${uid}&propertyId=${propertyId}`;

  const {
    data: getRatingData,
    error,
    mutate: refetchRating,
  } = useSWR(ratingUrl, GetPropertyAverageRating);

  const {
    data: favData,
    isLoading: isFavDataLoading,
    isValidating: isFavDataValidating,
    mutate: refetchFav,
  } = useSWR(favUrl, getFav);
  const {
    data: likeData,
    isLoading: islikeDataLoading,
    isValidating: islikeDataValidating,
    mutate: refetchLike,
  } = useSWR(likeUrl, getLike);

  const {
    data: SinglePropertyData,
    isLoading: isSinglePropertyLoading,
    isValidating: isSinglePropertyValidating,
    mutate: refetchSingleProperty,
  } = useSWR(SingleUrl, getSingleProperty);

  console.log(SinglePropertyData);

  const handleFav = () => {
    if (favData && favData.isFound !== undefined) {
      fetch(favUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData?.status === "ok") {
            messageApi.open({
              type: "success",
              content: resData.message,
            });
            refetchFav();
          }
        });
    }
  };
  const handleLike = () => {
    if (likeData && likeData.isFound !== undefined) {
      fetch(likeUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData?.status === "ok") {
            messageApi.open({
              type: "success",
              content: resData.message,
            });
            refetchLike();
          }
        });
    }
  };
  //! handle Likse
  const [like, setLike] = useState(false);
  const handleLikse = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  }

  return (
    <div>
      {!isSinglePropertyLoading && !isFavDataValidating ? (
        <div className="mx-2 lg:mx-40">
          {contextHolder}
          <div className="flex gap-4  justify-between items-center">
            {/* title */}
            <h2 className="text-xl font-bold mt-6 mb-2">
              {SinglePropertyData?.title}
            </h2>

            {/* Options */}
            <div className="relative dropdown">
              <div tabIndex={0} role="button" className="text-xl">
                <CiMenuKebab />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content absolute menu-md top-0 right-5  w-56 rounded-box bg-white"
              >
                <ReportProperty
                  propertyId={propertyId}
                  author={SinglePropertyData?.author}
                />
              </ul>
            </div>
          </div>

          {/* Author, Date */}
          <div className="flex gap-2 text-center justify-between mb-4">
            <p>
              <span className="font-semibold">Author:</span>{" "}
              {SinglePropertyData?.author}
            </p>
            <p className="font-semibold">{SinglePropertyData?.date}</p>
          </div>

          {/* Image slider */}
          <div>
            <ResponsiveSlider
              imgLinks={SinglePropertyData?.image}
              title={SinglePropertyData?.title}
            />
          </div>

          {/* price, address */}
          <div className="flex justify-between mt-6">
            <h2 className="text-gray-400 font-semibold">
              Location: {SinglePropertyData?.area},{" "}
              {SinglePropertyData?.district}, {SinglePropertyData?.division}
            </h2>

            <h2>
              <span className="badge text-xl p-4 bg-secondary text-white">
                <TbCurrencyTaka />
                {SinglePropertyData?.rentCheckbox
                  ? `${SinglePropertyData?.price}/day`
                  : SinglePropertyData?.price}
              </span>
            </h2>
          </div>

          {/* description of property */}
          <h2 className="font-bold text-3xl my-4">Description</h2>
          <p>{SinglePropertyData?.description}</p>

          <span className="divider"></span>

          {/* like, comments, favourite bar */}
          <p className="-mb-2 text-gray-400">
            0 likes, 0 comments and{" "}
            {!isFavDataLoading && !isFavDataValidating && favData
              ? favData?.favCount
              : "0"}{" "}
            favourites
          </p>

          <div className=" my-4 gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-xl">
            <button className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
              {like ? <AiFillLike size={36} onClick={handleLikse} /> : <AiOutlineLike size={36} onClick={handleLikse} />}
            </button>
            <button className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
              <LiaComments />
              Comments
            </button>

            {/* Add to Favourite */}
            <AddToFav
              favData={favData}
              handleFav={handleFav}
              isLoading={isFavDataLoading}
              isValidating={isFavDataValidating}
            />

            {/* Add to Cart */}
            <HandleAddToCart propertyData={SinglePropertyData} userId={uid} />
          </div>

          <div className="my-12">
            <Review
              propertyId={propertyId}
              rating={getRatingData}
              userId={uid}
              refetch={refetchRating}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full min-h-screen items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Page;

const GetPropertyAverageRating = async (ratingUrl) => {
  const res = await fetch(ratingUrl);
  const data = await res.json();
  return data.data;
};

const getFav = async (favUrl) => {
  const res = await fetch(favUrl, { cache: "no-cache" });
  const result = await res.json();
  return result;
};
const getLike = async (likeUrl) => {
  const res = await fetch(likeUrl, { cache: "no-cache" });
  const result = await res.json();
  return result;
};
const getSingleProperty = async (SingleUrl) => {
  const res = await fetch(SingleUrl, { cache: "no-cache" });
  const result = await res.json();
  return result.Properties;
};
