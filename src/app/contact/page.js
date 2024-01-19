"use client";

import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactUS = () => {
  const handleMessageSent = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        { to_name: name, to_email: email, message },
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
      )
      .then(
        (res) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (err) => {
          console.log(err);
        },
      );
  };

  return (
    <div
      data-theme="light"
      style={{ backgroundImage: 'url("property.jpg")' }}
      className=" min-h-screen bg-cover flex py-10"
    >
      <div className="w-full flex justify-end items-center">
        <div className="p-10  bg-black bg-opacity-45 rounded-xl text-black  md:w-1/2 w-11/12 mx-auto">
          <h1 className="text-center text-white text-xl md:text-3xl md:mt-6">
            Contact Us
          </h1>
          <form action={handleMessageSent} className="">
            <div className="form-control">
              <label className="label  ">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label  ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label  ">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                rows="6"
                name="message"
                type="text"
                placeholder="message..."
                className="input-bordered p-4 border rounded-xl"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sent Message"
                className="btn bg-[#FF1493] hover:bg-[#FF1484] border-none text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
