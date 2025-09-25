import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
export const Hero = () => {

    //Icons array 
    const icons = [
        "/assets/icon-1.svg",
        "/assets/icon-2.svg",
        "/assets/icon-3.svg",
        "/assets/icon-4.svg",
        "/assets/icon-5.svg",
        "/assets/icon-6.svg",
        "/assets/icon-7.svg",
        "/assets/icon-8.svg",

    ];
    return (
        <section>
            <div className='max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden'>
                {/* Profile Image */}
                <div>
                    <Image 
                    src="/assets/profile.png"
                    width={150}
                    height={150}
                    className='rounded-full mb-4'
                    priority
                     alt ="Profile Image"
                    />
                </div>
                {/* Name */}
                <h3 className='text-lg md:text-xl font-semibold'>
                    I'm Munene Builds <span className="inline-block animate-wave">👋</span>
                </h3>

                <h1 className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
                    Mobile Developer <br className='md:hidden' />  and FrontEnd Developer.        
                </h1>
                {/* Icons Swipe */}
                <div className='relative my-6 md:my-8 w-full mask-r-from-50% overflow-hidden'>
                    <motion.div className='flex gap-4 w-max'
                    animate={{x: ["0%", "-50%"]}}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration:15,
                        ease: "linear",
                    }}
                    >
                        {/* Icons Loop */}
                        {icons.concat(icons).map((icon, index)=>(
                            <Image
                            src={icon}
                            key={index}
                            width={40}
                            height={40}
                            className='md:w-[50px] md:h-[50px]'
                            />

                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
