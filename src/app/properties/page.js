import ListProperty from '@/components/properties/ListProperty';
import axios from 'axios';
import React from 'react'

const Page = async () => {
  const propertyData = await getProperty();
  return (
    <ListProperty data={propertyData} />
  );
}

export default Page;

const getProperty = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/properties`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching properties", error);
    throw error; // Propagate the error
  }
};
