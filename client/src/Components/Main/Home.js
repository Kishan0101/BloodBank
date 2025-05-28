import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import bg from '../../assets/bg.webp';
import bg2 from '../../assets/bg2.jpg';
import donationFact from '../../assets/donationFact.webp';
import g1 from '../../assets/donation/g1.jpg';
import g2 from '../../assets/donation/g2.jpg';
import g3 from '../../assets/donation/g3.jpg';
import g4 from '../../assets/donation/g4.jpg';

const Home = () => {
    const temp = [
        { blood: 'A+', donate: 'A+ AB+', recieve: 'A+ A- O+ O-' },
        { blood: 'O+', donate: 'O+ A+ B+ AB+', recieve: 'O+ O-' },
        { blood: 'B+', donate: 'B+ AB+', recieve: 'B+ B- O+ O-' },
        { blood: 'AB+', donate: 'AB+', recieve: 'Everyone' },
        { blood: 'A-', donate: 'A+ A- AB+ AB-', recieve: 'A- O-' },
        { blood: 'O-', donate: 'Everyone', recieve: 'O-' },
        { blood: 'B-', donate: 'B+ B- AB+ AB-', recieve: 'B- O-' },
        { blood: 'AB-', donate: 'AB+ AB-', recieve: 'AB- A- B- O-' },
    ];

    const temp2 = [
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
        <div className="dark:text-white-900">
            {/* Hero Image */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <img src={bg} alt="Background" className="w-full h-auto object-cover" />
            </motion.div>

            {/* Intro Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center mt-6 px-4 sm:px-8 md:px-16 lg:px-32"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="w-full max-w-md">
                    <img
                        draggable={false}
                        src={bg2}
                        alt="Blood Donation"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="text-center">
                    <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-dark dark:text-white-900">
                        Be the reason <br /> for <br /> someone’s heartbeat
                    </p>
                </div>
            </motion.div>

            {/* Learn About Donation */}
            <motion.h1
                className="font-bold text-center text-blood my-6 text-lg sm:text-xl underline"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Learn About Donation
            </motion.h1>
            <motion.div
                className="flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="flex-1 flex flex-col items-center">
                    <img
                        src={donationFact}
                        alt="Donation Fact"
                        className="w-full max-w-sm h-auto mb-4"
                    />
                    <p className="text-center text-sm sm:text-base">
                        <code>
                            After donating blood, the body works to replenish the blood loss. This
                            stimulates the production of new blood cells and in turn, helps in
                            maintaining good health.
                        </code>
                    </p>
                </div>
                <div className="flex-1">
                    <table className="w-full max-w-lg mx-auto border-collapse">
                        <thead>
                            <tr>
                                <td
                                    colSpan={3}
                                    className="border bg-blood text-white-900 text-center font-bold py-2"
                                >
                                    Compatible Blood Type Donors
                                </td>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-sm sm:text-base">Blood Type</th>
                                <th className="border px-4 py-2 text-sm sm:text-base">
                                    Donate Blood To
                                </th>
                                <th className="border px-4 py-2 text-sm sm:text-base">
                                    Receive Blood From
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {temp.map((e, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-sm sm:text-base">
                                        {e.blood}
                                    </td>
                                    <td className="border px-4 py-2 text-sm sm:text-base">
                                        {e.donate}
                                    </td>
                                    <td className="border px-4 py-2 text-sm sm:text-base">
                                        {e.recieve}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Blood Donation Process */}
            <motion.p
                className="text-lg sm:text-xl underline font-bold text-blood text-center mt-6 mb-6"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Blood Donation Process
            </motion.p>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-20"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 1 }}
            >
                {temp2.map((e, i) => (
                    <div
                        key={i}
                        className="border-metal shadow-md rounded-lg overflow-hidden max-w-full sm:max-w-md select-none grid grid-cols-1 sm:grid-cols-2"
                    >
                        <div>
                            <img
                                src={e.img}
                                draggable={false}
                                alt={e.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
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
                    </div>
                ))}
            </motion.div>

            {/* Footer */}
            <motion.div
                className="w-full bg-blood text-white-900 h-max text-xs sm:text-sm text-center font-bold py-4 mt-6"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 1.2 }}
            >

            </motion.div>
        </div>
    );
};

export default Home;