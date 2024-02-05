import ListProperty from '@/components/properties/ListProperty';
import useFetch from '@/hooks/useFetch';
import React from 'react'

const page = async () => {
  const propertyData = await getProperty();
  return (
    <ListProperty data={propertyData} />
  );
}

export default page;


const getProperty = async () => {
  try {
    const res = await useFetch('/properties');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching properties", error);
    throw error; // Propagate the error
  }
};
