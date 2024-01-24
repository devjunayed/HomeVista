"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
const TabProperty = () => {
  const divisions = [
    { id: 1, name: "Dhaka" },
    { id: 2, name: "Chittagong" },
    { id: 3, name: "Rajshahi" },
    { id: 4, name: "Khulna" },
    { id: 5, name: "Barisal" },
    { id: 6, name: "Sylhet" },
    { id: 7, name: "Rangpur" },
    { id: 8, name: "Mymensingh" },
  ];

  const [tabpanels, setTabpanels] = useState(undefined);

  return (
    <Tabs>
      <TabList className="flex gap-3 items-center justify-center py-5">
        {divisions.map((division) => (
          <Tab key={division.id}>
            <button
              className="btn btn-secondary"
              onClick={() => setTabpanels(division.name)}
            >
              {division.name}
            </button>
          </Tab>
        ))}
      </TabList>
      <div>
        <Tabpanelss data={tabpanels}></Tabpanelss>
      </div>
    </Tabs>
  );
};

export default TabProperty;

const Tabpanelss = ({ data }) => {
  return <>{data}</>;
};
