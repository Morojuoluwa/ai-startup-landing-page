import React from 'react'

import LogoImg from '@/assets/logo.svg'
import Xsocial from '@/assets/social-x.svg'
import InstaSocial from '@/assets/social-instagram.svg'
import YtSocial from '@/assets/social-youtube.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
      <div className='container'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
          <div className=' flex gap-2 items-center lg:flex-1'>
            <LogoImg className='h-6 w-6'/>
            <div className='font-medium'>AI startup Landing page</div>
          </div>
          
            <nav className='flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center'>
              <a href="#" className='text-white/70 transition md:text-sm hover:text-white text-xs'>Features</a>
              <a href="#" className='text-white/70 transition md:text-sm hover:text-white text-xs'>Developers</a>
              <a href="#" className='text-white/70 transition md:text-sm hover:text-white text-xs'>Company</a>
              <a href="#" className='text-white/70 transition md:text-sm hover:text-white text-xs'>Blog</a>
              <a href="#" className='text-white/70 transition md:text-sm hover:text-white text-xs'>ChangeLog</a>
            </nav>
         
          <div className='flex lg:flex-1 lg:justify-end gap-5'>
            <Xsocial className=' text-white/40 hover:text-white transition'/>
            <InstaSocial className=' text-white/40 hover:text-white transition'/>
            <YtSocial className=' text-white/40 hover:text-white transition'/>
          </div>
        </div>
        <div className='flex items-center justify-center mt-2'>
          <Link className='text-white text-center'  target="_blank" rel="noopener noreferrer" href='https://pat-morojuoluwas-projects.vercel.app/'>
          Copyright @ 2024. Developed by Alpha_codes 
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer