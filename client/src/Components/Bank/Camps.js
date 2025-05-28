import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import axios from '../Api';
import CampEdit from './CampEdit';

const Camps = () => {
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(-1);

    useEffect(() => {
        axios
            .get('/camps')
            .then((res) => {
                setData(res.data);
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

    return (
        <motion.div
            className="px-4 sm:px-6 md:px-8 mt-5"
            initial="initial"
            animate="animate"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
        >
            <motion.table
                className="w-full rounded-md text-center text-sm sm:text-base"
                initial="initial"
                animate="animate"
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <thead>
                    <tr>
                        <th className="border p-2 sm:p-4">Date</th>
                        <th className="border p-2 sm:p-4">Camp Name</th>
                        <th className="border p-2 sm:p-4">Address</th>
                        <th className="border p-2 sm:p-4 hidden sm:table-cell">State</th>
                        <th className="border p-2 sm:p-4 hidden sm:table-cell">District</th>
                        <th className="border p-2 sm:p-4 hidden md:table-cell">Organizer</th>
                        <th className="border p-2 sm:p-4">Contact</th>
                        <th className="border p-2 sm:p-4">Time</th>
                        <th className="border p-2 sm:p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) => (
                        <tr key={i}>
                            <td className="border p-2 sm:p-3">
                                {new Date(e.date).toLocaleDateString()}
                            </td>
                            <td className="border p-2 sm:p-3">{e.name}</td>
                            <td className="border p-2 sm:p-3">{e.address}</td>
                            <td className="border p-2 sm:p-3 hidden sm:table-cell">
                                {e.state}
                            </td>
                            <td className="border p-2 sm:p-3 hidden sm:table-cell">
                                {e.district}
                            </td>
                            <td className="border p-2 sm:p-3 hidden md:table-cell">
                                {e.organizer}
                            </td>
                            <td className="border p-2 sm:p-3">{e.contact}</td>
                            <td className="border p-2 sm:p-3">
                                <large>
                                    <code>{e.startTime + '-' + e.endTime}</code>
                                </large>
                            </td>
                            <td className="border p-2 sm:p-3">
                                <span
                                    className="text-purple cursor-pointer"
                                    onClick={() => setPopup(i)}
                                >
                                    <i className="fa-solid fa-pen-to-square"></i> Edit
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </motion.table>
            <CampEdit popup={popup} setPopup={setPopup} data={data[popup]} />
        </motion.div>
    );
};

export default Camps;