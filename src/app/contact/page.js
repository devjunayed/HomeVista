import React from "react";

const ContactUS = () => {
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
          <form className="">
            <div className="form-control">
              <label className="label  ">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="name"
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
                type="text"
                placeholder="message..."
                className="input-bordered p-4 border rounded-xl"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#FF1493] hover:bg-[#FF1484] border-none text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
