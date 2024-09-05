'use client'

import Button from '@/components/Button'
import React, { useRef } from 'react'
import startBg from '@/assets/stars.png'
import gridLine from '@/assets/grid-lines.png'
import {motion, useScroll, useTransform} from 'framer-motion'

const CallToAction = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress} = useScroll({
        target:sectionRef,
        offset: ['start end', 'end start']
    }
    )

    const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300,300])
  return (
        <section className='py-16 md:py-20' ref={sectionRef}>
            <div className='container'>
                <motion.div animate={{backgroundPositionX:startBg.width}} transition={{repeat:Infinity, duration:30, ease:'linear'}} className='border border-white/15 py-20 rounded-xl overflow-hidden relative' style={{backgroundPositionY,backgroundImage:`url(${startBg.src})`}}>
                    <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]' style={{backgroundImage:`url(${gridLine.src})`}}></div>
                    <div className='relative'>
                        <h2 className=' text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>AI-driven SEO for everyone</h2>
                        <p className=' text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight'>Achieve clear, impactful results without the complexity</p>
                        <div className=' flex justify-center mt-8'>
                            <Button>Join waitlist</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
  )
}

export default CallToAction