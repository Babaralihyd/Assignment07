import React from 'react'
import Link from 'next/link'
import Aboutpage from '../about/page'



const Headerpage = () => {
  return ( <div className='bg-pink-800 h-12 '> 
    <div className='text-yellow-400 flex  justify-between place-items-center '>

       <h1 className='  text-xl m-2 cursor-pointer'>Imran University Hyderabad </h1>
<ul className=' flex grap-4 mr-4 text-justify-between space-x-6 cursor-pointer'>
    
      <Link  href  = "/" className='hover:text-green-600 '>Home</Link>
      <Link  href  = "/news" className='hover:text-sky-600'>News</Link>
      <Link  href  = "/about" className='hover:text-stone-900' >About</Link>
      <Link  href  = "/academic" className='hover:text-amber-600'>Academic</Link>
      <Link  href  = "/administration" className='hover:text-red-600'>Adminstration</Link>
    </ul>


  </div>
   
  </div>
    
  )
}

export default Headerpage
