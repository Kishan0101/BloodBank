import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import g1 from '../../assets/donation/g1.jpg';
import g2 from '../../assets/donation/g2.jpg';
import g3 from '../../assets/donation/g3.jpg';
import g4 from '../../assets/donation/g4.jpg';

const AboutDonation = () => {
    const data = [
        { title: 'Registration', img: g1 },
        { title: 'Seeing', img: g2 },
        { title: 'Donation', img: g3 },
        { title: 'Save Life', img: g4 },
    ];

    // Framer Motion animation variants
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.section
            className="grid place-items-center dark:text-white-900 px-4 sm:px-6 md:px-8"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="container max-w-full sm:max-w-4xl">
                <motion.div
                    className="text-center"
                    initial="initial"
                    animate="animate"
                    variants={sectionVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <br />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Donation Process
                    </h2>
                    <code className="text-sm sm:text-base">
                        The donation process from the time you arrive center until the time you leave
                    </code>
                    <br />
                    <br />
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center"
                    initial="initial"
                    animate="animate"
                    variants={sectionVariants}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {data.map((e, i) => (
                        <motion.div
                            key={i}
                            className="border-metal shadow-md rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm select-none"
                            initial="initial"
                            animate="animate"
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        >
                            <img
                                src={e.img}
                                draggable={false}
                                alt={e.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-4">
                                <h1 className="font-bold text-base sm:text-lg text-midnight dark:text-white-900">
                                    {i + 1} - {e.title}
                                </h1>
                                <p className="text-justify text-sm sm:text-base">
                                    Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit.
                                    Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis,
                                    nihil alias repellat quam architecto nobis laudantium ipsum nemo
                                    nesciunt quisquam est odit ad?
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutDonation;