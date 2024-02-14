"use client";
import React from "react";
import useSWR from "swr";

const page = () => {
  const reportUrl = `/api/get-all-report`;
  const { data: allReportData } = useSWR(reportUrl, getAllReport);

  console.log(allReportData);

  return <div>Users report</div>;
};

export default page;

const getAllReport = async (reportUrl) => {
  const res = await fetch(reportUrl);
  const data = res.json();
  return data;
};
