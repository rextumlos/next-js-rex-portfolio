"use client"

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {motion} from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+63) 960 3055 380",
        meta: "telephone"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "jrptumlos@gmail.com",
        meta: "email"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Taguig City, Philippines",
        meta: "address"
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [isSentEmail, setIsSentEmail] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSelectChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            service: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        const result = await response.json()
        result.message === "Success!" && setIsSentEmail(true)
    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="py-6"
        >
            <div className="container mx-auto" itemScope itemType="https://schema.org/Person">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                {/*  form  */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={e => handleSubmit(e)}>
                            <h1 className="text-4xl text-accent">Let's work together!</h1>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Certe, nisi voluptatem tanti aestimaretis.
                            </p>

                        {/*  input  */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="First name"
                                       required
                                       name="firstname"
                                       value={formData.firstname}
                                       onChange={handleChange} />
                                <Input type="text" placeholder="Last name"
                                       required
                                       name="lastname"
                                       value={formData.lastname}
                                       onChange={handleChange}/>
                                <Input type="email" placeholder="Email address"
                                       required
                                       name="email"
                                       value={formData.email}
                                       onChange={handleChange}/>
                                <Input type="phone" placeholder="Phone number"
                                       required
                                       name="phone"
                                       value={formData.phone}
                                       onChange={handleChange}/>
                            </div>

                        {/*  select  */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web-development">Web Development</SelectItem>
                                        <SelectItem value="api">API</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        {/*  Text area  */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                                name="message"
                                required
                                onChange={handleChange}
                            />

                        {/*  button  */}
                            <div className="flex flex-row justify-between items-center">
                                <Button size="md" className="max-w-40">Send message</Button>
                                {isSentEmail && (<span>Sent message! Thank you!</span>)}
                            </div>
                        </form>
                    </div>

                {/*  info  */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl" itemProp={item.meta}>{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;