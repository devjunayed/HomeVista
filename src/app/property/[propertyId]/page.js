/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext, useEffect, useState } from "react";
import "../../../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";
import { LiaComments } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import { TbCurrencyTaka } from "react-icons/tb";
import "./propertyStyle.css";
import Review from "@/components/Review/Review";
import { CiMenuKebab } from "react-icons/ci";
import { authContext } from "@/context/authContext/AuthProvider";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import SuccessAlert from "@/components/SuccessAlert/SuccessAlert";

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
  const [modalIsOpen, setIsOpen] = useState(false);
  const propertyId = params.propertyId;
  const { currentUser } = useContext(authContext);
  const [report, setReport] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{

  }, []);

  const handleReport = async (form) => {
    const report = form.get("report");
    const name = form.get("name");
    const email = form.get("email");

    const formData = {
      propertyId,
      report,
      reporterName: name,
      reporterEmail: email,
      reporterId: currentUser.uid,
      authorName: author,
    };

    fetch("http://localhost:3000/api/property-report", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => SuccessAlert(data.message));
  };

  return (
    <div className="mx-2 lg:mx-40">
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
            class="menu dropdown-content absolute menu-md top-0 right-5 bg-base-200 w-56 rounded-box"
          >
            <li>
              <button onClick={openModal} className="">
                <span className="text-xl">
                  <MdOutlineReportGmailerrorred />{" "}
                </span>
                Report post
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal is here */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="border-2 w-2/3 pb-10 bg-white left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col  items-end">
          <button className="m-4 text-3xl text-red-600" onClick={closeModal}>
            <MdCancel />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">Submit your report</h2>
          <form action={handleReport} className="w-full px-10">
            {/* Name Field Start */}
            <div className="form-control">
              <label className="label  ">
                <span className="label-text  ">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={currentUser?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Name Field End */}
            {/* Email Field Start */}
            <div className="form-control">
              <label className="label  ">
                <span className="label-text  ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={currentUser?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email Field End */}
            {/* Report Field Start */}
            <div className="form-control">
              <label className="label  ">
                <span className="label-text ">Report</span>
              </label>
              <textarea
                type="text"
                name="report"
                placeholder="tell us what's wrong in the post"
                className="input pt-4 h-32 input-bordered"
                required
              ></textarea>
            </div>
            {/* Report Field End */}

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit Report"
                className="btn bg-secondary hover:bg-blue-800 border-none text-white"
              />
            </div>
          </form>
        </div>
      </Modal>

      {/* Author, Date */}
      <div className="flex gap-2 text-center justify-between mb-4">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="font-semibold">{date}</p>
      </div>

      {/* Image slider */}
      <div>
        <Carousel thumbWidth={100} showThumbs={true} autoPlay={true}>
          <div>
            <img alt={title} src="/property.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt={title} src="/property.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt={title} src="/property.jpg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
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
      <div className=" my-4 gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-xl">
        <button className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
          <AiOutlineLike /> Like
        </button>
        <button className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
          <LiaComments />
          Comments
        </button>
        <button className=" btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
          <FaRegHeart /> Favourite
        </button>
        <button className="btn bg-secondary hover:bg-blue-800 text-white text-xl flex items-center justify-center gap-2 py-2">
          <FaCartPlus /> Buy/Rent
        </button>
      </div>

      <Review userId={currentUser?.uid} propertyId={propertyId} />
    </div>
  );
};

export default Page;
