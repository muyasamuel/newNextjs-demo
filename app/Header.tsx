import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <header className=' flex  items-center  space-x-6 p-5 bg-red-500'>
        <h1 className='text-white'>I am a Header</h1>
        
        <Link href='/' className='p-2 bg-slate-100 rounded-md'> Home </Link>
    </header>
  )
}

export default Header;