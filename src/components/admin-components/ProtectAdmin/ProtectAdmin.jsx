"use client";
import { authContext } from '@/context/authContext/AuthProvider'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const ProtectAdmin = ({children}) => {
  const {logInfo} = useContext(authContext);
  const router = useRouter();

  if(logInfo?.role === "admin"){
    return children;
  }else if(logInfo?.role === "user"){
    return router.push("/dashboard/user");
  }else{
    return <span className='loading'></span>
  }
}

export default ProtectAdmin
