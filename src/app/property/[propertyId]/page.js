/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "../../../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import { TbCurrencyTaka } from "react-icons/tb";
import "./propertyStyle.css";

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
  console.log(propertyId);
  return (
    <div className="mx-2 lg:mx-40">
      {/* title */}
      <h2 className="text-xl font-bold mt-6 mb-2">{title}</h2>

      {/* Author, Date */}
      <div className="flex gap-2 text-center justify-between mb-4">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="font-semibold">{date}</p>
      </div>

      {/* Images of property */}
      {/* <Image alt="demo" placeholder="blur" src={PropertyImg} /> */}

      {/* Image slider */}
      <div>
        <Carousel thumbWidth={100} showThumbs={true} autoPlay={true}>
          <div>
            <img
              alt={title}
              src="/property.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt={title}
              src="/property.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt={title}
              src="/property.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>

      {/* price, address */}
      <div className="flex justify-between mt-6">
        <h2 className="font-bold">Address: {address}</h2>
        <h2>
          <span className="badge text-xl p-4 badge-secondary"><TbCurrencyTaka />{price}</span>
        </h2>
      </div>

      {/* description of property */}
      <h2 className="font-bold text-3xl my-4">Description</h2>
      <p>{description}</p>

      <span className="divider"></span>

      {/* like, comments, favourite bar */}
      <div className=" my-4 gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-xl">
        <button className=" btn btn-secondary text-xl flex items-center justify-center gap-2 py-2">
          <AiOutlineLike /> Like
        </button>
        <button className=" btn btn-secondary text-xl flex items-center justify-center gap-2 py-2">
          <LiaComments />
          Comments
        </button>
        <button className=" btn btn-secondary text-xl flex items-center justify-center gap-2 py-2">
          <FaRegHeart /> Favourite
        </button>
        <button className="btn btn-secondary text-xl flex items-center justify-center gap-2 py-2">
          <FaCartPlus /> Buy/Rent
        </button>
      </div>
    </div>
  );
};

export default Page;
