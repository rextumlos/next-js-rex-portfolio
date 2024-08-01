import React from 'react';
import { FaGithub, FaLinkedinIn, FaFreeCodeCamp } from "react-icons/fa";
import Link from "next/link";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/rextumlos"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/jrptumlos/"
    },
    {
        icon: <FaFreeCodeCamp />,
        path: "https://www.freecodecamp.org/rextumlos"
    }
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyles} target="_blank" itemProp="url">
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;