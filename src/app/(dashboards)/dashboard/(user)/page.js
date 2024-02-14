import { authContext } from '@/context/authContext/AuthProvider'
import React, { useContext } from 'react'

const page = () => {
 const {logInfo} = useContext(authContext);

 console.log(logInfo);

 if(logInfo.role !== "admin"){
    console.log('hello');
 }
  return (
    <div>
      hello
    </div>
  )
}

export default page
