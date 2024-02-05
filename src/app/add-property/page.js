"use client";
import React, { useState } from "react";
import { Button, Checkbox, message, Select, Steps, Upload } from "antd";
import divisions from "@/lib/divisions";
import districts from "@/lib/districts";
import Dragger from "antd/es/upload/Dragger";
import Image from "next/image";
import axios from "axios";
import doFetch from "@/hooks/doFetch";

const page = () => {
  const [current, setCurrent] = useState(0);
  const [rentCheckbox, setrentCheckbox] = useState(false);
  const [saleCheckbox, setsaleCheckbox] = useState(false);
  const [division, setDivision] = useState("Dhaka");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState([]);
  const [area, setArea] = useState("");
  const [fileList, setFileList] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("Street");
  const [price, setPrice] = useState(0);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    const image = { image: file };

    const response = await axios.post(
      "https://api.imgbb.com/1/upload?key=0ebb240c8ce479a4159793d2a4acc3f4",
      image,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    if (response.data.success) {
      setImage((prevState) => [...prevState, response.data.data.url]);
      message.success("Image uploaded successfully");
      onSuccess();
    } else {
      message.error("Error uploading image");
      onError();
    }
  };
  console.log(image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      rentCheckbox,
      saleCheckbox,
      division,
      district,
      area,
      image,
      title,
      description,
      street,
      price,
    };
    await doFetch("/property", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .then(() => message.success("data create successful"));
  };
  const steps = [
    {
      title: "Property Title",
      content: (
        <>
          <div>
            <div className="pb-2 pt-4">
              <h4
                className={
                  "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                }
              >
                Title
              </h4>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={title}
                className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4">
              <h4
                className={
                  "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                }
              >
                Description
              </h4>

              <textArea
                name="description"
                id="description"
                className="block focus:shadow-md transition border border-[#CACACA]   w-full outline-none p-4 text-lg rounded-[0.125rem]"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4 flex items-center justify-between">
              <Checkbox
                checked={rentCheckbox}
                onChange={(e) => {
                  setsaleCheckbox(false);
                  setrentCheckbox(e.target.checked);
                }}
              >
                <span className={" text-[0.875rem] font-normal text-[#4F4F4F]"}>
                  Rent
                </span>
              </Checkbox>
              <Checkbox
                checked={saleCheckbox}
                onChange={(e) => {
                  setrentCheckbox(false);
                  setsaleCheckbox(e.target.checked);
                }}
              >
                <p className={" text-[0.875rem] font-normal text-[#4F4F4F]"}>
                  Sell
                </p>
              </Checkbox>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Property Address",
      content: (
        <>
          <div>
            <div className="pb-2 pt-4">
              <h4
                className={
                  "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                }
              >
                Street
              </h4>
              <input
                type="text"
                id={"street"}
                name={"street"}
                defaultValue={street}
                className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4 flex items-center justify-between">
              <div>
                <h4
                  className={
                    "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                  }
                >
                  Division
                </h4>

                <Select
                  defaultValue={division}
                  style={{ width: 120 }}
                  options={divisions}
                  onChange={(value) => {
                    setDistrict("");
                    setArea("");
                    setDivision(value);
                  }}
                />
              </div>
              <div>
                <h4
                  className={
                    "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                  }
                >
                  District
                </h4>

                <Select
                  style={{ width: 120 }}
                  options={districts[division]}
                  value={district}
                  onChange={async (value) => {
                    setArea("");
                    setPlace([]);
                    setDistrict(value);
                    const where = encodeURIComponent(
                      JSON.stringify({
                        adminName2: value,
                      })
                    );
                    const data = await fetch(
                      `https://parseapi.back4app.com/classes/BD?where=${where}`,
                      {
                        headers: {
                          "X-Parse-Application-Id":
                            "zS2XAEVEZAkD081UmEECFq22mAjIvX2IlTYaQfai", // This is the fake app's application id
                          "X-Parse-Master-Key":
                            "t6EjVCUOwutr1ruorlXNsH3Rz65g0jiVtbILtAYU", // This is the fake app's readonly master key
                        },
                      }
                    );
                    const res = await data.json();

                    const updatedPlace = [];
                    res.results.map((item) => {
                      const exist = updatedPlace.find(
                        (data) => data.value === item.adminName3
                      );
                      if (!exist) {
                        updatedPlace.push({
                          value: item.adminName3,
                          label: item.adminName3,
                        });
                      }
                    });
                    setPlace(updatedPlace);
                  }}
                />
              </div>
              <div>
                <h4
                  className={
                    "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                  }
                >
                  Area
                </h4>

                <Select
                  style={{ width: 120 }}
                  options={place}
                  value={area}
                  onChange={(value) => setArea(value)}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Publish",
      content: (
        <>
          <div>
            <div className="pb-2 pt-4 mb-4">
              <h4
                className={
                  "text-left text-[0.875rem] font-normal text-[#4F4F4F]"
                }
              >
                Price
              </h4>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={price}
                className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
                required
                onChange={(e) => {
                  const number = parseInt(e.target.value);
                  setPrice(number);
                }}
              />
            </div>
            <div>
              <Dragger
                customRequest={customRequest}
                onChange={onChange}
                listType="picture"
                fileList={fileList}
              >
                <p className="ant-upload-drag-icon">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO3WSwrCMBAG4NwuV/MInmRAewCxeATbrCwuXbir6YiKNWD6SDN5UOaHHwKl5WOS0grBIYrcHDBmxRJgrEgG5jBBdetIa2bRmYwNVMa1aMDrvcOHRmw1vtfZAVv9u/+1XhVQTp1Jqi1uF24xnLu+wYDK4yUhAZaNxuMlU2DZ6P4BNmRRa9xViYAmzoYsao3b06dDyGBAG85EFgZuDBkEOIb7dl/9A21IcuAcHDggyYFzcTATmRwIE8gsgDCCzAYIA0hyYMhIBnpG8gQ9I1c7QRmxyhVoA1P/VauBMlClmmDMgivQBvb5PoNDGQipJhizgiNo8gTt26xvrs1I2gAAAABJRU5ErkJggg=="
                    alt={"upload image"}
                    width={50}
                    height={50}
                    className={"mx-auto"}
                  />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </div>
          </div>
        </>
      ),
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps
        type="navigation"
        current={current}
        className="site-navigation-steps"
        items={items}
        style={{ marginTop: "5rem" }}
      />
      <div className={"py-[10rem]"}>
        <div className={"p-[2rem] border w-[37rem] mx-auto"}>
          {steps[current].content}{" "}
          {current > 0 && (
            <button
              className={
                "px-6 py-2 rounded mt-4  bg-[#3A0CA3] text-white text-[0.875rem] font-normal  "
              }
              onClick={() => prev()}
            >
              Previous
            </button>
          )}
          {current < steps.length - 1 && (
            <button
              className={
                "px-6 py-2 ml-2 rounded mt-4  bg-[#3A0CA3] text-white text-[0.875rem] font-normal  "
              }
              onClick={() => {
                next();
              }}
            >
              Next
            </button>
          )}{" "}
          {current === steps.length - 1 && (
            <button
              className={
                "px-6 py-2 ml-2 rounded mt-4  bg-[#3A0CA3] text-white text-[0.875rem] font-normal  "
              }
              onClick={handleSubmit}
            >
              Publish
            </button>
          )}{" "}
        </div>
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      ></div>
    </>
  );
};
export default page;
