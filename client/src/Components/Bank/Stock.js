import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import axios from '../Api';

const Stock = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('/bank/getStock')
            .then((r) => {
                setData(r.data.stock);
            })
            .catch((err) => {
                alert('Something went wrong');
            });
    }, []);

    // Framer Motion animation variants
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const cardVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
    };

    return (
        <motion.div
            className="px-4 sm:px-6 md:px-8 py-6"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="flex justify-center flex-wrap text-center text-white-900 text-lg sm:text-2xl"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {data &&
                    Object.keys(data).map((e, i) => (
                        <motion.div
                            key={i}
                            className="bg-blood h-20 sm:h-22 w-20 sm:w-22 m-4 sm:m-6 md:m-10 p-5 sm:p-7 rounded-b-full"
                            variants={cardVariants}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                            <p className="font-bold">{data[e]}mL</p>
                            <code>{e}</code>
                        </motion.div>
                    ))}
            </motion.div>
        </motion.div>
    );
};

export default Stock;