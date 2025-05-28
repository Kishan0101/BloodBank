import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import cc from '../../assets/cc.png';

const Contact = () => {
    const data = [
        {
            title: 'BloodLink related queries, feedback and suggestions',
            body: [
                'Center For Development of Advanced Computing',
                'C-56/1, Anusandhan Bhawan , Sector-62, Noida, Uttar Pardesh-201307',
                '8527890830',
                'bloodlink[at]cdac[dot]in',
            ],
        },
        {
            title: 'For Administrative queries',
            body: [
                'Blood Cell, National Health Mission',
                'Ministry of Health & Family Welfare,New Delhi - 110011',
            ],
        },
        {
            title: 'For administrative queries',
            body: [
                'Blood Cell, National Health Mission',
                'Ministry of Health & Family Welfare,New Delhi - 110011',
            ],
        },
    ];

    // Framer Motion animation variants
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <br />
            <motion.h1
                className="text-center text-xl sm:text-2xl md:text-3xl font-bold"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Contact Details
            </motion.h1>
            <br />
            <motion.div
                className="flex flex-col md:flex-row gap-6 md:gap-12 justify-around"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="flex-1">
                    {data.map((e, index) => (
                        <div key={index}>
                            <p className="text-lg sm:text-xl font-bold underline">{e.title}</p>
                            <br />
                            <code>
                                {e.body.map((k, i) => (
                                    <p key={i} className="text-sm sm:text-md md:text-base">
                                        {k}
                                    </p>
                                ))}
                            </code>
                            <br />
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={cc}
                        draggable={false}
                        alt="Contact Illustration"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;