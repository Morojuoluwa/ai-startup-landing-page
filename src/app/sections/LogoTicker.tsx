import React from 'react'
import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'


const LogoTicker = () => {
  return (
   <section className='py-10 md:px-20'>
    <div className='container px-7'>
        <div className='flex items-center gap-5'>
            <div className=' flex-1 md:flex-none'>
                <h2>Trusted by top innovative teams</h2>
            </div>
            <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <div className='flex flex-none gap-14'>
                    {[acmeLogo,apexLogo,celestialLogo,quantumLogo,pulseLogo,echoLogo].map((logo)=>(
                        <img src={logo.src} alt='' key={logo.src} className='h-6 w-auto'/>
                    ))}
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default LogoTicker