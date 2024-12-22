import Image from 'next/image'
import React from 'react'
import NavItems from './Navitems'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className=' flex flex-row justify-between top-0'>
      <div className="">
        <Link href="/">
          <Image
              src="/assets/images/logo/LOGOO YA JEPG.jpg"
              width={250}
              height={250}
              alt="Menu Icon"
              className="cursor-pointer "
          />
        </Link>
      
      </div>
      <div className="mt-5 pl-10 pt-10 hidden md:block">
      <NavItems/>
      </div> 
      <div className="m-5 pr-10">
        <Link href="/donate">
           <button className='bg-green-600 p-8 p-semibold-18  rounded-full'>Donate</button>
        </Link>
        
      </div>

    </div>
  )
}

export default Topbar