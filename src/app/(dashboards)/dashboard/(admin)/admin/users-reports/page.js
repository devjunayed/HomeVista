"use client";
import React from "react";
import useSWR from "swr";

const Page = () => {
  const reportUrl = `/api/get-all-report`;
  const { data: allReportData } = useSWR(reportUrl, getAllReport);

  console.log(allReportData);

  return <div>Users report</div>;
};

export default Page;

const getAllReport = async (reportUrl) => {
  const res = await fetch(reportUrl);
  const data = res.json();
  return data;
};
