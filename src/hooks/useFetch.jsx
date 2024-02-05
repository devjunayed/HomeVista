
const useFetch = async (url, obj) => {
    // const rootURL = 'http://localhost:3000/api';
    const rootURL = 'https://brogrammer-home-vista.vercel.app/api';
  return await fetch(`${rootURL}/${url}`, obj);
}

export default useFetch;
