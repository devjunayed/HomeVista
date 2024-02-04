import ListProperty from '@/components/properties/ListProperty';
import axios from 'axios';
import React from 'react'

const page = async () => {
  const propertyData = await getProperty();
  console.log(propertyData);
  return (
    <ListProperty data={propertyData} />
  );
}

export default page

const getProperty = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/property`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Could not fetch properties`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching properties", error);
    throw error; // Propagate the error
  }
};
