"use client"

import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
    const [startTypeWriter, setStartTypeWriter] = useState(false)
    const words = ["Software Engineer 👨‍💻", "Ruby on Rails Developer 💎", "Backend Programmer ⚙️", "Computer Engineer 🎓"]

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTypeWriter(true)
        }, 2800)

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="h-full" id="home">
            <div className="container mx-auto h-full"
                 itemScope
                 itemType="https://schema.org/Person"
            >
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <motion.div initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            delay: 2.4,
                                            duration: 0.4,
                                            ease: "easeInOut"
                                        }
                                    }}
                        >
                          <span className="text-xl">
                            <Typewriter
                                options={{
                                    strings: words,
                                    loop: true,
                                    delay: 50,
                                    cursorClassName: "text-accent",
                                    autoStart: startTypeWriter
                                }}
                            />
                          </span>
                        </motion.div>
                        <h1 className="h1 mb-6">
                            Hello! I'm<br/> <span className="text-accent" itemProp="name">Rex Tumlos</span>
                        </h1>

                        <p className="max-w-[500px] mb-9 text-white/80" itemProp="description">
                            I excel in creating websites, specialized in backend, and proficient in various programming
                            languages and technologies.
                        </p>

                        {/*  buttons and socials  */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                <span>Download CV</span>
                                <FiDownload className="text-xl"/>
                            </Button>

                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>


                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
};

export default Home;