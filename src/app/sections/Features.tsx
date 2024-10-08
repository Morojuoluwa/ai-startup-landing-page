'use client'

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from '@/assets/product-image.png'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, ValueAnimationTransition } from "framer-motion";

const tabs = [
    {
      icon: "/assets/lottie/vroom.lottie",
      title: "User-friendly dashboard",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: "/assets/lottie/click.lottie",
      title: "One-click optimization",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSizeX: 135,
    },
    {
      icon: "/assets/lottie/stars.lottie",
      title: "Smart keyword generator",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSizeX: 177,
    },
  ];

  const FeatureTab = (tab: typeof tabs[number]) =>{

    const lotteRef = useRef<DotLottieCommonPlayer>(null)
    
    const xPercentage = useMotionValue(0)
    const yPercentage = useMotionValue(0)
    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black,transparent)`
    
    useEffect(()=>{

      const options: ValueAnimationTransition = {
        duration:4,
        repeat:Infinity,
        ease:"linear",
        repeatType:'loop'
      }
      animate(xPercentage,[0,100,100,0,0],options)

      animate(yPercentage,[0,0,100,100,0],options)
    },[])

    const handleHover = () =>{
      if (lotteRef.current === null) return
      lotteRef.current.seek(0)
      lotteRef.current.play()
    }

    return (
      <div onMouseEnter={handleHover} 
      className="border relative border-white items-center flex p-2.5 lg:flex-1 rounded-xl gap-2.5">
          <motion.div style={{maskImage}} className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"></motion.div>
          <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
              <DotLottiePlayer ref={lotteRef} src={tab.icon} className="h-5 w-5" autoplay />
          </div>
          <div className="font-medium">{tab.title}</div>
          <div className=" text-xs rounded-full px-2 py-0.5 bg-[#Bc44ff] text-black font-semibold">{tab.isNew && <div>new</div>}</div>
      </div>
)
  }
  
  export const Features = () => {
    return <section className="py-20">
        <div className="container">
            <h2 className=" text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts</h2>
            <p className=" text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5">From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO</p>
            <div className="mt-10 flex flex-col lg:flex-row gap-3">

                {tabs.map((tab)=>(
                    <FeatureTab {...tab} key={tab.title}/>
                ))}
            </div>
            <div className=" border border-white/20 p-2.5 rounded-xl mt-3">
            <div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{backgroundImage:`url(${productImage.src})`}}></div>
                {/* <Image src={productImage} alt=""/> */}
           </div>
         </div>
    </section>;
  };
  