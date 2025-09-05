import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className= 'flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white'> All right reserved. Copyroght @Truthis</p>

    </div>
  )
}

export default Footer