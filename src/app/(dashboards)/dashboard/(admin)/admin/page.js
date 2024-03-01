import React from 'react'
import ProtectAdmin from '@/components/admin-components/ProtectAdmin/ProtectAdmin'

const Page = () => {
  return (
    <ProtectAdmin>
      <div className='grid md:ml-0 ml-4 mr-4 text-white text-center mt-4 sm:grid-cols-2 xs:grid-col-1 md:grid-cols-3 gap-4'>
       <div className='flex flex-col gap-4 justify-center items-center bg-orange-400 rounded-lg min-h-40'>
        <h3 className='text-xl md:text-2xl font-semibold'>Total Users</h3>
        <p className='text-lg md:text-xl'>4</p>
       </div>
       <div className='flex flex-col gap-4 justify-center items-center  bg-blue-400  rounded-lg min-h-40'>
        <h3 className='text-xl md:text-2xl font-semibold'>Total Posts</h3>
        <p className='text-lg md:text-xl'>4</p>
       </div>
       <div className='flex flex-col gap-4 justify-center items-center  bg-green-400  rounded-lg min-h-40'>
        <h3 className='text-xl md:text-2xl font-semibold'>Total Reports</h3>
        <p className='text-lg md:text-xl'>4</p>
       </div>
      </div>
    </ProtectAdmin>
  )
}

export default Page
