import React from 'react'
import Link from 'next/link'
import Aboutpage from '../server/page'



const Headerpage = () => {
  return ( <div > 

    <div className=' bg-amber-500 flex  flex-wrap p-5  flex-col md:flex-row   items-center'>
    <h1 className="text-[25px] font-normal text-purple-600 ">Data Fetching</h1>
    <nav
    className='flex  flex-wrap justify-center iterm-center md:ml-auto md:mr-auto space-x-6 md:mt-0 mt-3  '>
      <Link  href  = "/" className='hover:text-green-600 '>Home</Link>
      <Link  href  = "/Client" className='hover:text-sky-600'>Client Side</Link>
      <Link  href  = "/server" className='hover:text-white' >Server Side</Link>
      <Link  href  = "/about" className='hover:text-orange-600'>About</Link>

      
    </nav>
    </div>
  
   
  </div>
    
  )
}

export default Headerpage
