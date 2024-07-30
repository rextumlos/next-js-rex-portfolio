import React, {useEffect, useState} from 'react';
import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const colors = ["bg-white", "bg-accent"];

const Stairs = () => {
    const [bgColor, setBgColor] = useState("bg-white")

    useEffect(() => {
        setBgColor(colors[Math.floor(Math.random() * colors.length)])
    }, []);

    return (
        <>
            {/*
                Render 6 motion divs, each representing a step of the stairs
                Each div will have the same animation defined by stairAnimation object.
                The delay for each div is calculated dynamically based on its reversed index,
                creating a staggered effect with decreasing delay for each subsequent step.
                Each div will have a random background color selected from the predefined list.
             */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className={`h-full w-full relative ${bgColor}`}
                    />
                )
            })}
        </>
    );
};

export default Stairs;