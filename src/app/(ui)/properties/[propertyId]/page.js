/* eslint-disable @next/next/no-img-element */
"use client";
import { message } from "antd";
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { FaCartPlus } from "react-icons/fa6";
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

// dummy data start
const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum
soluta atque animi saepe praesentium rerum, quam laboriosam et officia?`;

const author = "John Doe";

const date = `${new Date().getDate()}/${
  new Date().getMonth() + 1
}/${new Date().getFullYear()}`;

const address = "Somewhere, Nowhere";
const price = "2099";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque unde, modi aliquid nisi sunt rem optio voluptas eos dolorem reiciendis autem facere fuga saepe aperiam consectetur eum esse maiores. Doloremque nihil magnam dolorum corrupti itaque cumque dignissimos saepe quidem quia! Quis aliquid officia nemo dicta commodi, asperiores laudantium? Ullam rerum,<br> consequuntur porro, praesentium reprehenderit odit quo culpa laudantium, ipsum aliquid et ipsa totam optio veniam minus accusamus iste suscipit iure iusto atque pariatur numquam. Porro impedit quo dolorem. Cupiditate consequatur autem laboriosam! Dolores expedita explicabo praesentium, libero consequatur iure est aliquam, aut quae, excepturi iusto pariatur. Nostrum earum odit aspernatur commodi alias adipisci, labore numquam placeat. Quibusdam deserunt voluptas quos voluptatibus sapiente, soluta provident repellat, nisi ab quod, doloribus reprehenderit error repellendus magnam velit natus. Tempore quas voluptatem, dolore impedit enim iste omnis maxime eveniet perferendis fugit odit animi ipsa esse molestiae delectus commodi tenetur! Mollitia quasi minima similique eveniet molestiae ab reprehenderit culpa voluptatum aut optio id provident nesciunt fugit quisquam, at assumenda itaque fugiat? Accusantium id voluptas fugit, ratione totam dolore quaerat laborum! Repellendus similique veniam, nemo nulla assumenda quas in, blanditiis voluptas dolores, vel eveniet. Sequi laborum quo aliquam natus similique at voluptas quisquam culpa animi molestias, tenetur sint a illo eum velit? Non soluta, at reprehenderit odit animi velit sapiente veniam culpa itaque explicabo adipisci inventore magnam quaerat facere praesentium libero impedit! Neque modi earum numquam aliquid consectetur harum nostrum consequuntur soluta necessitatibus possimus. Autem cum ipsa at unde ratione omnis, aut a commodi deserunt?";
// dummy data end
// take data as props

const Page = ({ params }) => {
  const propertyId = params.propertyId;
  const { uid } = useContext(authContext);
  const [messageApi, contextHolder] = message.useMessage();

  const ratingUrl = `/api/property-rating/${propertyId}`;
  const favUrl = `/api/favourite?userId=${uid}&propertyId=${propertyId}`;

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

  console.log(favData?.favCount);

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

  return (
    <div className="mx-2 lg:mx-40">
      {contextHolder}
      <div className="flex gap-4  justify-center items-center">
        {/* title */}
        <h2 className="text-xl font-bold mt-6 mb-2">{title}</h2>

        {/* Options */}
        <div className="relative dropdown">
          <div tabIndex={0} role="button" className="text-xl">
            <CiMenuKebab />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content absolute menu-md top-0 right-5  w-56 rounded-box bg-white"
          >
            <ReportProperty propertyId={propertyId} author={author} />
          </ul>
        </div>
      </div>

      {/* Author, Date */}
      <div className="flex gap-2 text-center justify-between mb-4">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="font-semibold">{date}</p>
      </div>

      {/* Image slider */}
      <div>
        <ResponsiveSlider title={title} />
      </div>

      {/* price, address */}
      <div className="flex justify-between mt-6">
        <h2 className="font-bold">Address: {address}</h2>
        <h2>
          <span className="badge text-xl p-4 bg-secondary text-white">
            <TbCurrencyTaka />
            {price}
          </span>
        </h2>
      </div>

      {/* description of property */}
      <h2 className="font-bold text-3xl my-4">Description</h2>
      <p>{description}</p>

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
          <AiOutlineLike /> Like
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

        <button className="btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
          <FaCartPlus /> Buy/Rent
        </button>
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
