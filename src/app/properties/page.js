import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

const property = async () => {
  const data = await fetch(`http://localhost:3000/api/property`, {
    next: { tags: ["property"], revalidate: 1 },
  });
  return data.json();
};
