'use client'
import Button from '@/components/Button'
import starBg from '@/assets/stars.png'
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

const backgroundPositionY = useTransform(scrollYProgress,[0,1], [-300,300])
  
  return (
    <motion.section
    ref={sectionRef}
    animate={{ backgroundPositionX:starBg.width}} transition={{repeat:Infinity, ease:'linear', duration:1.2}}
    className='h-[492px] md:h-[600px] flex items-center overflow-hidden relative' style={{backgroundImage:`url(${starBg.src})`, backgroundPositionY,}}>
      <div className='md:h-80 md:w-80 absolute h-64 w-64 opacity-20 rounded-full bg-purple-500 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'>
    
       
      </div>
      {/* <div className='absolute h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>
          <div className=' absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          
          <div className=' absolute h-2 w-2  left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
          
          <div className=' absolute h-5 w-5  left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center'>
            <div className=' h-2 w-2 bg-white rounded-full'></div>
          </div>
      </div>  */}
        <div className='container relative mt-16'>
            <h1 className='text-8xl  md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>AI SEO</h1>
            <p className=' text-lg text-white/70 md:text-xl max-w-xl mx-auto mt-5 text-center'>Elevate your site&lsquo;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
            <div className=' flex justify-center mt-5'>

            <Button>Join waitlist</Button>
            </div>
        </div>
    </motion.section>
  )
}

export default Hero