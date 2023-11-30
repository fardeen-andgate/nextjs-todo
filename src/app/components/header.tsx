import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='text-center text-4xl p-3 mt-3 text-white rounded bg-gradient-to-br from-purple-900 via-pink-700 to-fuchsia-800'>
      <Link href={"/"}>TODO APP</Link>
   </div>
  )
}

export default Header