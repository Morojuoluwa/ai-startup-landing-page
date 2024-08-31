import React from 'react'
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'

const Header = () => {
  return (
    
   <header className=' py-4 border-b border-white/15 md:border-none'>
        <div className='container'>
            <div className=' flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto'>
                <div>
                    <div className=' border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                        <LogoIcon className=' h-8 w-8'/>
                    </div>
                </div>
                <div className=' hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a href="" className='text-white/70 hover:text-white transition'>Features</a>
                        <a href="" className='text-white/70 hover:text-white transition'>Develpers</a>
                        <a href="" className='text-white/70 hover:text-white transition'>Pricing</a>
                        <a href="" className='text-white/70 hover:text-white transition'>ChangeLog</a>
                    </nav>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
                    
                   Join the waitlist
                    </button>    
                    <MenuIcon className='md:hidden'/>
                </div>
            </div>
        </div>
   </header>
  )
}

export default Header