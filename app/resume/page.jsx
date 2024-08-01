"use client"

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiRubyonrails, SiNextdotjs, SiTailwindcss, SiMariadb, SiMongodb, SiFirebase } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

const about = {
    title: "My personal information",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Certe, nisi voluptatem tanti aestimaretis.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "John Rexpearl Tumlos",
        },
        {
            fieldName: "Contact",
            fieldValue: "(+63) 960 3055 380",
        },
        {
            fieldName: "Experience",
            fieldValue: "1 Year",
        },
        {
            fieldName: "Skype",
            fieldValue: "jrptumlos@outlook.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Filipino",
        },
        {
            fieldName: "Email",
            fieldValue: "jrptumlos@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Tagalog",
        },
    ]
}

const experience = {
    icon: "",
    title: "My working experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Certe, nisi voluptatem tanti aestimaretis.",
    items: [
        {
            company: "Kodacamp",
            position: "Software Engineer",
            duration: "Dec 2023 - Present"
        },
        {
            company: "Xurpas Inc.",
            position: "Backend Developer Intern",
            duration: "Aug 2022 - Sep 2022"
        }
    ]
}

const education = {
    icon: "",
    title: "My educational background",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Certe, nisi voluptatem tanti aestimaretis.",
    items: [
        {
            institution: "Kodacamp",
            degree: "Ruby on Rails Developer",
            duration: "Sep 2023 - Dec 2023"
        },
        {
            institution: "Polytechnic University of the Philippines - Manila",
            degree: "Bachelor of Science in Computer Engineering",
            duration: "2019 - Sep 2023"
        },
        {
            institution: "BPI Foundation and Bayan Academy",
            degree: "Backend Web Development 101",
            duration: "Oct 2022 - Nov 2022"
        },
    ]
}

const skills = {
    title: "My skills I experienced",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Certe, nisi voluptatem tanti aestimaretis.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaReact />,
            name: "react",
        },
        {
            icon: <SiMariadb />,
            name: "mariadb",
        },
        {
            icon: <BiLogoSpringBoot />,
            name: "springboot",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiExpress />,
            name: "express.js",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <SiFirebase />,
            name: "firebase",
        },
        {
            icon: <SiRubyonrails />,
            name: "ruby on rails",
        },
        {
            icon: <FaDocker />,
            name: "docker",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        }
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () => {
    return (
        <section id="resume">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }}
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
                <div className="container mx-auto"
                     itemScope
                     itemType="https://schema.org/Person"
                >
                    <Tabs defaultValue="experience"
                          className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About Me</TabsTrigger>
                        </TabsList>

                        {/*  content  */}
                        <div className="min-h-[70vh] w-full">
                            {/* experience */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h1 className="text-4xl font-bold">{experience.title}</h1>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent" itemProp="startDate">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" itemProp="jobTitle">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*  dot  */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60" itemProp="worksFor">{item.company}</p>
                                                    </div>
                                                </li>
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* education */}
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h1 className="text-4xl font-bold">{education.title}</h1>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
                                            {education.items.map((item, index) => {
                                                return <li key={index}
                                                           className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent" itemProp="startDate">{item.duration}</span>
                                                    <h3 className={`${item.institution.length > 15 ? "text-lg" : "text-xl"} max-w-[260px] min-h-[60px] text-center lg:text-left`} itemProp="credentialCategory">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*  dot  */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className={`${item.institution.length > 15 && "text-sm"} text-white/60 lg:text-left`} itemProp="recognizedBy">{item.institution}</p>
                                                    </div>
                                                </li>
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* skills */}
                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h1 className="text-4xl font-bold">{skills.title}</h1>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            {/* about */}
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h1 className="text-4xl font-bold">{about.title}</h1>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl hover:text-accent transition-all duration-300">{item.fieldValue}</span>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;