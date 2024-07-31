"use client"

import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 2,
                                duration: 0.4,
                                ease: "easeIn"
                            }
            }}>
                {/* image */}
                <motion.div initial={{opacity: 0}}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 2.3,
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }
                            }}
                            className="w-[298px] h-[298px] xl:w-[490px] xl:h-[490px] mix-blend-lighten absolute"
                >
                    <Image src="/assets/rex.png" priority quality={100} fill alt="rex-photo"
                           className="object-contain rounded-full"/>
                    <div className="absolute inset-0 rounded-full"
                         style={{backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))'}}></div>
                </motion.div>

                {/*  circle  */}
                <motion.svg className="w-[310px] xl:w-[506px] h-[310px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15, 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;