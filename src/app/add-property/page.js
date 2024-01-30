"use client";
import React, { useState } from "react";
import { Button, Checkbox, ConfigProvider, message, Steps, theme } from "antd";
import TextArea from "antd/es/input/TextArea";

const CreateProperty = () => {
  const [current, setCurrent] = useState(0);
  const [rentCheckbox, setrentCheckbox] = useState(false);
  const [saleCheckbox, setsaleCheckbox] = useState(false);
  console.log(rentCheckbox);
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
                Property Title
              </h4>
              <input
                type="text"
                name="title"
                id="title"
                className="block focus:shadow-md transition border border-[#CACACA]  h-[3rem] w-full outline-none p-4 text-lg rounded-[0.125rem]"
                required
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
      content: "Second-content",
    },
    {
      title: "Publish",
      content: "Last-content",
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
          {current < steps.length - 1 && (
            <button
              className={
                "px-6 py-2 rounded mt-4  bg-[#3A0CA3] text-white text-[0.875rem] font-normal  "
              }
              onClick={() => next()}
            >
              Next
            </button>
          )}{" "}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}{" "}
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
export default CreateProperty;
