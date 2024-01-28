import Image from 'next/image';
import React from 'react'

function Homepg() {
  return (
    <div className='min-h-screen'>
      <Image src='assests/bgimg2.jpg' alt='Background image' height={500} width={500}/>
    </div>
  )
}

export default Homepg;