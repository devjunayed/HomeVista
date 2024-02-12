"use client";
import ListProperty from "@/components/ListProperty/ListProperty";
import SearchForm from "@/components/SearchForm/SearchForm";
import { data } from "autoprefixer";
import React from "react";
import useSWR from "swr";

const Page = ({ searchParams }) => {
  const url = `/api/properties?title=${searchParams.title}`;
  const { data, error, mutate } = useSWR(url, GetProperty);
  if (data) {
    return (
      <>
        <SearchForm />
        < ListProperty data={data} />;
      </>
    )
  }
  return (
    <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Page;

const GetProperty = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching properties", error);
    throw error; // Propagate the error
  }
};
